import React, { useState } from 'react';

import { Link } from 'react-router-dom'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        // Add your code to handle the forgot password functionality here
        // For example, you can send a reset password link to the provided email address
        // and display a success message.
        
        // Replace the following code with your actual implementation
        setMessage('Password reset instructions sent to your email.');
    };

    return (
        <div className="forgot-password">
            <h3>Forgot Password</h3>
            <form onSubmit={handleForgotPassword}>
                <label>Email</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email address"
                />
                <button>Reset Password</button>
            </form>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default ForgotPassword;
