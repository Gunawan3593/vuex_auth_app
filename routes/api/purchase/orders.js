const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PurchaseOrder = require('../../../model/PurchaseOrder');
const PurchaseOrderItem = require('../../../model/PurchaseOrderItem');
const PurchaseReceipt = require('../../../model/PurchaseReceipt');
const ObjectId = mongoose.Types.ObjectId;

/**
 * @route GET api/purchase/orders/data
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
 * @route GET api/purchase/orders/receivable/:id
 * @desc Get data
 * @access Public
 */
router.get('/receivable/:id', async (req, res) => {
    let id = req.params.id;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            // let data = await PurchaseOrder.find({  supplier : id }).populate(['user','supplier']);
            let data = await PurchaseOrderItem.aggregate(
                [
                    {
                        $group:
                        {
                            _id: "$order",
                            qtyReceivable: { $sum: { $subtract : ["$qty","$rcv_qty"]}}
                        }
                    },
                    {
                        $lookup:
                        {
                            from: "purchaseorders",
                            localField: "_id",
                            foreignField: "_id",
                            as: "headers"
                        }
                    },
                    {
                       $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                    },
                    { $project: { headers: 0 } },
                    { $match : {qtyReceivable : { $gt:0 }, supplier: ObjectId(id), status: { $in : [0,1] }}}
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

    if (user == undefined) {
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

    if (user == undefined) {
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
    // The data is valid and now we can close the order data
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
 * @route POST api/purchase/order/close
 * @desc Close order data
 * @access Publics
 */
router.post('/close', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can close the order data
    let response = {};
    try {
        let data =  await PurchaseOrder.findOneAndUpdate({ _id : id },{
            status: 2
        },{ new : true });

        data =  await PurchaseReceipt.updateMany({ order : id },{
            status: 1
        },function(err){ 
            console.log(err);
        });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Order closed successfully."
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
 * @route POST api/purchase/order/open
 * @desc open close order data
 * @access Publics
 */
router.post('/open', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can open  closed order data
    let response = {};
    try {
        let data =  await PurchaseOrder.findOneAndUpdate({ _id : id },{
            status: 1
        },{ new : true });

        data =  await PurchaseReceipt.updateMany({ order : id },{
            status: 0
        },function(err){ 
            console.log(err);
        });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Order open successfully."
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
    let response = {};
    try {
        let date = new Date();
        let code = 'PO';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        // let data =  await PurchaseOrder.findOne().sort({ autonumber : -1 });
        let data = await PurchaseOrder.aggregate([
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