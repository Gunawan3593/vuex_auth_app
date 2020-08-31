const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Purchase Order schema
const PurchaseOrderSchema = new Schema({
    no: {
        type:String,
        required: true
    },
    date: {
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
    void: {
        type: Boolean,
        default: false
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

module.exports = PurchaseOrder = mongoose.model('purchaseorders', PurchaseOrderSchema);