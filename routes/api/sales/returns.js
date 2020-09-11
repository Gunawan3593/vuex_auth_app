const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const SalesReturn = require('../../../model/SalesReturn');
const SalesReturnItem = require('../../../model/SalesReturnItem');
const SalesInvoiceItem = require('../../../model/SalesInvoiceItem');
const Inventory = require('../../../model/Inventory');

/**
 * @route GET api/sales/returns
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await SalesReturn.find().populate(['user','customer','invoice']).sort({ autonumber : -1 });
        if (data) {
            response = {
                data: data,
                success: true,
                msg: 'Data load successfully.'
            };
        }
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }

    return res.json(response);
});

/**
 * @route GET api/sales/returns/:id
 * @desc Get data by id
 * @access Public
 */
router.get('/data/:id', async (req, res) => {
    let id = req.params.id;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            let data = await SalesReturn.findOne({  _id : id }).populate(['user','customer','invoice']);
            if (data) {
                response = {
                    data: data,
                    success: true,
                    msg: 'Data load successfully.'
                };
            }
        }catch(err){
            response = {
                success: false,
                msg: `There was an error ${err}.`
            };
        }
    }
    return res.json(response);
});

/**
 * @route GET api/sales/returns/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        returns
    } = req.body
    let response = {}
    try {
        let data = await SalesReturnItem.find({ return : returns }).populate(['invoice_item','product']);
        if (data) {
            response = {
                data: data,
                success: true,
                msg: 'Data load successfully.'
            };
        }
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }

    return res.json(response);
});
/**
 * @route POST api/sales/returns/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
        no,
        transdate,
        customer,
        invoice,
        user,
        notes,
        items
    } = req.body
    
    // Check for empty value
    if (customer == '') {
        return res.status(400).json({
            msg: "Customer is required."
        });
    }

    if (invoice == '') {
        return res.status(400).json({
            msg: "Order is required."
        });
    }

    if (user == '') {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    if(items.length == 0) {
        return res.status(400).json({
            msg: "Invoice Items are required."
        });
    }

    // The data is valid and now we can register the data
    let data = new SalesReturn({
        no,
        transdate,
        customer,
        invoice,
        user,
        notes
    });

    let response = {};
    try {
        let header = await data.save();
        items.forEach(item => {
            if(item.qty > 0) {
                SalesReturnItem.create({
                    return : header._id,
                    invoice_item : item.invoice_item,
                    product : item.product,
                    invoice_qty : item.invoice_qty,
                    qty: item.qty,
                    price: item.price
                });
                SalesInvoiceItem.findOne({ _id : item.invoice_item },function(err, res){
                    if(!err){
                        res.return_qty = res.return_qty + item.qty;
                        res.save();
                    }
                });
                inventoryUpdated(item, true);
            }
        });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Sales Return is now registered."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

async function reverseQtyItem (id){
    let response = {};
    try {
        let oldItems = await SalesReturnItem.find({ return : id });
        if(oldItems != undefined) {
            oldItems.forEach(item => {
                SalesInvoiceItem.updateOne({ _id : item.invoice_item },{
                    $inc : { return_qty : item.qty * -1 }
                },function(err){ });
                inventoryUpdated(item, false);
            });
        }
        response = {
            success : true,
            msg: 'Invoice Item reversed successfully.'
        };
    }catch(err){
        response = {
            msg: `There was an error.${err}`
        };
    }

    return response;
}

async function inventoryUpdated(data,plus){
    let response = {};
    try {
        let item = await Inventory.findOne({ product : data.product });
        if(item  !== null) {
            if(plus) {
                Inventory.updateOne({ _id : item._id },{
                    $inc : { qty : data.qty }
                },function(err){ });
            }else{
                Inventory.updateOne({ _id : item._id },{
                    $inc : { qty : data.qty * -1 }
                },function(err){ });
            }
        }else{
            if(plus) {
                Inventory.create({
                    product : data.product,
                    qty: data.qty
                });
            }else{
                Inventory.create({
                    product : data.product,
                    qty: data.qty * -1
                });
            }
        }
        response = {
            success : true,
            msg: 'Inventory updated successfully.'
        };
    }catch(err){
        response = {
            msg: `There was an error.${err}`
        };
    }

    return response;
}

/**
 * @route POST api/puchase/returns/update
 * @desc Update data
 * @access Public
 */
