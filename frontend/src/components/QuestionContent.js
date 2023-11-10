import React from 'react';
import useGetQuestion from '../hook/useGetQuestion';

const QuestionContent = ({ moduleID, position }) => {
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
      <h1>Question Details</h1>
      <p>Question: {question.question}</p>
      <p>Answer: {question.answer}</p>
      {/* Display other question details as needed */}
    </div>
  );
};

export default QuestionContent;

