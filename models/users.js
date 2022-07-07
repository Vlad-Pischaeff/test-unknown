const { Schema, model } = require('mongoose');

const schema = new Schema({
    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
        default: "http://localhost:5000/upload/icons8-person-64.png"
    },
})

module.exports = model('Users', schema);