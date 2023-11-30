import React from 'react';

const SubmitTestAllModal = ({ show, close, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <div className="result-msg">You got 20/20</div>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default SubmitTestAllModal;
