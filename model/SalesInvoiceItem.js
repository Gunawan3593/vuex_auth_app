const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Sales Invoice Item schema
const SalesInvoiceItemSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    invoice: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesinvoices'
    },
    order_item: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesorderitems'
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    order_qty: {
        type: Number,
        default: 0
    },
    deliv_qty: {
        type: Number,
        default: 0
    },
    qty: {
        type: Number,
        default: 0
    },
    return_qty: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
        default: 0
    }
});

SalesInvoiceItemSchema.plugin(autoIncrement.plugin, { model: 'salesinvoiceitems', field: 'autonumber', startAt: 1 });

module.exports = SalesInvoiceItem = mongoose.model('salesinvoiceitems', SalesInvoiceItemSchema);