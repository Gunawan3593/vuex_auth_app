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
            let data = await Inventory.findOne({  product : id });
            let qty = 0;
            if (data !== null) {
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


module.exports = router;
