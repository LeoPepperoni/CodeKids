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
    type: {
        type: Number, // 1 for fill in the blank, 2 for multiple choice
        required: true,
    },
    module: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Question', questionSchema)