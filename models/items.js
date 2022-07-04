const { Schema, model } = require('mongoose');

const schema = new Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
})

module.exports = model('Items', schema);