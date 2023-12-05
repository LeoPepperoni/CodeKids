const Question = require('../models/questionModel'); // Correctly require the Question model

// Function to create a new question in the database
const createQuestion = async (req, res) => {
    const { question, answer, module, answerChoice1, answerChoice2, answerChoice3, position, hint } = req.body;

    try {
        // Check if a question with the same module and position already exists
        const existingQuestion = await Question.findOne({ module, position });

        if (isNaN(module) || isNaN(position)) {
            return res.status(400).json({ error: 'Module and position must be valid numbers.' });
        }

        // If a question exists, throw an error
        if (existingQuestion) {
            return res.status(400).json({ error: 'A question with the specified module and position already exists.' });
        }

        // If no existing question, create the new question
        const newQuestion = await Question.create({
            question,
            answer,
            module,
            answerChoice1,
            answerChoice2,
            answerChoice3,
            position,
            hint
        });
        res.status(200).json(newQuestion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Function to delete a question from the database
const deleteQuestion = async (req, res) => {
    const { position, module } = req.body; // or req.query

    if (isNaN(module) || isNaN(position)) {
        return res.status(400).json({ error: 'Module and position must be valid numbers.' });
    }

    try {
        const deletedQuestion = await Question.findOneAndRemove({ position: position, module: module });

        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Sending the deleted question back in the response
        res.status(200).json({ deletedQuestion: deletedQuestion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



// Function to get a question from the database
const getQuestion = async (req, res) => {
    // The '_id' is typically provided as a URL parameter, accessed via 'req.params.id'
    const { id } = req.params;

    try {
        const question = await Question.findById(id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Sending the retrieved question as a response with status code 200 (OK)
        res.status(200).json(question);
    } catch (error) {
        // Sending an error response if there's an issue with retrieving the question
        res.status(400).json({ error: error.message });
    }
};

// Function to get all questions from a specific module
const getAllQuestionsFromModule = async (req, res) => {
    const { moduleName } = req.params; // Assuming you pass the module name as a URL parameter

    try {
        const questions = await Question.find({ module: moduleName });
        if (questions.length === 0) {
            return res.status(404).json({ message: 'No questions found for this module' });
        }
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getQuestionByModule = async (req, res) => {
    const { moduleId, position } = req.params;

    try {
        // Convert moduleId and position to numbers
        const moduleNumber = Number(moduleId);
        const positionNumber = Number(position);

        // Query the database for the question with the specified moduleId and position
        const question = await Question.findOne({ module: moduleNumber, position: positionNumber });

        if (!question) {
            return res.status(404).json({ message: 'Question not found at the specified position in the module' });
        }

        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




module.exports = { createQuestion, deleteQuestion, getQuestion, getAllQuestionsFromModule, getQuestionByModule };