import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';
import HintContent from '../components/HintContent';

const PracticeAll = () => {
  
  const [keyProp, setKeyProp] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [moduleID, setModuleID] = useState(null);
  const [position, setPosition] = useState(null);

  const handleModuleIDChange = (newModuleID) => {
    setModuleID(newModuleID);
  };

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const handleNextClick = () => {
    setKeyProp((prevKeyProp) => prevKeyProp + 1);
    setShowHint(false);
  };

  const handleHintClick = () => {
    setShowHint(true); // Show the hint when the hint button is clicked
  };  

  console.log('PracticeAll - moduleID:', moduleID);
    console.log('PracticeAll - position:', position);


  return (
    <div>
        <div className="container-div">
          <div className="practice-box">

            <div className="practice-div branded-shadow">
              <div className="hint-btn-container">
                <button className="branded-long-button branded-shadow hint-btn" onClick={handleHintClick}>Hint 💡</button>
              </div>

              <div className="random-question-content">
                <RandomQuestion moduleID={moduleID} position={position} />
              </div>

              <div className="button-container-back-next">
                <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>Next</button>
              </div>
            </div>
          </div>

          {showHint && (
            <div className="hint-box">
              <HintContent moduleID={moduleID} position={position} />
            </div>
          )}
        </div>
    </div>
  );
};

export default PracticeAll;