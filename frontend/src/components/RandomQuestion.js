import React, { useEffect, useState } from 'react';
import { useGetQuestion } from '../hook/useGetQuestion'; 

// RandomQuestion component receives a keyProp as a prop
const RandomQuestion = ({ moduleID, position, updateCorrectAnswerCount }) => {
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

  const handleButtonClick = (index) => {
    setClickedButtonIndex(index);
  
    if (shuffledChoices[index] === question.answer) {
      if (!hasSelectedCorrectAnswer) {
        const newCount = correctAnswerCount + 1;
        setCorrectAnswerCount(newCount);
        updateCorrectAnswerCount(newCount);
        setHasSelectedCorrectAnswer(true);
      }
    } else {
      if (hasSelectedCorrectAnswer) {
        const newCount = correctAnswerCount - 1;
        setCorrectAnswerCount(newCount);
        updateCorrectAnswerCount(newCount);
        setHasSelectedCorrectAnswer(false);
      }
    }
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
                          key={index}
                          className={`branded-question-btn answer-choice-btn ${
                            (clickedButtonIndex === index ) ? 'clicked' : ''
                          }`}
                          onClick={() => handleButtonClick(index)}
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
