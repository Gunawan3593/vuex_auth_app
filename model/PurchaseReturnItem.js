const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Receipt Item schema
const PurchaseReturnItemSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    return: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchasereturns'
    },
    invoice_item: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchaseinvoiceitems'
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    invoice_qty: {
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

PurchaseReturnItemSchema.plugin(autoIncrement.plugin, { model: 'purchasereturnitems', field: 'autonumber', startAt: 1 });

module.exports = PurchaseReturnItem = mongoose.model('purchasereturnitems', PurchaseReturnItemSchema);