import React, { useEffect, useState } from 'react';
import { useGetQuestion } from '../hook/useGetQuestion'; 

const RandomQuestion = ({ moduleID, position }) => {

  console.log('RandomQuestion - moduleID:', moduleID);
  console.log('RandomQuestion - position:', position);

  const [randomModuleID, setRandomModuleID] = useState(null);
  const [randomPosition, setRandomPosition] = useState(null);

  // Generate random values for moduleID and position
  useEffect(() => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const initialRandomModuleID = getRandomNumber(1, 5);
    const initialRandomPosition = getRandomNumber(1, 10);

    setRandomModuleID(initialRandomModuleID);
    setRandomPosition(initialRandomPosition);
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
             <div className="random-question-container">
                <p className="random-question-txt">{question.question}</p>

                <div className="random-answer-choices">
                    <button className="random-answer-choice-btn">{question.answerChoice1}</button>
                    <button className="random-answer-choice-btn">{question.answer}</button>
                    <button className="random-answer-choice-btn">{question.answerChoice2}</button>
                    <button className="random-answer-choice-btn">{question.answerChoice3}</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default RandomQuestion;
