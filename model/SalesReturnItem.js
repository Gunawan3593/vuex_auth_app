const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Sales Receipt Item schema
const SalesReturnItemSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    return: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesreturns'
    },
    invoice_item: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesinvoiceitems'
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
    price: {
        type: Number,
        default: 0
    }
});

SalesReturnItemSchema.plugin(autoIncrement.plugin, { model: 'salesreturnitems', field: 'autonumber', startAt: 1 });

module.exports = SalesReturnItem = mongoose.model('salesreturnitems', SalesReturnItemSchema);