import React from 'react';

const QuestionContent = ({ questionNumber }) => {
    // You can fetch the content for the specific question based on questionNumber
    const questionContent = `Content for Question ${questionNumber}`;

    return (
        <div>
            <h6>Question Box!!!!!!!!!!!!: {questionNumber}.</h6>
            <div className="question-content">
                {questionContent}
            </div>
        </div>
    );
};

export default QuestionContent;
