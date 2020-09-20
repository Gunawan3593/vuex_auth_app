const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create the Sales Delivery Item schema
const SalesDeliveryItemSchema = new Schema({
    no: {
        type: Number,
        default: 0
    },
    autonumber: {
        type: Number,
        default: 0
    },
    delivery: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesdeliveries'
    },
    order_item: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'salesorderitems'
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    order_qty: {
        type: Number,
        default: 0
    },
    qty: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    }
});

SalesDeliveryItemSchema.plugin(autoIncrement.plugin, { model: 'salesdeliveryitems', field: 'autonumber', startAt: 1 });

module.exports = SalesDeliveryItem = mongoose.model('salesdeliveryitems', SalesDeliveryItemSchema);