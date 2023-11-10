import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Test.css';
import QuestionContent from '../components/QuestionContent'; // Import the QuestionContent component


const Test = () => {
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

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (currentQuestion < questionsCount) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <div>
            <div class="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Test</h4>
            </div>

            <div class="test-div">

                <div class="question-list">
                    <h3>Questions:</h3>
                    <ul>
                        {Array.from({ length: questionsCount }, (_, index) => (
                            <li key={index + 1}>
                                <Link to={`/test/${moduleID}/${encodeURIComponent(moduleName)}/${index + 1}`} className="question-link">
                                    Question {index + 1}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div class="question-box">

                    <div className="question-content">
                        {/* Render the QuestionContent component for the current question */}
                        <QuestionContent moduleID={moduleID} position={currentQuestion} />
                    </div>

                    <div className="button-container">
                        <button className="submit-btn" onClick={handleNextClick}>Submit</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Test;