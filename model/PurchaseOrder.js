const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Order schema
const PurchaseOrderSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    no: {
        type: String,
        required: true
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

PurchaseOrderSchema.plugin(autoIncrement.plugin, { model: 'purchaseorders', field: 'autonumber', startAt: 1 });

module.exports = PurchaseOrder = mongoose.model('purchaseorders', PurchaseOrderSchema);