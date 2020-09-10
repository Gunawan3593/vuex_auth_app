const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Purchase Order Item schema
const SalesOrderItemSchema = new Schema({
    autonumber: {
        type: Number,
        default: 0
    },
    order: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesorders'
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    qty: {
        type: Number,
        default: 0
    },
    deliv_qty: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    }
});

SalesOrderItemSchema.plugin(autoIncrement.plugin, { model: 'salesorderitems', field: 'autonumber', startAt: 1 });

module.exports = SalesOrderItem = mongoose.model('salesorderitems', SalesOrderItemSchema);