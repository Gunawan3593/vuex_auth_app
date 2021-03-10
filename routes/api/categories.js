const express = require('express');
const router = express.Router();
const Category = require('../../model/Category');

/**
 * @route GET api/categories
 * @desc Get data
 * @access Public
 */
router.get('/', async (req, res) => {
    let response = {}
    try {
        let data = await Category.find().populate('user');
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
 * @route POST api/categories/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
        name,
        description,
        active,
        user
    } = req.body
    
    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (user == undefined) {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    // The data is valid and now we can register the data
    let  data = new Category({
        name,
        description,
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
                msg: "Hurry! Category is now registered."
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
 * @route POST api/categories/update
 * @desc Update data
 * @access Public
 */
router.post('/update', async (req, res) => {
    let {
        id,
        name,
        description,
        active,
        user
    } = req.body
    
    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (user == undefined) {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    // The data is valid and now we can update the data
    let response = {};
    try {
        let data =  await Category.findOneAndUpdate({ _id : id },{
            name:name,
            description:description,
            active:active,
            user: user
        },{ new : true });

        if (data) {
            response = {
                data: data,
                success: true,
                msg: "Hurry! Category updated successfully."
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
 * @route POST api/categories/delete
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
        let data =  await Category.deleteOne({ _id : id });
        if (data) {
            response = {
                success: true,
                msg: "Hurry! Category deleted successfully."
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