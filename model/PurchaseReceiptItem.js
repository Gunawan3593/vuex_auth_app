const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Receipt Item schema
const PurchaseReceiptItemSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    receipt: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchasereceipts'
    },
    order_item: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchaseorderitems'
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    order_qty: {
        type: Number,
        default: 0
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

PurchaseReceiptItemSchema.plugin(autoIncrement.plugin, { model: 'purchasereceiptitems', field: 'autonumber' });

module.exports = PurchaseReceiptItem = mongoose.model('purchasereceiptitems', PurchaseReceiptItemSchema);