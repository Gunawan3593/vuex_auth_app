const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Order schema
const SalesOrderSchema = new Schema({
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

SalesOrderSchema.plugin(autoIncrement.plugin, { model: 'salesorders', field: 'autonumber', startAt: 1 });

module.exports = SalesOrder = mongoose.model('salesorders', SalesOrderSchema);