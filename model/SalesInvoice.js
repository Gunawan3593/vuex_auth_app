const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Sales Invoice schema
const SalesInvoiceSchema = new Schema({
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
        ref:'salesorders'
    },
    transdate: {
        type: Date,
        required: true
    },
    customer: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'customers'
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

SalesInvoiceSchema.plugin(autoIncrement.plugin, { model: 'salesinvoices', field: 'autonumber', startAt: 1 });

module.exports = SalesInvoice = mongoose.model('salesinvoices', SalesInvoiceSchema);