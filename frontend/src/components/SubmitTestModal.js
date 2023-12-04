import React from 'react';

const SubmitTestModal = ({ correctAnswerCount, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Test Results</h3>
                <p>You answered {correctAnswerCount} questions correctly.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SubmitTestModal;
