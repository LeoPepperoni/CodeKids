const Question = require('../models/questionModel'); // Correctly require the Question model

// Function to create a new question in the database
const createQuestion = async (req, res) => {
    // Destructuring question, answer, module, and answer choices from the request body
    const { question, answer, module, answerChoice1, answerChoice2, answerChoice3, position } = req.body;

    // Trying to add the new question to the database
    try {
        const newQuestion = await Question.create({
            question,
            answer,
            module,
            answerChoice1,
            answerChoice2,
            answerChoice3,
            position
        });

        // Sending the created question as a response with status code 200 (OK)
        res.status(200).json(newQuestion);
    } catch (error) {
        // In case of an error, sending an error response with status code 400 (Bad Request)
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