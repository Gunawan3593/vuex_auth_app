const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Order schema
const PurchaseOrderItemSchema = new Schema({
    autonumber: {
        type: Number,
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
    rcv_qty: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
        default: 0
    }
});

PurchaseOrderItemSchema.plugin(autoIncrement.plugin, { model: 'purchaseorderitems', field: 'autonumber' });

module.exports = PurchaseOrderItem = mongoose.model('purchaseorderitems', PurchaseOrderItemSchema);