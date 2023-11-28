import React from 'react';
import useGetQuestion from '../hook/useGetQuestion';
import './Hint Content.css'

const HintContent = ({ moduleID, position }) => {
    const { question, isLoading, error } = useGetQuestion(moduleID, position);

    console.log('HintContent - moduleID:', moduleID);
    console.log('HintContent - position:', position);

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
            <div className="hint-container">
               <p>HINT CONTENT Module: {moduleID} & Position: {position}</p>
               <div className="hint">
                    {question.hint}
               </div>
            </div>
        </div>
    );
};

export default HintContent;