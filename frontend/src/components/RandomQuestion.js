import React, { useEffect, useState } from 'react';
import { useGetQuestion } from '../hook/useGetQuestion'; 

const RandomQuestion = () => {
  const [randomModuleID, setRandomModuleID] = useState(null);
  const [randomPosition, setRandomPosition] = useState(null);

  // Generate random values for moduleID and position
  useEffect(() => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const randomModuleID = getRandomNumber(1, 5);
    const randomPosition = getRandomNumber(1, 10);

    setRandomModuleID(randomModuleID);
    setRandomPosition(randomPosition);
  }, []);

  // Use the useGetQuestion hook with the random values
  const { question, isLoading, error } = useGetQuestion(randomModuleID, randomPosition);

  return (
    <div>
      <h2>Random Question</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {question && (
        <div>
             <div className="question-container">
                <p className="question-txt">{question.question}</p>

                <div className="answer-choices">
                    <button className="answer-choice-btn">{question.answerChoice1}</button>
                    <button className="answer-choice-btn">{question.answer}</button>
                    <button className="answer-choice-btn">{question.answerChoice2}</button>
                    <button className="answer-choice-btn">{question.answerChoice3}</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default RandomQuestion;
