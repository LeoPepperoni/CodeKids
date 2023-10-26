require('dotenv').config()

// require packages
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');

// express app
const app = express()


app.use(cors());
app.use(bodyParser.json());

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', userRoutes)

// deployment
__dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the frontend build folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    // Catch-all route to serve the frontend's index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}
else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

// connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })