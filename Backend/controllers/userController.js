// Importing required modules
const User = require('../models/userModel');
const mongoose = require('mongoose');

// Controller function to retrieve a user by username and password
const getUserByUserNameAndPassword = async (req, res) => {
    const { userName, password } = req.body;

    try {
        // Find the user by their username and password
        const user = await User.findOne({ userName, password });

        if (!user) {
            return res.status(404).json({ error: 'No such User' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller function to create a new user in the database
const createUser = async (req, res) => {
    
    // Destructuring user information from the request body
    const { firstName, lastName, email, password } = req.body;
    
    // Trying to add the new user to the database
    try {
        const user = await User.signup(firstName, lastName, email, password);

        // Sending the created user as a response with status code 200 (OK)
        res.status(200).json({email, user});
    } catch (error) {
        // In case of an error (e.g. validation error), sending an error response with status code 400 (Bad Request)
        res.status(400).json({ error: error.message });
    }
};

// Controller function to delete a user from the database
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such User' });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ error: 'No such User' });
    }

    res.status(200).json(user);
};

// Controller function to update a user in the database
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such User' });
    }

    const user = await User.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!user) {
        return res.status(404).json({ error: 'No such User' });
    }

    res.status(200).json(user);
};

// Exporting the controller functions to be used in other modules
module.exports = {
    createUser,
    getUserByUserNameAndPassword,
    deleteUser,
    updateUser
};