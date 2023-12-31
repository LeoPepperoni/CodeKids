import React from 'react';
import { useState, useEffect } from 'react';
import HintContent from '../components/HintContent';
import './PracticeAll.css'
import '../components/PracticeContent.css'
import PracticeContent from '../components/PracticeContent';

const PracticeAll = () => {
  document.title = `CodeKnights | Practice All`
  const [keyProp, setKeyProp] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [newModuleID, setNewModuleID] = useState(null);
  const [newPosition, setNewPosition] = useState(null);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
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
    setShowHint(true); // Show the hint when the hint button is clicked
  };

  const handleRandomValuesChange = (newModuleID, newPosition) => {
    setNewModuleID(newModuleID);
    setNewPosition(newPosition);
  };

   // useEffect to handle the initial random values
   useEffect(() => {
    // Function to generate a random number between min and max (inclusive)
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Generate random values for new module ID and position
    const initialRandomModuleID = getRandomNumber(1, 5);
    const initialRandomPosition = getRandomNumber(1, 10);

    // Update state with the new random values
    setNewModuleID(initialRandomModuleID);
    setNewPosition(initialRandomPosition);

    // Pass the values to the parent component
    handleRandomValuesChange(initialRandomModuleID, initialRandomPosition);

  }, [keyProp]);

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
      <div className="path centered-learn-header">
        <h4>Practice All</h4>
      </div>

      <div className="practice-all-box">
        <div className="practice-all-div branded-shadow">

          <div className="hint-btn-container-all">
            <button className="branded-long-button branded-shadow hint-btn" onClick={toggleHint}>
              {hintButtonText()}
            </button>
          </div>

          <div className="practice-question-content-all">
            <PracticeContent moduleID={newModuleID} position={newPosition} />
          </div>

          <div className="button-container-back-next-all">
            <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>

        {showHint && (
          <div className="hint-box branded-shadow">
            <HintContent moduleID={newModuleID} position={newPosition} />
          </div>
        )}

      </div>
    </div>
  );
};

export default PracticeAll;