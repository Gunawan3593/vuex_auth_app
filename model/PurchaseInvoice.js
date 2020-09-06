const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Invoice schema
const PurchaseInvoiceSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    no: {
        type: String,
        required: true
    },
    order: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'purchaseorders'
    },
    transdate: {
        type: Date,
        required: true
    },
    supplier: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'suppliers'
    },
    notes: {
        type: String
    },
    status: {
        type: Number,
        default: 0
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    date: {
        type: Date,
        default: Date.now
    },
});

PurchaseInvoiceSchema.plugin(autoIncrement.plugin, { model: 'purchaseinvoices', field: 'autonumber' });

module.exports = PurchaseInvoice = mongoose.model('purchaseinvoices', PurchaseInvoiceSchema);