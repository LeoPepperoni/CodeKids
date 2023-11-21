import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';

const TestAll = () => {

  const [keyProp, setKeyProp] = useState(0);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    setKeyProp((prevKeyProp) => prevKeyProp + 1);
  };

  const handleRandomValuesChange = (newModuleID, newPosition) => {
    console.log('Received random values in parent:', newModuleID, newPosition);
    // You can do further processing or state updates in the parent component if needed
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
                          <RandomQuestion keyProp={keyProp} onRandomValuesChange={handleRandomValuesChange}/>
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
