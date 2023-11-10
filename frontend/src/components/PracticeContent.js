import React from 'react';

const PracticeContent = ({ questionNumber }) => {
    // You can fetch the content for the specific question based on questionNumber
    const practiceContent = `Content for Question ${questionNumber}`;

    return (
        <div>
            <h6>Practice Box!!!!!!!!!!!!: {questionNumber}.</h6>
            <div className="practice-content">
                {practiceContent}
            </div>
        </div>
    );
};

export default PracticeContent;