const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const SalesOrder = require('../../../model/SalesOrder');
const SalesInvoice = require('../../../model/SalesInvoice');
const SalesInvoiceItem = require('../../../model/SalesInvoiceItem');
const ObjectId = mongoose.Types.ObjectId;

async function getCode() {
    let response = {};
    try {
        let date = new Date();
        let code = 'SI';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        let data = await SalesInvoice.aggregate([
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

    return response;
}

/**
 * @route POST api/sales/invoices/generate
 * @desc Generate invoice
 * @access Public
 */
router.post('/generate', async (req, res) => {
    let {
        transdate,
        customer,
        order,
        user,
        notes,
        items
    } = req.body

    let getNewNo = await getCode();
    let no = '';
    if(getNewNo.success){
        no = getNewNo.code;
    }
    
    // Check for empty value
    if (no == ''){
        return res.status(400).json({
            msg: "No. is ungenerated."
        });
    }

    if (customer == '') {
        return res.status(400).json({
            msg: "Customer is required."
        });
    }

    if (order == '') {
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

    // The data is valid and now we can delete the data
    let response = {};
    let data = new SalesInvoice({
        no,
        order,
        transdate,
        customer,
        user,
        notes
    });

    try {
        let header = await data.save();
        items.forEach(item => {
            SalesInvoiceItem.create({
                invoice : header._id,
                product : item.product,
                order_item : item.order_item,
                order_qty : item.order_qty,
                deliv_qty : item.deliv_qty,
                qty: item.qty,
                price: item.price
            });
        });
        let update =  await SalesOrder.findOneAndUpdate({ _id : order },{
            status : 4
        },{ new : true });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Sales Invoice is now registered."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route GET api/sales/invoices/data
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await SalesInvoice.find().populate(['user','customer','order']).sort({ autonumber : -1 });
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
 * @route GET api/sales/invoices/:id
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
            let data = await SalesInvoice.findOne({  _id : id }).populate(['user','customer']);
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
 * @route GET api/sales/invoices/returnable/:id
 * @desc Get data
 * @access Public
 */
router.get('/returnable/:id', async (req, res) => {
    let id = req.params.id;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            let data = await SalesInvoiceItem.aggregate(
                [
                    {
                        $group:
                        {
                            _id: "$invoice",
                            qtyReturnable: { $sum: { $subtract : ["$qty","$return_qty"]}}
                        }
                    },
                    {
                        $lookup:
                        {
                            from: "salesinvoices",
                            localField: "_id",
                            foreignField: "_id",
                            as: "headers"
                        }
                    },
                    {
                       $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                    },
                    { $project: { headers: 0 } },
                    { $match : {qtyReturnable : { $gt:0 }, customer: ObjectId(id), status: 1}}
                ]
            );
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
 * @route GET api/sales/invoices/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        invoice
    } = req.body
    let response = {}
    try {
        let data = await SalesInvoiceItem.find({ invoice : invoice }).populate('product');
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
 * @route POST api/sales/invoices/void
 * @desc Cancel order data
 * @access Publics
 */
router.post('/void', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can close the invoice data
    let response = {};
    try {
        let data =  await SalesInvoice.findOneAndUpdate({ _id : id },{
            status: 2
        },{ new : true });

        let updateorder =  await SalesOrder.findOneAndUpdate({ _id : data.order },{
            status: 2
        },{ new : true });
        if (data) {
            response = {
                success: true,
                msg: "Hurry! Order void successfully."
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
 * @route POST api/sales/invoices/close
 * @desc Close invoice data
 * @access Publics
 */
router.post('/close', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can close the invoice data
    let response = {};
    try {
        let data =  await SalesInvoice.findOneAndUpdate({ _id : id },{
            status: 1
        },{ new : true });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Invoice closed successfully."
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
 * @route POST api/sales/invoices/open
 * @desc open close order data
 * @access Publics
 */
router.post('/open', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can open  closed invoice data
    let response = {};
    try {
        let data =  await SalesInvoice.findOneAndUpdate({ _id : id },{
            status: 0
        },{ new : true });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Invoice open successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

module.exports = router;