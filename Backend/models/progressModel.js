const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, // Using ObjectId instead of String for referencing
        ref: 'User', // Assuming you have a User model
        required: true,
    },
    questionID: {
        type: mongoose.Schema.Types.ObjectId, // Using ObjectId for referencing
        ref: 'Question', // Assuming you have a Question model
        required: true
    },
    module: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false // You can set a default value if it makes sense for your logic
    },
    // Consider adding a timestamp for when the progress was recorded
    createdAt: {
        type: Date,
        default: Date.now
    }
});

progressSchema.index({ userID: 1, questionID: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
