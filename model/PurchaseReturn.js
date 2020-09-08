const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Receipt schema
const PurchaseReturnSchema = new Schema({
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
        ref:'purchaseinvoices'
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

PurchaseReturnSchema.plugin(autoIncrement.plugin, { model: 'purchasereturns', field: 'autonumber', startAt: 1 });

module.exports = PurchaseReturn = mongoose.model('purchasereturns', PurchaseReturnSchema);