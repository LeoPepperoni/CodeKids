const express = require('express');
const {
    createProgress,
    deleteProgress,
    getUserProgress,
    getUserModuleProgress,
    getUncompletedQuestionsByModule
  } = require('../controllers/progressController');  

const router = express.Router();

// Add progress route
router.post('/add', createProgress);

// Delete progress route (updated to use DELETE method and include the ID in the path)
router.delete('/delete/:id', deleteProgress);

// Get progress for a specific user
router.get('/user/:userId', getUserProgress);

// Get progress for a specific user by module
router.get('/user/:userId/module/:moduleId', getUserModuleProgress);

// Get uncompleted questions per module
router.get('/user/uncompleted/:userId/module/:moduleId', getUncompletedQuestionsByModule)


module.exports = router;
