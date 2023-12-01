const Progress = require('../models/progressModel');

// Mark a module as completed for a user
exports.completeModule = async (req, res) => {
    const { userID, module } = req.body;

    try {
        let progress = await Progress.findOne({ userID, module });

        if (!progress) {
            progress = await Progress.create({ userID, module, completed: true });
        } else {
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
        const allModules = [1, 2, 3, 4, 5];
        const userProgress = await Progress.find({ userID }).select('module completed -_id');

        const uncompletedOrNoProgressModules = allModules.filter(moduleNumber => {
            const progressRecord = userProgress.find(progress => progress.module === moduleNumber);
            return !progressRecord || !progressRecord.completed;
        });

        res.status(200).json({ uncompletedModules: uncompletedOrNoProgressModules });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching uncompleted modules', error: err.message });
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
    try {
        const progress = await Progress.findOne({ userID: req.params.userId, module: req.params.module });

        // Check if progress exists and return true, otherwise return false
        const progressExists = !!progress;
        res.status(200).json({ progressExists });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user module progress', error: err.message });
    }
};