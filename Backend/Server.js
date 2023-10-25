require('dotenv').config();
const path = require('path');

// Import necessary modules
const express = require('express')              // Express framework
const userRoutes = require('./routes/users') // Project-related routes
const mongoose = require('mongoose')            // Mongoose for MongoDB interactions

// Initialize the express application
const app = express()

// Middleware to parse JSON requests
app.use(express.json())

// Logging middleware to display the route path and HTTP method for incoming requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Route for managing projects (API endpoint)
app.use('/api/users', userRoutes)
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
*/
// Connect to the MongoDB database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Start the server and listen for requests on the specified PORT once the DB connection is established
        app.listen(process.env.PORT, () => {
            console.log('Connected to database & listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        // Log any errors that occur during the database connection process
        console.log(error)
    })