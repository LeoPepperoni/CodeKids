import React from 'react';
import useGetQuestion from '../hook/useGetQuestion';

const HintContent = ({ moduleID, position }) => {
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
            <div className="hint-container">
               <p>HINT CONTENT</p>
            </div>
        </div>
    );
};

export default HintContent;