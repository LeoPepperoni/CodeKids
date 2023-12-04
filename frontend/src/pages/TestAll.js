import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';
import SubmitTestAllModal from '../components/SubmitTestAllModal';

const TestAll = () => {
  const [count, setCount] = useState(0); 
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  // Initialize moduleID and position with random values
  const [moduleID, setModuleID] = useState(getRandomNumber(1, 5));
  const [position, setPosition] = useState(getRandomNumber(1, 10));
  const [showModal, setShowModal] = useState(false);
  const questionsCount = 20;
   
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);



  // Function to handle the "Next" button click
  const handleNextClick = () => {
    if (count < questionsCount) {
      setCount((prevCount) => prevCount + 1);
      // Generate new random values for the next question
      setModuleID(getRandomNumber(1, 5));
      setPosition(getRandomNumber(1, 10));
      console.log('ModuleID, Position: ', moduleID, position);
    } else {
      // If it's the last question, show the modal instead of going to the next question
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Additional logic for closing the modal if needed
  };

  const updateCorrectAnswerCount = (newCount) => {
    setCorrectAnswerCount(newCount);
    console.log('TestAll: ', newCount);
};

  return (
    <div>
       <div className="container-div">
          <div className="practice-box">

            <div className="path">
              <h4>Test All</h4>
            </div>

            <div className="practice-div branded-shadow">
              <div className="random-question-content">
                <RandomQuestion moduleID={moduleID} position={position} updateCorrectAnswerCount={updateCorrectAnswerCount}/>
              </div>

              <div className="button-container-back-next">
                {/* Display Submit button only when count reaches 20 */}
                <button 
                  className="branded-long-button branded-shadow test-next-btn" 
                  onClick={handleNextClick}
                >
                  {count === questionsCount ? "Submit" : "Next"}
                </button>
              </div>
            </div>

          </div>
        </div>

        {showModal && (
                <SubmitTestAllModal 
                    correctAnswerCount={correctAnswerCount} 
                    onClose={handleCloseModal} 
                />
            )}
    </div>
  );
};

export default TestAll;
