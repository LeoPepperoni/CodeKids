const Progress = require('../models/progressModel');

// Mark a module as completed for a user
exports.completeModule = async (req, res) => {
    const { userID, module } = req.body;

    try {
        // Check if progress for the same user and module already exists
        let progress = await Progress.findOne({ userID, module });

        // If it doesn't exist, create a new progress record with completed set to true
        if (!progress) {
            progress = await Progress.create({ userID, module, completed: true });
        } else {
            // If it exists and is not completed, update it
            if (!progress.completed) {
                progress.completed = true;
                await progress.save();
            }
        }

        res.status(200).json(progress);
    } catch (err) {
        res.status(400).json({ message: 'An error occurred while updating progress.', error: err.message });
    }
};

// Get all uncompleted modules for a user
exports.getUncompletedModules = async (req, res) => {
    try {
        const userID = req.params.userId;

        // Define all modules
        const allModules = [1, 2, 3, 4, 5];

        // Find modules that the user has made progress on (either completed or not)
        const userProgress = await Progress.find({ userID }).select('module completed -_id');

        // Determine which modules are uncompleted or have no progress record
        const uncompletedOrNoProgressModules = allModules.filter(moduleNumber => {
            const progressRecord = userProgress.find(progress => progress.module === moduleNumber);
            return !progressRecord || !progressRecord.completed;
        });

        res.status(200).json({ uncompletedModules: uncompletedOrNoProgressModules });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching uncompleted modules', error: err.message });
    }
};


// Delete a progress record (if needed)
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

// Get progress records for a specific user (if needed)
exports.getUserProgress = async (req, res) => {
    try {
        const userProgress = await Progress.find({ userID: req.params.userId });
        res.status(200).json(userProgress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
