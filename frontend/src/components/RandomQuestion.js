import React, { useEffect, useState } from 'react';
import { useGetQuestion } from '../hook/useGetQuestion'; 

// RandomQuestion component receives a keyProp as a prop
const RandomQuestion = ({ keyProp, onRandomValuesChange }) => {
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

    // Pass the random values back to the parent component
    onRandomValuesChange(randomModuleID, randomPosition);

    console.log("after use get question: ", randomModuleID, randomPosition)
  }, [keyProp, onRandomValuesChange]); // Dependency array ensures this effect runs when keyProp changes

  // Use the useGetQuestion hook with the random values
  const { question, isLoading, error } = useGetQuestion(randomModuleID, randomPosition);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

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
