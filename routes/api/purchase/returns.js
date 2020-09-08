const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PurchaseReturn = require('../../../model/PurchaseReturn');
const PurchaseReturnItem = require('../../../model/PurchaseReturnItem');
const PurchaseInvoiceItem = require('../../../model/PurchaseInvoiceItem');
const Inventory = require('../../../model/Inventory');

/**
 * @route GET api/purchase/returns
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await PurchaseReturn.find().populate(['user','supplier','invoice']).sort({ autonumber : -1 });
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
 * @route GET api/purchase/returns/:id
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
            let data = await PurchaseReturn.findOne({  _id : id }).populate(['user','supplier','invoice']);
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
 * @route GET api/purchase/returns/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        returns
    } = req.body
    let response = {}
    try {
        let data = await PurchaseReturnItem.find({ return : returns }).populate(['invoice_item','product']);
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
 * @route POST api/pucahse/returns/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
        no,
        transdate,
        supplier,
        invoice,
        user,
        notes,
        items
    } = req.body
    
    // Check for empty value
    if (supplier == '') {
        return res.status(400).json({
            msg: "Supplier is required."
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
            msg: "Receipt Items are required."
        });
    }

    // The data is valid and now we can register the data
    let data = new PurchaseReturn({
        no,
        transdate,
        supplier,
        invoice,
        user,
        notes
    });

    let response = {};
    try {
        let header = await data.save();
        items.forEach(item => {
            if(item.qty > 0) {
                PurchaseReturnItem.create({
                    return : header._id,
                    invoice_item : item.invoice_item,
                    product : item.product,
                    invoice_qty : item.invoice_qty,
                    qty: item.qty,
                    cost: item.cost
                });
                PurchaseInvoiceItem.findOne({ _id : item.invoice_item },function(err, res){
                    if(!err){
                        res.return_qty = res.return_qty + item.qty;
                        res.save();
                    }
                });
                inventoryUpdated(item, false);
            }
        });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Purchase Return is now registered."
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
        let oldItems = await PurchaseReturnItem.find({ return : id });
        if(oldItems != undefined) {
            oldItems.forEach(item => {
                PurchaseInvoiceItem.updateOne({ _id : item.invoice_item },{
                    $inc : { return_qty : item.qty * -1 }
                },function(err){ });
                inventoryUpdated(item, true);
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
        supplier,
        invoice,
        user,
        notes,
        items
    } = req.body
    
    // Check for empty value
    if (supplier == '') {
        return res.status(400).json({
            msg: "Supplier is required."
        });
    }

    if (user == '') {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    if(items.length == 0) {
        return res.status(400).json({
            msg: "Receipt Items are required."
        });
    }

    // The data is valid and now we can register the data
    let response = {};
    try {
        let data =  await PurchaseReturn.findOneAndUpdate({ _id : id },{
            transdate: transdate,
            supplier: supplier,
            invoice: invoice,
            notes: notes,
            user: user
        },{ new : true });

        if(data != undefined) {
            await reverseQtyItem(id);
            PurchaseReturnItem.deleteMany({ return : id }, function (err) {});
            items.forEach(item => {
                if(item.qty > 0) {
                    PurchaseReturnItem.create({
                        return : id,
                        invoice_item : item.invoice_item,
                        product : item.product,
                        invoice_qty : item.invoice_qty,
                        qty: item.qty,
                        cost: item.cost
                    });
                    PurchaseInvoiceItem.findOne({ _id : item.invoice_item },function(err, res){
                        if(!err){
                            res.return_qty = res.return_qty + item.qty;
                            res.save();
                        }
                    });
                    inventoryUpdated(item, false);
                }
            });
        }
        response = {
            data: data,
            success: true,
            msg: "Hurry! Purchase Return updated successfully."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/purchase/returns/void
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
        let data =  await PurchaseReturn.findOneAndUpdate({ _id : id },{
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
 * @route POST api/purchase/returns/close
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
        let data =  await PurchaseReturn.findOneAndUpdate({ _id : id },{
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
 * @route POST api/purchase/retruns/open
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
        let data =  await PurchaseReturn.findOneAndUpdate({ _id : id },{
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
 * @route POST api/purchase/returns/getcode
 * @desc Generate code
 * @access Public
 */
router.get('/getcode', async (req, res) => {
    let response = {};
    try {
        let date = new Date();
        let code = 'RT';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        let data = await PurchaseReturn.aggregate([
            {$project: {no: 1, autonumber: 1, month: {$month: '$transdate'}, year: {$year: '$transdate'}, maxVal: { $max: '$autonumber' }}},
            {$match: {month: date.getMonth() + 1, year: date.getFullYear()}},
            {$sort: {autonumber : -1}}
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