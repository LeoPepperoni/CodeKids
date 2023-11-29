import React, { useState, useEffect } from 'react';
import useGetQuestion from '../hook/useGetQuestion';

const QuestionContent = ({ moduleID, position }) => {
  const { question, isLoading, error } = useGetQuestion(moduleID, position);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); 

  useEffect(() => {
      if (question) {
          // Create an array of answer choices and shuffle it
          const choices = [question.answerChoice1, question.answer, question.answerChoice2, question.answerChoice3];
          const shuffled = shuffleArray(choices);
          setShuffledChoices(shuffled);
          setClickedButtonIndex(null); // Reset clicked button index when question changes
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

  const handleAnswerClick = (choice, index) => {
    setClickedButtonIndex(index);
    if (choice === question.answer) {
        console.log("right answer");
        setCorrectAnswersCount(prevCount => prevCount + 1); // Increment correct answers count
    }
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

  return (
    <div>
      <div className="question-container">
        <p className="question-txt">{question.question}</p>

        <div className="answer-choices">
          {shuffledChoices.map((choice, index) => (
              <button
                  className="branded-question-btn answer-choice-btn"
                  onClick={() => handleAnswerClick(choice, index)}
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

