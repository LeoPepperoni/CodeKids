import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import QuestionContent from '../components/QuestionContent'; // Import the QuestionContent component


const Practice = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleID, moduleName, questionNumber } = useParams();

    // Initialize state to keep track of the current question number
    const [currentQuestion, setCurrentQuestion] = useState(parseInt(questionNumber) || 1);

    // Total number of questions
    const questionsCount = 10; 

    // Update currentQuestion when the questionNumber parameter changes
    useEffect(() => {
        const newQuestionNumber = parseInt(questionNumber) || 1;
        setCurrentQuestion(newQuestionNumber);
    }, [questionNumber]);


    // Function to handle "Previous" button click
    const handlePreviousClick = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (currentQuestion < questionsCount) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <div>
            <div class="path">
                <h4>Practice: Module {moduleID}: {decodeURIComponent(moduleName)}</h4>
            </div>

            <div class="question-list">
                <h3>Questions:</h3>
                <ul>
                    {Array.from({ length: questionsCount }, (_, index) => (
                        <li key={index + 1}>
                            <Link to={`/practice/${moduleID}/${encodeURIComponent(moduleName)}/${index + 1}`}>
                                Question {index + 1}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div class="question-box">

                <div className="question-content">
                    {/* Render the QuestionContent component for the current question */}
                    <QuestionContent questionNumber={currentQuestion} />
                </div>

                <div class="button-container">
                    <button className="prev-btn" onClick={handlePreviousClick}>Previous</button>
                    <button className="submit-btn" onClick={handleNextClick}>Submit</button>
                </div>

            </div>
            
        </div>
    );
}

export default Practice;