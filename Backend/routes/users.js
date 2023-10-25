// Importing necessary modules
const express = require('express');
// Destructuring and importing the necessary functions from the userController
const {
    createUser,
    getUserByUserNameAndPassword,
    deleteUser,
    updateUser
} = require('../controllers/userController');

// Initializing a new router
const router = express.Router();

// Route to POST (create) a single user. On a POST request to '/', the createUser function from the controller will be invoked.
router.post('/', createUser);

// Route to POST (login) a user based on username and password. On a POST request to '/login', the getUserByUserNameAndPassword function from the controller will be invoked.
router.post('/login', getUserByUserNameAndPassword);

// Route to DELETE a single user by their ID. Currently, this route responds with a JSON message.
router.delete('/:id', deleteUser);

// Route to PATCH (update) a single user by their ID. Currently, this route responds with a JSON message.
router.patch('/:id', updateUser);

// Exporting the router to be used in other modules
module.exports = router;