import { Link } from 'react-router-dom';
import { useState } from "react"
import React from 'react';
import { useAddQuestion } from "../hook/useAddQuestion"
import { useDeleteQuestion} from "../hook/useDeleteQuestion"
import './Admin.css';

const Admin = () => {
  // Add question input
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [moduleM, setModule] = useState('');
  const [answerChoice1, setAnswerChoice1] = useState('');
  const [answerChoice2, setAnswerChoice2] = useState('');
  const [answerChoice3, setAnswerChoice3] = useState('');
  const [position, setPosition] = useState('');
  const [hint, setHint] = useState('');
  const { addQuestion, error, isLoading } = useAddQuestion();
  const { deleteQuestion, deleteError, deleteLoading} = useDeleteQuestion();

  // Delete question input
  const [moduleDelete, setDeleteModule] = useState('');
  const [positionDelete, seDeletePosition] = useState('');

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    await addQuestion(question, answer, moduleM, answerChoice1, answerChoice2, answerChoice3, position, hint);
     // On the last question we want to prompt the modal as well as hit the progress endpoint
     var modal = document.getElementById("add-modal");
     var close = document.getElementById("close-add-modal");
     var longClose = document.getElementById("long-modal-add-close");

     modal.style.display = "block";
     close.onclick = function() {
       modal.style.display = "none";
     }
     longClose.onclick = function() {
       modal.style.display = "none";
     }
     window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };

  const handleDeleteQuestion = async (e) => {
      e.preventDefault();
      await deleteQuestion(positionDelete, moduleDelete);
      // On the last question we want to prompt the modal as well as hit the progress endpoint
      var modal = document.getElementById("delete-modal");
      var close = document.getElementById("close-delete-modal");
      var longClose = document.getElementById("long-modal-delete-close");

      modal.style.display = "block";
      close.onclick = function() {
        modal.style.display = "none";
      }
      longClose.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };

  return (
      <div>
          <div className='logo-container'>
            <Link className='branded-logo-link' to="/">
              <div className='branded-logo branded-shadow' title='Return home'>CodeKnights</div>
            </Link>
          </div>
          
          <div className='admin-container'>
            <div className='branded-header admin-message'>Admin Panel</div>
          </div>

          <div className='admin-container'>
              <form className='admin-delete-question branded-shadow' id='delete-form' onSubmit={handleDeleteQuestion}>
                <h3 className="branded-header">Delete a Question ❌</h3>

                <label className="input-label branded-text">Question's Module:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setDeleteModule(e.target.value)}
                    value={moduleDelete}
                    placeholder="Module 2..."
                />

                <label className="input-label branded-text">Question Position:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => seDeletePosition(e.target.value)}
                    value={positionDelete}
                    placeholder="Question 5..."
                />
                <button className="branded-long-button submit-admin-question" disabled={deleteLoading}>Delete Question</button>
              </form>
          </div>
            
          <div className='admin-container special-container'>
              <form className='admin-add-question branded-shadow' id='add-form' onSubmit={handleAddQuestion}>
                <h3 className="branded-header">Add a Question ✅</h3>

                <label className="input-label branded-text">Question Prompt:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                    placeholder="How do I declare a float in C..."
                />

                <label className="input-label branded-text">Module:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setModule(e.target.value)}
                    value={moduleM}
                    placeholder="Module 1..."
                />

                <label className="input-label branded-text">Answer:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    placeholder="float myVar = ..."
                />


                <label className="input-label branded-text">Answer Choice 1:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setAnswerChoice1(e.target.value)}
                    value={answerChoice1}
                    placeholder="Choice 1..."
                />

                <label className="input-label branded-text">Answer Choice 2:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setAnswerChoice2(e.target.value)}
                    value={answerChoice2}
                    placeholder="Choice 2..."
                />

                <label className="input-label branded-text">Answer Choice 3:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setAnswerChoice3(e.target.value)}
                    value={answerChoice3}
                    placeholder="Choice 3..."
                /> 

                <label className="input-label branded-text">Question Position:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    placeholder="Question 7..."
                />

                <label className="input-label branded-text">Question Hint:</label>
                <input
                    className="branded-shadow branded-input"
                    type=""
                    onChange={(e) => setHint(e.target.value)}
                    value={hint}
                    placeholder="think of..."
                /> 

                <button className="branded-long-button submit-admin-question" disabled={isLoading}>Add Question</button>
              </form>
          </div>

          <div id="delete-modal" class="modal">
            <div class="delete-modal-content branded-shadow">
              <span class="close" id='close-delete-modal'>&times;</span>
              <div className='modal-centered-container'>
                <div className='modal-header'>Question Deleted</div>
              </div>
              <div className='modal-centered-container'>
                <div className='branded-header modal-correct-text'>Success!</div>
              </div>

              <div className='modal-centered-container close-modal-button'>
                <button className='branded-long-button close-delete-modal' id='long-modal-delete-close'>Close</button>
              </div>
            </div>
          </div>

          <div id="add-modal" class="modal">
            <div class="delete-modal-content branded-shadow">
              <span class="close" id='close-add-modal'>&times;</span>
              <div className='modal-centered-container'>
                <div className='modal-header'>Question Added</div>
              </div>
              <div className='modal-centered-container'>
                <div className='branded-header modal-correct-text'>Success!</div>
              </div>

              <div className='modal-centered-container close-modal-button'>
                <button className='branded-long-button close-delete-modal' id='long-modal-add-close'>Close</button>
              </div>
            </div>
          </div>

      </div>
  );
}

export default Admin;