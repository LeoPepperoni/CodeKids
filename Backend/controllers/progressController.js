const Progress = require('../models/progressModel');
const Question = require('../models/questionModel');

exports.createProgress = async (req, res) => {
    const { userID, questionID } = req.body;

    try {
        // Check if progress for the same user and question already exists
        const existingProgress = await Progress.findOne({ userID, questionID });
        if (existingProgress) {
            return res.status(409).json({ message: 'Progress for this question already exists for this user.' });
        }

        // If it doesn't exist, create a new progress record
        const progress = new Progress(req.body);
        const savedProgress = await progress.save();
        res.status(201).json(savedProgress);
    } catch (err) {
        if (err.code === 11000) {
            // This is the duplicate key error code
            res.status(409).json({ message: 'Progress for this question already exists for this user.' });
        } else {
            // For other types of errors, send a generic error message
            res.status(400).json({ message: 'An error occurred while saving progress.', error: err.message });
        }
    }
};


// Delete a progress record
exports.deleteProgress = async (req, res) => {
    try {
        const progress = await Progress.findById(req.params.id);
        if (!progress) return res.status(404).json({ message: 'Progress not found' });

        await progress.remove();
        res.status(200).json({ message: 'Progress deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get progress records for a specific user
exports.getUserProgress = async (req, res) => {
    try {
        const userProgress = await Progress.find({ userID: req.params.userId });
        res.status(200).json(userProgress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserModuleProgress = async (req, res) => {
    const { userId, moduleId } = req.params;
    
    try {
        // Convert moduleId to a number if it is sent as a string
        const moduleNumber = parseInt(moduleId);

        // Find all progress records for this user that match the specified module
        const userModuleProgress = await Progress.find({
            userID: userId,
            module: moduleNumber
        });
        
        res.status(200).json(userModuleProgress);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user module progress', error: err.message });
    }
};

exports.getUncompletedQuestions = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Get the IDs of questions the user has completed
        const completedQuestions = await Progress.find({ userID: userId, completed: true }).select('questionID -_id');
        const completedQuestionIds = completedQuestions.map(q => q.questionID);

        // Find all questions that are not in the completedQuestionIds array
        const uncompletedQuestions = await Question.find({
            _id: { $nin: completedQuestionIds }
        });

        res.status(200).json(uncompletedQuestions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching uncompleted questions', error: err.message });
    }
};

exports.getUncompletedQuestionsByModule = async (req, res) => {
    try {
        const userId = req.params.userId;
        const moduleId = parseInt(req.params.moduleId); // Assuming module is a number

        // Get the IDs of questions the user has completed for the specific module
        const completedQuestions = await Progress.find({
            userID: userId,
            module: moduleId,
            completed: true
        }).select('questionID -_id');

        const completedQuestionIds = completedQuestions.map(q => q.questionID);

        // Find all questions that are not in the completedQuestionIds array and are in the specified module
        const uncompletedQuestions = await Question.find({
            _id: { $nin: completedQuestionIds },
            module: moduleId // Assuming there is a module field in your question schema
        });

        res.status(200).json(uncompletedQuestions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching uncompleted questions for module', error: err.message });
    }
};