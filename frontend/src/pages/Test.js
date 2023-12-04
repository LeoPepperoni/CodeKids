import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Test.css';
import SubmitTestModal from '../components/SubmitTestModal';
import QuestionContent from '../components/QuestionContent'; // Import the QuestionContent component

const Test = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleID, moduleName, questionNumber ="1" } = useParams();

    const [showModal, setShowModal] = useState(false);
    // Initialize state to keep track of the current question number
    const [currentQuestion, setCurrentQuestion] = useState(parseInt(questionNumber) || 1);
   
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

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
        } else {
            // If it's the last question, show the modal instead of going to the next question
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // Additional logic for closing the modal if needed
    };

    const updateURL = (newQuestionNumber) => {
        // Update the URL based on the new question number
        window.history.pushState({}, '', `/test/${moduleID}/${encodeURIComponent(moduleName)}/${newQuestionNumber}`);
    };

    const updateCorrectAnswerCount = (newCount) => {
        setCorrectAnswerCount(newCount);
        console.log('Test: ', newCount);
    };

    return (
        <div>
            <h4 className="question-header">Module {moduleID}: {decodeURIComponent(moduleName)} - Test</h4>
            
            <div class="test-div">
        
                    <div className="question-div branded-shadow">
                        <div className="question-num">{currentQuestion}.</div>

                        <div className="question-content">
                            {/* Render the QuestionContent component for the current question */}
                            <QuestionContent moduleID={moduleID} position={currentQuestion} updateCorrectAnswerCount={updateCorrectAnswerCount}/>
                        </div>

                        <div className="test-button-container">
                            <button className="branded-long-button branded-shadow test-next-btn" onClick={handleNextClick}>
                                {currentQuestion === questionsCount ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>

            </div>

            {showModal && (
                <SubmitTestModal 
                    correctAnswerCount={correctAnswerCount} 
                    onClose={handleCloseModal} 
                />
            )}

        </div>
    );
}

export default Test;