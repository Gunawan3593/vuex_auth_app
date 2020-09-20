const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Inventory = require('../../model/Inventory');

/**
 * @route GET api/inventories/checkstock/:id
 * @desc check stock inventory by product
 * @access Public
 */
router.get('/checkstock/:id', async (req, res) => {
    let id = req.params.id;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            let data = await Inventory.find({  product : id, qty : { $gt : 0 } });
            response = {
                data: data,
                success: true,
                msg: 'Data load successfully.'
            };
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
 * @route GET api/inventories/getstock/:id/:cost
 * @desc get stock inventory by product and cost
 * @access Public
 */
router.get('/getstock/:id/:cost', async (req, res) => {
    let id = req.params.id;
    let cost = req.params.cost;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            let data = await Inventory.findOne({  product : id, cost: cost });
            let qty = 0;
            if(data != null) {
                qty = data.qty;
            }
            response = {
                qty: qty,
                success: true,
                msg: 'Data load successfully.'
            };
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
 * @route GET api/inventories/data
 * @desc get data inventory
 * @access Public
 */
router.get('/data', async (req, res) => {
    try {
        let data = await Inventory.aggregate(
            [
                {
                    $group:
                    {
                        _id: "$product",
                        qty: { $sum: "$qty"}
                    }
                }
            ]);

        response = {
            data : data,
            success: true,
            msg: 'Data load successfully.'
        };

    } catch (err) {
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }
    return res.json(response);
});


module.exports = router;
