const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Invoice Item schema
const PurchaseInvoiceItemSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    invoice: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchaseinvoices'
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
    rcv_qty: {
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

PurchaseInvoiceItemSchema.plugin(autoIncrement.plugin, { model: 'purchaseinvoiceitems', field: 'autonumber', startAt: 1 });

module.exports = PurchaseInvoiceItem = mongoose.model('purchaseinvoiceitems', PurchaseInvoiceItemSchema);