// Configuration and package imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Route imports
const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/question');
const progressRoutes = require('./routes/progress');
const emailRoutes = require('./routes/email');


// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()); // Parse JSON bodies (as a built-in middleware)

// Logger middleware for requests
app.use((req, res, next) => {
    console.log(`${req.method} Request to ${req.path}`);
    next();
});

// API routes
app.use('/api/user', userRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/email', emailRoutes);



// Serve static files in production
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    // Development mode - Simple API response to indicate that the server is running
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

// Database connection and server startup
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Start the server on successful database connection
        app.listen(process.env.PORT, () => {
            console.log(`Connected to MongoDB & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });
