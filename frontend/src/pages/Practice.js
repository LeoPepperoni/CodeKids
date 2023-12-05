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
    var isHintActive = false;

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
        console.log(isLastQuestion());
        if (currentQuestion < questionsCount) {
            const newQuestionNumber = currentQuestion + 1;
            setCurrentQuestion(newQuestionNumber);
            updateURL(newQuestionNumber);
            setShowHint(false);
        }
    };

    const handleHintClick = () => {
        isHintActive = true;
        setShowHint(true);
    };

    const updateURL = (newQuestionNumber) => {
        // Update the URL based on the new question number
        window.history.pushState({}, '', `/practice/${moduleID}/${encodeURIComponent(moduleName)}/${newQuestionNumber}`);
    };

    // Function checks if we are on the last question
    function isLastQuestion() {
      return currentQuestion === 10;
    }
    
    // Toggle on/off hint
    function toggleHint() {
      if (showHint) {
        setShowHint(false);
      } else {
        setShowHint(true);
      }
    }

    function hintButtonText() {
      return showHint ? 'Hide Hint' : 'Hint 💡';
    }

    return (
        <div>
            <div className="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Practice</h4>
            </div>

            <div className="practice-box">
                    
                <div className="practice-div branded-shadow">
                    <div className="hint-btn-container">
                        <div className="question-num">
                            Question {currentQuestion}.
                        </div>

                        <button className="branded-long-button branded-shadow hint-btn" onClick={toggleHint}>
                            {hintButtonText()}
                        </button>
                    </div>

                    <div className="practice-content">
                        {/* Render the PracticeContent component for the current question */}
                        <PracticeContent moduleID={moduleID} position={currentQuestion} />
                    </div>

                    <div className="button-container-back-next">
                        <button className="branded-long-button branded-shadow back-btn" onClick={handleBackClick}>
                            Back
                        </button>

                        {!isLastQuestion() && (
                            <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>Next</button>
                        )}
                    </div>
                </div>
            

                {showHint && (
                    <div className="hint-box branded-shadow">
                        <HintContent moduleID={moduleID} position={currentQuestion} />
                    </div>
                )}
            </div>
        </div>
       
       
    );
}

export default Practice;