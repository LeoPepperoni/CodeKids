import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Practice.css';
import PracticeContent from '../components/PracticeContent'; 


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
    const handleBackClick = () => {
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
            <div className="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Practice</h4>
            </div>

            <div className="practice-div">
                <div className="hint-btn-container">
                    <button className="hint-btn">Reveal Hint</button>
                </div>

                <div className="practice-content">
                    {/* Render the PracticeContent component for the current question */}
                    <PracticeContent moduleID={moduleID} position={currentQuestion} />
                </div>

                <div className="button-container-back-next">
                    <button className="back-btn" onClick={handleBackClick}>Back</button>
                    <button className="next-btn" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
       
       
    );
}

export default Practice;