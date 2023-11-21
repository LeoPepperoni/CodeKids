import React, { useEffect, useState } from 'react';
import { useGetQuestion } from '../hook/useGetQuestion'; 

// RandomQuestion component receives a keyProp as a prop
const RandomQuestion = ({ keyProp }) => {
  const [randomModuleID, setRandomModuleID] = useState(null);
  const [randomPosition, setRandomPosition] = useState(null);

  // useEffect hook runs when keyProp changes
  useEffect(() => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const randomModuleID = getRandomNumber(1, 5);
    const randomPosition = getRandomNumber(1, 10);

     // Update state with the new random values
    setRandomModuleID(randomModuleID);
    setRandomPosition(randomPosition);
  }, [keyProp]); // Dependency array ensures this effect runs when keyProp changes

  // Use the useGetQuestion hook with the random values
  const { question, isLoading, error } = useGetQuestion(randomModuleID, randomPosition);
  console.log("after use get question: ", randomModuleID, randomPosition)

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
