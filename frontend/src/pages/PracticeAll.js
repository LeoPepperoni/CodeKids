import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';
import HintContent from '../components/HintContent';

const PracticeAll = () => {

  const [keyProp, setKeyProp] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [newModuleID, setNewModuleID] = useState(null);
  const [newPosition, setNewPosition] = useState(null);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    setKeyProp((prevKeyProp) => prevKeyProp + 1);
    setShowHint(false);
  };


  const handleHintClick = () => {
    setShowHint(true); // Show the hint when the hint button is clicked
  };

  const handleRandomValuesChange = (newModuleID, newPosition) => {
    console.log('Received random values in parent:', newModuleID, newPosition);
    // You can do further processing or state updates in the parent component if needed
  };

   // useEffect to handle the initial random values
   useEffect(() => {
    const initialRandomModuleID = newModuleID;
    const initialRandomPosition = newPosition;

    setNewModuleID(initialRandomModuleID);
    setNewPosition(initialRandomPosition);

    console.log('Use effect:', newModuleID, newPosition);

    // Additional logic if needed...

  }, []); 


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
              <RandomQuestion keyProp={keyProp} onRandomValuesChange={handleRandomValuesChange}/>
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