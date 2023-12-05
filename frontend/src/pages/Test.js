import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Test.css';
import { useNavigate } from 'react-router-dom';
import QuestionContent from '../components/QuestionContent'; // Import the QuestionContent component

const Test = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleID, moduleName, questionNumber ="1" } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    // Initialize state to keep track of the current question number
    const [currentQuestion, setCurrentQuestion] = useState(parseInt(questionNumber) || 1);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    // Total number of questions
    const questionsCount = 10; 

    // Update currentQuestion when the questionNumber parameter changes
    useEffect(() => {
        const newQuestionNumber = parseInt(questionNumber) || 1;
        setCurrentQuestion(newQuestionNumber);
    }, [questionNumber]);

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (currentQuestion < questionsCount) {
            const newQuestionNumber = currentQuestion + 1;
            setCurrentQuestion(newQuestionNumber);
            updateURL(newQuestionNumber);
        } else {
            let userId = sessionStorage.getItem('userId')

            // On the last question we want to prompt the modal as well as hit the progress endpoint
            var modal = document.getElementById("test-modal");
            var close = document.getElementById("close-test-modal");
            var longClose = document.getElementById("long-modal-test-close");

            modal.style.display = "block";
            close.onclick = function() {
              modal.style.display = "none";
            }
            longClose.onclick = function() {
              modal.style.display = "none";
              // transistion back to dashboard
              navigate('/dashboard');
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
            }
            if (correctAnswerCount > 7) {
              updateProgress(userId, moduleID);
            } 
        }
    };

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    // Update User module status:
    const updateProgress = async (userID, module) => {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/progress/completeModule', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userID, module})
      })
      const json = await response.json()

      if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
      }
      if (response.ok) {
          console.log(json);
      }
    }

    function modalResultText (correctAnswerCount, moduleNum) {
      if (correctAnswerCount === 10) {
        // Perfect Score 
        return 'Perfect Score!! You REALLY know your C 🎉. This Module will be marked as completed ✅'
      } 
      else if (correctAnswerCount > 7) {
        return 'Great work! This Module will be marked as completed ✅.'
      } 
      else {
        // if user gets less than a 80% redo the exam
        return 'Nice Try! You most score at least an 80% to mark this module as complete. Try practicing more problems in the Practice Module 😀.'
      }

    }

    const handleCloseModal = () => {
        setShowModal(false);
        // Additional logic for closing the modal if needed
    };

    const updateURL = (newQuestionNumber) => {
        // Update the URL based on the new question number
        window.history.pushState({}, '', `/test/${moduleID}/${encodeURIComponent(moduleName)}/${newQuestionNumber}`);
    };

    const updateCorrectAnswerCount = (newCount) => {
        setCorrectAnswerCount(newCount);
        console.log('Test: ', newCount);
    };

    return (
        <div>
            <div className="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Test</h4>
            </div>
            
            <div class="test-div">
        
                <div className="question-div branded-shadow">
                    <div className="question-num">
                        {currentQuestion}.
                    </div>

                    <div className="question-content">
                        {/* Render the QuestionContent component for the current question */}
                        <QuestionContent moduleID={moduleID} position={currentQuestion} updateCorrectAnswerCount={updateCorrectAnswerCount}/>
                    </div>

                    <div className="test-button-container">
                        <button className="branded-long-button branded-shadow test-next-btn" onClick={handleNextClick}>
                            {currentQuestion === questionsCount ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>

            </div>
          <div id="test-modal" class="modal">
            <div class="modal-content branded-shadow">
              <span class="close" id='close-test-modal'>&times;</span>
              <div className='modal-centered-container'>
                <div className='modal-header'>Test Result</div>
              </div>
              <div className='modal-centered-container'>
                <div className='branded-header modal-correct-text'>You got {correctAnswerCount} / 10 Correct</div>
              </div>

              <div className='modal-centered-container'>
                <div className='branded-header result-text'>{modalResultText(correctAnswerCount, moduleID)}</div>
              </div>

              <div className='modal-centered-container close-modal-button'>
                <button className='branded-long-button' id='long-modal-test-close'>Close</button>
              </div>
              
            </div>
          </div>

        </div>
    );
}

export default Test;