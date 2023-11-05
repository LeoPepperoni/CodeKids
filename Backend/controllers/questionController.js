const Question = require('../models/questionModel'); // Correctly require the Question model

// Function to create a new question in the database
const createQuestion = async (req, res) => {
    // Destructuring question, answer, and difficulty from the request body
    const { question, answer, type, difficulty } = req.body;

    // Trying to add the new question to the database
    try {
        const newQuestion = await Question.create({ question, answer, type, difficulty });
        // Sending the created question as a response with status code 200 (OK)
        res.status(200).json(newQuestion);
    } catch (error) {
        // In case of an error (e.g., validation error), sending an error response with status code 400 (Bad Request)
        res.status(400).json({ error: error.message });
    }
};

// Function to delete a question from the database
const deleteQuestion = async (req, res) => {
    // The '_id' is typically provided as a URL parameter, accessed via 'req.params.id'
    const { id } = req.params;

    try {
        const deletedQuestion = await Question.findByIdAndRemove(id);

        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Sending a response back confirming the deletion
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        // Sending an error response if there's an issue with the deletion
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createQuestion, deleteQuestion };

