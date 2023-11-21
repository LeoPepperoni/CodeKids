import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';

const PracticeAll = () => {
  
  const [keyProp, setKeyProp] = useState(0);

  const handleNextClick = () => {
    setKeyProp((prevKeyProp) => prevKeyProp + 1);
  };


  return (
    <div>
         <div className="container-div">
                <div className="practice-box">

                    <div className="practice-div branded-shadow">
                        <div className="hint-btn-container">
                            <button className="branded-long-button branded-shadow hint-btn">Hint 💡</button>
                        </div>

                        <div className="random-question-content">
                          <RandomQuestion keyProp={keyProp} />
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

export default PracticeAll;