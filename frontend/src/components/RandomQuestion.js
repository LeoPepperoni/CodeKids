import React, { useEffect, useState } from 'react';
import { useGetQuestion } from '../hook/useGetQuestion'; 

// RandomQuestion component receives a keyProp as a prop
const RandomQuestion = ({ moduleID, position }) => {
  const { question, isLoading, error } = useGetQuestion(moduleID, position);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0); 
  const [hasSelectedCorrectAnswer, setHasSelectedCorrectAnswer] = useState(false); 

  useEffect(() => {
    if (question) {
      // Create an array of answer choices and shuffle it
      const choices = [question.answerChoice1, question.answer, question.answerChoice2, question.answerChoice3];
      const shuffled = shuffleArray(choices);
      setShuffledChoices(shuffled);
      setClickedButtonIndex(null); // Reset clicked button index when question changes
      setHasSelectedCorrectAnswer(false);
    }
  }, [question]);

  const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
  };

  return (
    <div>
      <h2>Random Question</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {question && (
        <div>
             <div className="practice-container">
                <p className="question-txtt">{question.question}</p>

                <div className="answer-choices">
                  {shuffledChoices.map((choice, index) => (
                          <button
                              className="branded-question-btn answer-choice-btn"
                          >
                              {choice}
                          </button>
                      ))}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default RandomQuestion;
