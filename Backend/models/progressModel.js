const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true,
    },
    module: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false // Default to false, indicating the module is not yet completed
    }
});

// Creating an index to ensure unique combination of userID and module
progressSchema.index({ userID: 1, module: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
