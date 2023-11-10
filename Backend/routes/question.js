const express = require('express');
const { createQuestion, deleteQuestion, getQuestion, getAllQuestionsFromModule} = require('../controllers/questionController');

const router = express.Router();

// Add question route
router.post('/add', createQuestion);

// Delete question route (updated to use DELETE method and include the ID in the path)
router.delete('/delete/:id', deleteQuestion);

// Get question route
router.get('/get/:id', getQuestion);

// get question by module
router.get('/get/module/:moduleName', getAllQuestionsFromModule)

module.exports = router;