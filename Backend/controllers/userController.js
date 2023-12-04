// Import the User model for accessing the database related to user operations
const User = require('../models/userModel');
// Import jsonwebtoken for creating JWT tokens for authentication
const jwt = require('jsonwebtoken');

// Function to create a JWT token given a user ID
const createToken = (_id) => {
    // 'process.env.SECRET' is the secret key used for signing the token
    // Token expires in 3 days as per 'expiresIn' value
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Controller function to log in a user
const loginUser = async (req, res) => {
    // Extract 'email' and 'password' sent by client from the request body
    const { email, password } = req.body;

    try {
        // Use the 'login' method defined in User model to authenticate the user
        const user = await User.login(email, password);

        // If successful and confirmed, create a token for the user
        const token = createToken(user._id);

        // Respond with the user's ID, email, and token
        res.status(200).json({ id: user._id, email, token });
    } catch (error) {
        // If there's an error (like user not found, wrong password, or not confirmed), respond with error message
        res.status(400).json({ error: error.message });
    }
};


// Controller function to sign up a new user
const signupUser = async (req, res) => {
    // Extract 'email' and 'password' sent by client from the request body
    const { firstName, lastName, email, password } = req.body;

    try {
        // Use the 'signup' method defined in User model to create a new user
        const user = await User.signup(firstName, lastName, email, password);

        // If user creation is successful, create a token for the user
        const token = createToken(user._id);

        // Respond with the new user's email and token
        res.status(200).json({ id: user._id, email, token });
    } catch (error) {
        // If there's an error during sign up (like email already in use), respond with error message
        res.status(400).json({ error: error.message });
    }
};

// Export the controller functions for use in the route definitions
module.exports = { signupUser, loginUser };
