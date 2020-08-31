const express = require('express');
const router = express.Router();
const PurchaseOrder = require('../../model/PurchaseOrder');
const PurchaseOrderItem = require('../../model/PurchaseOrderItem');

/**
 * @route GET api/purchase/orders
 * @desc Get data
 * @access Public
 */
router.get('/', async (req, res) => {
    let response = {}
    try {
        let data = await PurchaseOrder.find().populate('user','supplier');
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
 * @route GET api/purchase/orders/item
 * @desc Get data
 * @access Public
 */
router.get('/item', async (req, res) => {
    let {
        id
    } = req.body
    let response = {}
    try {
        let data = await PurchaseOrderItem.find({ id }).populate('product');
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
        header,
        items
    } = req.body
    
    // Check for empty value
    if (header.supplier == '') {
        return res.status(400).json({
            msg: "Supplier is required."
        });
    }

    if (header.user == '') {
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
        header
    });

    let response = {};
    try {
        let header = await data.save();
        items.forEach((item, index) => {
            item.unshift({ 'order': header._id, 'no' : index+1 });
        });
        if (header) {
            let item = PurchaseOrderItem.insertMany ({
                items
            });
            let saved = await item.saved();
            if(saved) {
                response = {
                    data: data,
                    success: true,
                    msg: "Hurry! Purchase Order is now registered."
                };
            }
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/products/update
 * @desc Update data
 * @access Public
 */
router.post('/update', async (req, res) => {
    let {
        id,
        name,
        description,
        category,
        cost,
        price,
        active,
        user
    } = req.body
    
    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (category == '') {
        return res.status(400).json({
            msg: "Category is required."
        });
    }

    if (cost == '') {
        return res.status(400).json({
            msg: "Cost is required."
        });
    }

    if (price == '') {
        return res.status(400).json({
            msg: "Price is required."
        });
    }

    if (user == '') {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    // The data is valid and now we can update the data
    let response = {};
    try {
        let data =  await Product.findOneAndUpdate({ _id : id },{
            name:name,
            description:description,
            category:category,
            cost:cost,
            price: price,
            active:active,
            user: user
        },{ new : true });

        if (data) {
            response = {
                data: data,
                success: true,
                msg: "Hurry! Product updated successfully."
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
 * @route POST api/products/delete
 * @desc Delete data
 * @access Public
 */
router.post('/delete', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can delete the data
    let response = {};
    try {
        let data =  await Product.deleteOne({ _id : id });
        if (data) {
            response = {
                success: true,
                msg: "Hurry! Product deleted successfully."
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
router.post('/getcode', async (req, res) => {
    // The data is valid and now we can delete the data
    let response = {};
    try {
        let data =  await Purchase.findOne().sort({  });
        if (data) {
            response = {
                success: true,
                msg: "Hurry! Product deleted successfully."
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