import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';

const TestAll = () => {

  // State to manage the random question data
  const [randomQuestion, setRandomQuestion] = useState(null);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    // You can add any logic here needed before moving to the next question
    // For now, just update the state to trigger a re-render of RandomQuestion
    setRandomQuestion(Math.random());
  };

  // Placeholder function for handling hint click
  const handleHintClick = () => {
    // Implement hint logic here if needed
    console.log('Hint clicked');
  };


  return (
    <div>
       <div className="container-div">
                <div className="practice-box">
                    <div className="path">
                        <h4>Test All</h4>
                    </div>

                    <div className="practice-div branded-shadow">
                        <div className="hint-btn-container">
                            <button className="branded-long-button branded-shadow hint-btn" onClick={handleHintClick}>Hint 💡</button>
                        </div>

                        <div className="random-question-content">
                            <RandomQuestion handleNextClick={handleNextClick}/>
                        </div>

                        <div className="button-container-back-next">
                            <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default TestAll;
