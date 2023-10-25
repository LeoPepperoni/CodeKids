// Importing the necessary mongoose module
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

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

        // validation
        if (!firstName || !lastName || !email || !password) {
            throw new Error('All fields are required');
        }
        if (!validator.isEmail(email)) {
            throw new Error('Invalid Email');
        }

        const exists = await this.findOne({ email });

        if (exists) {
            throw new Error('Email already in use');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({ firstName, lastName, email, password: hash });
        
        return user;
    }

    // static login method
    userSchema.statics.login = async function (email, password) {

        //console.log(email, password);

        // validation
        if (!email || !password) {
            throw Error('All fields are required');
        }

        const user = await this.findOne({ email });

        if (!user) {
            throw Error('Invalid Email');
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw Error('Invalid Password');
        }

        return user;
    }

// Exporting the User model based on the userSchema.
// This will create a collection named 'Users' (plural form of 'User') in the MongoDB database.
module.exports = mongoose.model('User', userSchema);