const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the product schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    cost: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
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

module.exports = Product = mongoose.model('products', ProductSchema);