import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Test.css';
import QuestionContent from '../components/QuestionContent'; // Import the QuestionContent component



const Test = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleID, moduleName, questionNumber ="1" } = useParams();

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
            const newQuestionNumber = currentQuestion + 1;
            setCurrentQuestion(newQuestionNumber);
            updateURL(newQuestionNumber);
        } 
    };

    const updateURL = (newQuestionNumber) => {
        // Update the URL based on the new question number
        window.history.pushState({}, '', `/test/${moduleID}/${encodeURIComponent(moduleName)}/${newQuestionNumber}`);
    };

    return (
        <div>
            <h4 className="question-header">Module {moduleID}: {decodeURIComponent(moduleName)} - Test</h4>
            
            <div class="test-div">
        
                    <div className="question-div branded-shadow">
                        <div className="question-num">{currentQuestion}.</div>

                        <div className="question-content">
                            {/* Render the QuestionContent component for the current question */}
                            <QuestionContent moduleID={moduleID} position={currentQuestion} />
                        </div>

                        <div className="test-button-container">
                            <button className="branded-long-button branded-shadow test-next-btn" onClick={handleNextClick}>
                                {currentQuestion === questionsCount ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>

            </div>

        </div>
    );
}

export default Test;