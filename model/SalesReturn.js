const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Sales Receipt schema
const SalesReturnSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    no: {
        type: String,
        required: true
    },
    invoice: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesinvoices'
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

SalesReturnSchema.plugin(autoIncrement.plugin, { model: 'salesreturns', field: 'autonumber', startAt: 1 });

module.exports = SalesReturn = mongoose.model('salesreturns', SalesReturnSchema);