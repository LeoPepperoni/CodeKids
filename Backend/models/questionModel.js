const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    answer: {
        type: String,
        required: true
    },
    module: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Question', questionSchema)