const express = require('express');
const {
  completeModule,
  deleteProgress,
  getUserProgress,
  getUserModuleProgress, // Add the new method
} = require('../controllers/progressController');

const router = express.Router();

// Mark a module as completed for a user
router.post('/completeModule', completeModule);

// Get all progress records for a specific user
router.get('/user/:userId', getUserProgress);

// Get progress for a specific user and module
router.get('/user/getUserModuleProgress/:userId/:module', getUserModuleProgress); // Add the new route

// Delete progress route (use DELETE method and include the ID in the path)
router.delete('/delete/:id', deleteProgress);

module.exports = router;
