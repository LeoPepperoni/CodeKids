import React, { useState } from 'react';
import useGetQuestion from '../hook/useGetQuestion';
import './PracticeContent.css';

const PracticeContent = ({ moduleID, position }) => {
    const { question, isLoading, error } = useGetQuestion(moduleID, position);
    const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

    const handleButtonClick = (index) => {
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

    return (
        <div>
            <div className="practice-container">
                <p className="question-txt">{question.question}</p>

                <div className="answer-choices">
                    {question.answerChoices.map((choice, index) => (
                        <button
                            key={index}
                            className={`branded-long-button ${
                                clickedButtonIndex === index ? 'clicked' : ''
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

export default PracticeContent;
