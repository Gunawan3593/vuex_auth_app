const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PurchaseOrder = require('../../../model/PurchaseOrder');
const PurchaseInvoice = require('../../../model/PurchaseInvoice');
const PurchaseInvoiceItem = require('../../../model/PurchaseInvoiceItem');
const ObjectId = mongoose.Types.ObjectId;

async function getCode() {
    let response = {};
    try {
        let date = new Date();
        let code = 'PI';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        let data = await PurchaseInvoice.aggregate([
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
 * @route POST api/purchase/invoices/generate
 * @desc Generate invoice
 * @access Public
 */
router.post('/generate', async (req, res) => {
    let {
        transdate,
        supplier,
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

    if (supplier == '') {
        return res.status(400).json({
            msg: "Supplier is required."
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
    let data = new PurchaseInvoice({
        no,
        order,
        transdate,
        supplier,
        user,
        notes
    });

    try {
        let header = await data.save();
        items.forEach(item => {
            PurchaseInvoiceItem.create({
                invoice : header._id,
                product : item.product,
                order_item : item.order_item,
                order_qty : item.order_qty,
                rcv_qty : item.rcv_qty,
                qty: item.qty,
                cost: item.cost
            });
        });
        let update =  await PurchaseOrder.findOneAndUpdate({ _id : order },{
            status : 4
        },{ new : true });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Purchase Invoice is now registered."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route GET api/purchase/invoices/data
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await PurchaseInvoice.find().populate(['user','supplier','order']).sort({ autonumber : -1 });
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
 * @route GET api/purchase/invoices/:id
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
            let data = await PurchaseInvoice.findOne({  _id : id }).populate(['user','supplier']);
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
 * @route GET api/purchase/invoices/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        invoice
    } = req.body
    let response = {}
    try {
        let data = await PurchaseInvoiceItem.find({ invoice : invoice }).populate('product');
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
 * @route POST api/purchase/invoices/void
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
        let data =  await PurchaseInvoice.findOneAndUpdate({ _id : id },{
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
 * @route POST api/purchase/invoices/close
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
        let data =  await PurchaseInvoice.findOneAndUpdate({ _id : id },{
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
 * @route POST api/purchase/invoices/open
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
        let data =  await PurchaseInvoice.findOneAndUpdate({ _id : id },{
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