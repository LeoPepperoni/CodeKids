import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';
import SubmitTestAllModal from '../components/SubmitTestAllModal';

const TestAll = () => {
  const [count, setCount] = useState(0); 
  const [moduleID, setModuleID] = useState(null);
  const [position, setPosition] = useState(null);

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


  // Function to handle the "Next" button click
  const handleNextClick = () => {
    if (count < 20) {
      setCount((prevCount) => prevCount + 1);
      // Generate new random values for the next question
      setModuleID(getRandomNumber(1, 5));
      setPosition(getRandomNumber(1, 10));
      console.log('set count = ', count);
    }
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
                          <RandomQuestion moduleID={moduleID} position={position} />
                        </div>

                        <div className="button-container-back-next">
                          {/* Display Submit button only when count reaches 20 */}
                          {count === 20 && (
                            <button className="submit-test-all-btn" >Submit</button>
                          )}
                          
                          {/* Display Next button until count reaches 20 */}
                          {count < 20 && (
                            <button className="branded-long-button branded-shadow next-btn" onClick={handleNextClick}>Next</button>
                          )}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default TestAll;
