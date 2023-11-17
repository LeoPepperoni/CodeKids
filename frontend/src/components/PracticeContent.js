import React from 'react';
import useGetQuestion from '../hook/useGetQuestion';
import './PracticeContent.css';

const PracticeContent = ({ moduleID, position }) => {
    const { question, isLoading, error } = useGetQuestion(moduleID, position);

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
                    <button className="answer-choice-btn">{question.answerChoice1}</button>
                    <button className="answer-choice-btn">{question.answer}</button>
                    <button className="answer-choice-btn">{question.answerChoice2}</button>
                    <button className="answer-choice-btn">{question.answerChoice3}</button>
                </div>
            </div>
        </div>
    );
};

export default PracticeContent;