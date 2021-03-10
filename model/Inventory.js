const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the inventory schema
const InventorySchema = new Schema({
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    qty: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Inventory = mongoose.model('inventories', InventorySchema);