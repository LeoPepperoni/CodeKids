// Importing the necessary mongoose module
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// Defining a schema for users
const userSchema = new Schema({
    // The first name of the user, which is a required field
    firstName: {
        type: String,
        required: true
    },
    // The last name of the user, which is a required field
    lastName: {
        type: String,
        required: true
    },
    // The email of the user, which is a required field and must be unique
    email: {
        type: String,
        required: true,
        unique: true
    },
    // The password of the user, which is a required field
    password: {
        type: String,
        required: true
    },
},
    // Enabling timestamps. This will automatically add 'createdAt' and 'updatedAt' fields to each document.
    { timestamps: true });

    // static signup method
    userSchema.statics.signup = async function (firstName, lastName, email, password) {

        const exists = await this.findOne({ email });

        if (exists) {
            throw new Error('Email already in use');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({ firstName, lastName, email, password: hash });
        
        return user;
    }

// Exporting the User model based on the userSchema.
// This will create a collection named 'Users' (plural form of 'User') in the MongoDB database.
module.exports = mongoose.model('User', userSchema);