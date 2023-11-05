const express = require('express');
const { createQuestion, deleteQuestion } = require('../controllers/questionController');

const router = express.Router();

// Add question route
router.post('/add', createQuestion);

// Delete question route (updated to use DELETE method and include the ID in the path)
router.delete('/delete/:id', deleteQuestion);

module.exports = router;
