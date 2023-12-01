import React, { useState, useEffect } from 'react';
import useGetQuestion from '../hook/useGetQuestion';
import './QuestionContent.css';

const QuestionContent = ({ moduleID, position }) => {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!question) {
    return <div>Question not found</div>;
  }
  const handleButtonClick = (index) => {
    setClickedButtonIndex(index);
  
    if (shuffledChoices[index] === question.answer) {
      if (!hasSelectedCorrectAnswer) {
        setCorrectAnswerCount(correctAnswerCount + 1);
        setHasSelectedCorrectAnswer(true);
      }
      console.log("Correct Answer!");
    } else {
      if (hasSelectedCorrectAnswer) {
        setCorrectAnswerCount(correctAnswerCount - 1);
        setHasSelectedCorrectAnswer(false);
      }
      console.log("Incorrect Answer.");
    }
  };

  console.log("correct answer count: ", correctAnswerCount);

  return (
    <div>
      <div className="question-container">
        <p className="question-txt">{question.question}</p>

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
  );
};

export default QuestionContent;

