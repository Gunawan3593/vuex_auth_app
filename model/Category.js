const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the category schema
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
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

module.exports = Category = mongoose.model('categories', CategorySchema);