router.post('/update', async (req, res) => {
    let {
        id,
        transdate,
        customer,
        invoice,
        user,
        notes,
        items
    } = req.body
    
    // Check for empty value
    if (customer == '') {
        return res.status(400).json({
            msg: "Customer is required."
        });
    }

    if (user == '') {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    if(items.length == 0) {
        return res.status(400).json({
            msg: "Invoice Items are required."
        });
    }

    // The data is valid and now we can register the data
    let response = {};
    try {
        let data =  await SalesReturn.findOneAndUpdate({ _id : id },{
            transdate: transdate,
            customer: customer,
            invoice: invoice,
            notes: notes,
            user: user
        },{ new : true });

        if(data != undefined) {
            await reverseQtyItem(id);
            SalesReturnItem.deleteMany({ return : id }, function (err) {});
            items.forEach(item => {
                if(item.qty > 0) {
                    SalesReturnItem.create({
                        return : id,
                        invoice_item : item.invoice_item,
                        product : item.product,
                        invoice_qty : item.invoice_qty,
                        qty: item.qty,
                        price: item.price
                    });
                    SalesInvoiceItem.findOne({ _id : item.invoice_item },function(err, res){
                        if(!err){
                            res.return_qty = res.return_qty + item.qty;
                            res.save();
                        }
                    });
                    inventoryUpdated(item, true);
                }
            });
        }
        response = {
            data: data,
            success: true,
            msg: "Hurry! Sales Return updated successfully."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/returns/void
 * @desc Cancel receipt data
 * @access Public
 */
router.post('/void', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can delete the data
    let response = {};
    try {
        let data =  await SalesReturn.findOneAndUpdate({ _id : id },{
            status: 2
        },{ new : true });
        if (data) {
            await reverseQtyItem(id);
            response = {
                success: true,
                msg: "Hurry! Return void successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/returns/close
 * @desc Close return data
 * @access Publics
 */
router.post('/close', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can close the order data
    let response = {};
    try {
        let data =  await SalesReturn.findOneAndUpdate({ _id : id },{
            status: 1
        },{ new : true });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Return closed successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/retruns/open
 * @desc open closed return data
 * @access Publics
 */
router.post('/open', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can open  closed order data
    let response = {};
    try {
        let data =  await SalesReturn.findOneAndUpdate({ _id : id },{
            status: 0
        },{ new : true });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Return open successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/returns/getcode
 * @desc Generate code
 * @access Public
 */
router.get('/getcode', async (req, res) => {
    let response = {};
    try {
        let date = new Date();
        let code = 'SR';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        let data = await SalesReturn.aggregate([
            {$project: {no: 1, autonumber: 1, month: {$month: '$transdate'}, year: {$year: '$transdate'}, maxVal: { $max: '$autonumber' }}},
            {$match: {month: date.getMonth() + 1, year: date.getFullYear()}},
            {$sort: {autonumber : -1}},
            { $limit : 1 }
        ]);
        let monthyear = month+year;
        let newcode = code + '-' + monthyear + '-0001';
        if(data.length > 0) {
            data = Object.assign({}, data);
            let lastno = data[0].no;
            let auto = lastno.substring(lastno.length-4);
            let str =  '' + (parseInt(auto) + 1);
            let lstr = '0000';
            newcode = code + '-' + monthyear + '-' +(lstr+str).substring(str.length);
        }
        response = {
                    success: true,
                    code: newcode,
                    msg: "Code generate successfully."
                };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

module.exports = router;