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
            <div class="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Practice</h4>
            </div>

            <div class="practice-div">
                <div className="practice-content">
                    {/* Render the PracticeContent component for the current question */}
                    <PracticeContent questionNumber={currentQuestion} />
                </div>

                <div className="button-container">
                    <button className="back-btn" onClick={handleBackClick}>Back</button>
                    <button className="next-btn" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
       
       
    );
}

export default Practice;