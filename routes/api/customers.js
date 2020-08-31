const express = require('express');
const router = express.Router();
const Customer = require('../../model/Customer');

/**
 * @route GET api/customers
 * @desc Get data
 * @access Public
 */
router.get('/', async (req, res) => {
    let response = {}
    try {
        let data = await Customer.find().populate('user');
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
 * @route POST api/customers/add
 * @desc Add new data
 * @access Public
 */
router.post('/add', async (req, res) => {
    let {
        name,
        address,
        cpname,
        email,
        phone,
        active,
        user
    } = req.body
    
    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (address == '') {
        return res.status(400).json({
            msg: "Address is required."
        });
    }

    if (cpname == '') {
        return res.status(400).json({
            msg: "Contact Person is required."
        });
    }

    if (email == '') {
        return res.status(400).json({
            msg: "Email is required."
        });
    }

    if (phone == '') {
        return res.status(400).json({
            msg: "Phone is required."
        });
    }

    if (user == '') {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    // The data is valid and now we can register the data
    let  data = new Customer({
        name,
        address,
        cpname,
        email,
        phone,
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
                msg: "Hurry! Customer is now registered."
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
 * @route POST api/customers/update
 * @desc Update data
 * @access Public
 */
router.post('/update', async (req, res) => {
    let {
        id,
        name,
        address,
        cpname,
        email,
        phone,
        active,
        user
    } = req.body
    
    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (address == '') {
        return res.status(400).json({
            msg: "Address is required."
        });
    }

    if (cpname == '') {
        return res.status(400).json({
            msg: "Contact Person is required."
        });
    }

    if (email == '') {
        return res.status(400).json({
            msg: "Email is required."
        });
    }

    if (phone == '') {
        return res.status(400).json({
            msg: "Phone is required."
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
        let data =  await Customer.findOneAndUpdate({ _id : id },{
            name:name,
            address:address,
            cpname:cpname,
            email:email,
            phone: phone,
            active:active,
            user: user
        },{ new : true });

        if (data) {
            response = {
                data: data,
                success: true,
                msg: "Hurry! Customer updated successfully."
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
 * @route POST api/customers/delete
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
        let data =  await Customer.deleteOne({ _id : id });
        if (data) {
            response = {
                success: true,
                msg: "Hurry! Customer deleted successfully."
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

