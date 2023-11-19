import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Practice.css';
import PracticeContent from '../components/PracticeContent'; 
import HintContent from '../components/HintContent';


const Practice = () => {

    const { moduleID, moduleName, questionNumber = "1" } = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(parseInt(questionNumber) || 1);
    const [showHint, setShowHint] = useState(false);

    // Total number of questions
    const questionsCount = 10; 
   
    // Update currentQuestion when the questionNumber parameter changes
    useEffect(() => {
        const newQuestionNumber = parseInt(questionNumber) || 1;
        setCurrentQuestion(newQuestionNumber);
    }, [questionNumber]);

        // Function to handle "Previous" button click
    const handleBackClick = () => {
        if (currentQuestion > 1) {
            const newQuestionNumber = currentQuestion - 1;
            setCurrentQuestion(newQuestionNumber);
            updateURL(newQuestionNumber);
            setShowHint(false);
        }
    };

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (currentQuestion < questionsCount) {
            const newQuestionNumber = currentQuestion + 1;
            setCurrentQuestion(newQuestionNumber);
            updateURL(newQuestionNumber);
            setShowHint(false);
        }
    };

    const handleHintClick = () => {
        setShowHint(true); // Show the hint when the hint button is clicked
    };

    const updateURL = (newQuestionNumber) => {
        // Update the URL based on the new question number
        window.history.pushState({}, '', `/practice/${moduleID}/${encodeURIComponent(moduleName)}/${newQuestionNumber}`);
    };

 
    return (
        <div>
            <div className="practice-box">
                <div className="path">
                    <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Practice</h4>
                </div>

                <div className="practice-div branded-shadow">
                    <div className="hint-btn-container">
                        <div className="question-num">{currentQuestion}.</div>
                        <button className="branded-long-button branded-shadow hint-btn" onClick={handleHintClick}>Hint 💡</button>
                    </div>

                    <div className="practice-content">
                        {/* Render the PracticeContent component for the current question */}
                        <PracticeContent moduleID={moduleID} position={currentQuestion} />
                    </div>

                    <div className="button-container-back-next">
                        <button className="branded-long-button branded-shadow back-btn" onClick={handleBackClick}>Back</button>
                        <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>Next</button>
                    </div>
                </div>
            </div>

            {showHint && (
                <div className="hint-box">
                    <HintContent moduleID={moduleID} position={currentQuestion} />
                </div>
            )}
        </div>
       
       
    );
}

export default Practice;