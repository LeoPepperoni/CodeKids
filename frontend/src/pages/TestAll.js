import React from 'react';
import { useState, useEffect } from 'react';
import RandomQuestion from '../components/RandomQuestion';
import SubmitTestAllModal from '../components/SubmitTestAllModal';
import './TestAll.css';

const TestAll = () => {
  const [count, setCount] = useState(0); 
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  // Initialize moduleID and position with random values
  const [moduleID, setModuleID] = useState(getRandomNumber(1, 5));
  const [position, setPosition] = useState(getRandomNumber(1, 10));
  const [showModal, setShowModal] = useState(false);
  const questionsCount = 25;
   
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  document.title = `CodeKnights | Test All`



  // Function to handle the "Next" button click
  const handleNextClick = () => {
    if (count < questionsCount) {
      setCount((prevCount) => prevCount + 1);
      // Generate new random values for the next question
      setModuleID(getRandomNumber(1, 5));
      setPosition(getRandomNumber(1, 10));
    } else {
        // On the last question we want to prompt the modal as well as hit the progress endpoint
        var modal = document.getElementById("test-all-modal");
        var close = document.getElementById("close-test-all-modal");
        var longClose = document.getElementById("long-modal-test-all-close");

        modal.style.display = "block";
        close.onclick = function() {
          modal.style.display = "none";
        }
        longClose.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
        }
    }
  };

  const updateCorrectAnswerCount = (newCount) => {
    setCorrectAnswerCount(newCount);
  };

  function modalResultTextAll (correctAnswerCount) {
    if (correctAnswerCount === 25) {
      // Perfect Score 
      return 'Perfect Score!! You REALLY know your C 🎉.'
    } 
    else if (correctAnswerCount > 20) {
      return 'Great work!'
    } 
    else {
      // if user gets less than a 80% redo the exam
      return 'Nice Try! Try practicing more problems in the Practice Module 😀.'
    }
  }

  return (
    <div>
      <div className="path centered-learn-header">
        <h4>Test All</h4>
      </div>

        <div className="test-all-div">
          <div className="test-all-container branded-shadow">
            <div className="random-question-content-all">
              <RandomQuestion moduleID={moduleID} position={position} updateCorrectAnswerCount={updateCorrectAnswerCount}/>
            </div>

            <div className="button-container-next-submit-all">
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

        <div id="test-all-modal" class="modal">
            <div class="modal-content branded-shadow">
              <span class="close" id='close-test-all-modal'>&times;</span>
              <div className='modal-centered-container'>
                <div className='modal-header'>Test All Results</div>
              </div>
              <div className='modal-centered-container'>
                <div className='branded-header modal-correct-text'>You got {correctAnswerCount} / 25 Correct</div>
              </div>

              <div className='modal-centered-container'>
                <div className='branded-header result-text'>{modalResultTextAll(correctAnswerCount)}</div>
              </div>

              <div className='modal-centered-container close-modal-button'>
                <button className='branded-long-button' id='long-modal-test-all-close'>Close</button>
              </div>
            </div>
          </div>

    </div>
  );
};

export default TestAll;
