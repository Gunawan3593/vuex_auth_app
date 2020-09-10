const express = require('express');
const router = express.Router();
const Product = require('../../model/Product');

/**
 * @route GET api/products
 * @desc Get data
 * @access Public
 */
router.get('/', async (req, res) => {
    let response = {}
    try {
        let data = await Product.find().populate(['user','category']);
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
 * @route POST api/products/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
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

    // The data is valid and now we can register the data
    let  data = new Product({
        name,
        description,
        category,
        cost,
        price,
        active,
        user
    });

    let response = {};
    try {
        let saved = await data.save();

        if (saved) {
            response = {
                data: data,
                success: true,
                msg: "Hurry! Product is now registered."
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

module.exports = router;