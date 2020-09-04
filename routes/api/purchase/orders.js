const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PurchaseOrder = require('../../../model/PurchaseOrder');
const PurchaseOrderItem = require('../../../model/PurchaseOrderItem');

/**
 * @route GET api/purchase/orders
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await PurchaseOrder.find().populate(['user','supplier']).sort({ autonumber : -1 });
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
 * @route GET api/purchase/orders/:id
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
            let data = await PurchaseOrder.findOne({  _id : id }).populate(['user','supplier']);
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
 * @route GET api/purchase/orders/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        order
    } = req.body
    let response = {}
    try {
        let data = await PurchaseOrderItem.find({ order : order }).populate('product');
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
 * @route POST api/pucahse/orders/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
        no,
        transdate,
        supplier,
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
            msg: "Order Items are required."
        });
    }

    // The data is valid and now we can register the data
    let data = new PurchaseOrder({
        no,
        transdate,
        supplier,
        user,
        notes
    });

    let response = {};
    try {
        let header = await data.save();
        items.forEach(item => {
            PurchaseOrderItem.create({
                order : header._id,
                product : item.product,
                qty: item.qty,
                cost: item.cost
            });
        });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Purchase Order is now registered."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/pucahse/orders/update
 * @desc Update data
 * @access Public
 */
router.post('/update', async (req, res) => {
    let {
        id,
        transdate,
        supplier,
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
            msg: "Order Items are required."
        });
    }

    // The data is valid and now we can register the data
    let response = {};
    try {
        let data =  await PurchaseOrder.findOneAndUpdate({ _id : id },{
            transdate: transdate,
            supplier: supplier,
            notes: notes,
            user: user
        },{ new : true });

        if(data != undefined) {
            PurchaseOrderItem.deleteMany({ order : id }, function (err) {});
            items.forEach(item => {
                PurchaseOrderItem.create({
                    order : id,
                    product : item.product,
                    qty: item.qty,
                    cost: item.cost
                });
            });
        }
        response = {
            data: data,
            success: true,
            msg: "Hurry! Purchase Order updated successfully."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/purchase/order/void
 * @desc Cancel order data
 * @access Publics
 */
router.post('/void', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can delete the data
    let response = {};
    try {
        let data =  await PurchaseOrder.findOneAndUpdate({ _id : id },{
            status: 3
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
 * @route POST api/purchase/orders/getcode
 * @desc Generate code
 * @access Public
 */
router.get('/getcode', async (req, res) => {
    // The data is valid and now we can delete the data
    let response = {};
    try {
        let date = new Date();
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        // let data =  await PurchaseOrder.findOne().sort({ autonumber : -1 });
        let data = await PurchaseOrder.aggregate([
            {$project: {no: 1, autonumber: 1, month: {$month: '$transdate'}, maxVal: { $max: '$autonumber' }}},
            {$match: {month: date.getMonth() + 1}},
            {$sort: {autonumber : -1}}
        ]);
        data = Object.assign({}, data);
        let lastno = data[0].no;
        // Template PO-0920-0001
        let monthyear = month+year;
        let newcode = 'PO-'+ monthyear + '-0001';
        if(data != undefined) {
            let auto = lastno.substring(lastno.length-4);
            let str =  '' + (parseInt(auto) + 1);
            let lstr = '0000';
            newcode = 'PO-'+ monthyear + '-' +(lstr+str).substring(str.length);
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