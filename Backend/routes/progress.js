const express = require('express');
const {
  completeModule,
  deleteProgress,
  getUserProgress,
  getUncompletedModules
} = require('../controllers/progressController');

const router = express.Router();

// Mark a module as completed for a user
router.post('/completeModule', completeModule);

// Delete progress route (use DELETE method and include the ID in the path)
router.delete('/delete/:id', deleteProgress);

// Get all progress records for a specific user
router.get('/user/:userId', getUserProgress);

// Get all uncompleted modules for a specific user
router.get('/user/uncompletedModules/:userId', getUncompletedModules);

module.exports = router;