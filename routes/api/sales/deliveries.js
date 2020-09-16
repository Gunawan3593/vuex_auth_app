const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const SalesDelivery = require('../../../model/SalesDelivery');
const SalesDeliveryItem = require('../../../model/SalesDeliveryItem');
const SalesOrderItem = require('../../../model/SalesOrderItem');
const SalesOrder = require('../../../model/SalesOrder');
const Inventory = require('../../../model/Inventory');

/**
 * @route GET api/sales/deliveries
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await SalesDelivery.find().populate(['user','customer','order']).sort({ autonumber : -1 });
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
 * @route GET api/sales/deliveries/:id
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
            let data = await SalesDelivery.findOne({  _id : id }).populate(['user','customer','order']);
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
 * @route GET api/sales/deliveries/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        delivery
    } = req.body
    let response = {}
    try {
        let data = await SalesDeliveryItem.find({ delivery : delivery }).populate(['order_item','product']);
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
 * @route POST api/pucahse/deliveries/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
        no,
        transdate,
        customer,
        order,
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

    if (order == '') {
        return res.status(400).json({
            msg: "Order is required."
        });
    }

    if (user == undefined) {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    if(items.length == 0) {
        return res.status(400).json({
            msg: "Delivery Items are required."
        });
    }

    // The data is valid and now we can register the data
    let data = new SalesDelivery({
        no,
        transdate,
        customer,
        order,
        user,
        notes
    });

    let response = {};
    try {
        let header = await data.save();
        let update =  await SalesOrder.findOneAndUpdate({ _id : order },{
            status : 1
        },{ new : true });
        items.forEach(item => {
            SalesDeliveryItem.create({
                delivery : header._id,
                order_item : item.order_item,
                product : item.product,
                order_qty : item.order_qty,
                qty: item.qty,
                price: item.price
            });
            SalesOrderItem.findOne({ _id : item.order_item },function(err, res){
                if(!err){
                    res.deliv_qty = res.deliv_qty + item.qty;
                    res.save();
                }
            });
            inventoryUpdated(item, false);
        });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Sales Delivery is now registered."
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
        let oldItems = await SalesDeliveryItem.find({ delivery : id });
        if(oldItems != undefined) {
            oldItems.forEach(item => {
                SalesOrderItem.updateOne({ _id : item.order_item },{
                    $inc : { deliv_qty : item.qty * -1 }
                },function(err){ });
                inventoryUpdated(item, true);
            });
        }
        response = {
            success : true,
            msg: 'Order Item reversed successfully.'
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
 * @route POST api/puchase/deliveries/update
 * @desc Update data
 * @access Public
 */
router.post('/update', async (req, res) => {
    let {
        id,
        transdate,
        customer,
        order,
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

    if (user == undefined) {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    if(items.length == 0) {
        return res.status(400).json({
            msg: "Delivery Items are required."
        });
    }

    // The data is valid and now we can register the data
    let response = {};
    try {
        let data =  await SalesDelivery.findOneAndUpdate({ _id : id },{
            transdate: transdate,
            customer: customer,
            order: order,
            notes: notes,
            user: user
        },{ new : true });

        if(data != undefined) {
            await reverseQtyItem(id);
            SalesDeliveryItem.deleteMany({ delivery : id }, function (err) {});
            items.forEach(item => {
                SalesDeliveryItem.create({
                    delivery : id,
                    order_item : item.order_item,
                    product : item.product,
                    order_qty : item.order_qty,
                    qty: item.qty,
                    price: item.price
                });
                SalesOrderItem.findOne({ _id : item.order_item },function(err, res){
                    if(!err){
                        res.deliv_qty = res.deliv_qty + item.qty;
                        res.save();
                    }
                });
                inventoryUpdated(item,false);
            });
        }
        response = {
            data: data,
            success: true,
            msg: "Hurry! Sales Delivery updated successfully."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/deliveries/void
 * @desc Cancel delivery data
 * @access Public
 */
router.post('/void', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can delete the data
    let response = {};
    try {
        let data =  await SalesDelivery.findOneAndUpdate({ _id : id },{
            status: 2
        },{ new : true });
        if (data) {
            let anyDelivered = await checkOrderDelivered(data.order);
            if(!anyDelivered.status){
                let updateorder =  await SalesOrder.findOneAndUpdate({ _id : data.order },{
                    status: 0
                },{ new : true });
            }
            await reverseQtyItem(id);
            response = {
                success: true,
                msg: "Hurry! Delivery void successfully."
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
 * @route POST api/sales/deliveries/getcode
 * @desc Generate code
 * @access Public
 */
router.get('/getcode', async (req, res) => {
    let response = {};
    try {
        let date = new Date();
        let code = 'SD';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        let data = await SalesDelivery.aggregate([
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

async function checkOrderDelivered(id){
    let response = {
        status : false
    }
    try {
        let data = await SalesDelivery.findOne({ order : id, status : { $ne : 2 } });
        if(data !== null) {
            response = {
                status : true
            }
        }
    } catch (err) {
        response = {
            msg: `There was an error.${err}`
        };
    }
    return response;
}


module.exports = router;