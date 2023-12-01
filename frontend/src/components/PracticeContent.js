import React, { useState, useEffect } from 'react';
import useGetQuestion from '../hook/useGetQuestion';
import './PracticeContent.css';

const PracticeContent = ({ moduleID, position }) => {
    const { question, isLoading, error } = useGetQuestion(moduleID, position);
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

    const handleButtonClick = (index, choice) => {
        displayText(choice);
        setClickedButtonIndex(index);
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

    function isCorrect(answerChoice) {
      return (answerChoice === question.answer) ? true : false;
    }

    function displayText(choice) {
      return isCorrect(choice) ? 'Correct!': 'Oops, thats not correct!';
    }

    return (
        <div>
            <div className="practice-container">
                <p className="question-txt">{question.question}</p>

                <div className="answer-choices">
                    {shuffledChoices.map((choice, index) => (
                        <button
                            key={index}
                            className={`branded-question-btn answer-choice-btn ${
                                (clickedButtonIndex === index && isCorrect(choice)) ? 'correct' : (clickedButtonIndex === index ? 'incorrect' : '')
                            }`}
                            onClick={() => handleButtonClick(index, choice)}
                        >
                            {choice}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PracticeContent;


