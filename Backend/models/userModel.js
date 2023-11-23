const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

// static signup method
userSchema.statics.signup = async function (firstName, lastName, email, password) {

    if (!firstName || !lastName || !email || !password) {
        throw Error('All fields must be filled')
    }

    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('This email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ firstName, lastName, email, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function (email, password) {
    
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }
    
    return { 
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email 
    };
}

module.exports = mongoose.model('User', userSchema)