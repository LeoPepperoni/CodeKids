import React from 'react';
import { useState, useEffect } from 'react';
import HintContent from '../components/HintContent';
import PracticeContent from '../components/PracticeContent';

const PracticeAll = () => {

  const [keyProp, setKeyProp] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [newModuleID, setNewModuleID] = useState(null);
  const [newPosition, setNewPosition] = useState(null);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    console.log('Next clicked');
    // Generate new random values for module ID and position
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const newModuleID = getRandomNumber(1, 5);
    const newPosition = getRandomNumber(1, 10);

    // Update state with the new random values
    setNewModuleID(newModuleID);
    setNewPosition(newPosition);

    // Increment keyProp to trigger re-render (if needed)
    setKeyProp((prevKeyProp) => prevKeyProp + 1);

    // Hide the hint
    setShowHint(false);
  };

  const handleHintClick = () => {
    console.log('Hint clicked');
    setShowHint(true); // Show the hint when the hint button is clicked
  };

  const handleRandomValuesChange = (newModuleID, newPosition) => {
    console.log('Received random values in parent:', newModuleID, newPosition);
    setNewModuleID(newModuleID);
    setNewPosition(newPosition);
  };

   // useEffect to handle the initial random values
   useEffect(() => {
    console.log('Use Effect');
    // Function to generate a random number between min and max (inclusive)
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Generate random values for new module ID and position
    const initialRandomModuleID = getRandomNumber(1, 5);
    const initialRandomPosition = getRandomNumber(1, 10);

    // Update state with the new random values
    setNewModuleID(initialRandomModuleID);
    setNewPosition(initialRandomPosition);

    // Log the values (you can remove this in the final version)
    console.log('Use effect:', initialRandomModuleID, initialRandomPosition);

    // Pass the values to the parent component
    handleRandomValuesChange(initialRandomModuleID, initialRandomPosition);

  }, [keyProp]); 

  return (
    <div>
      <div className="container-div">
        <div className="practice-box">
          <div className="path">
            <h4>Practice All</h4>
          </div>

          <div className="practice-div branded-shadow">
            <div className="hint-btn-container">
              <button className="branded-long-button branded-shadow hint-btn" onClick={handleHintClick}>Hint 💡</button>
            </div>

            <div className="random-question-content">
              <PracticeContent moduleID={newModuleID} position={newPosition} />
            </div>

            <div className="button-container-back-next">
              <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>Next</button>
            </div>
          </div>

          {showHint && (
            <div className="hint-box">
              <HintContent moduleID={newModuleID} position={newPosition} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeAll;