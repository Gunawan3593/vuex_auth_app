const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the supplier schema
const SupplierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cpname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
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

module.exports = Supplier = mongoose.model('suppliers', SupplierSchema);