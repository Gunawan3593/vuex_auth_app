const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Purchase Order schema
const PurchaseOrderItemSchema = new Schema({
    no: {
        type:Number,
        default: 0
    },
    order: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchaseorders'
    },
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
    }
});

module.exports = PurchaseOrderItem = mongoose.model('purchaseorderitems', PurchaseOrderItemSchema);