import React, { useState } from 'react';
import './forgot-password.css';
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
        <div className="branded-shadow forgot-password">
            <h3 className="branded-header">Oops... Let's Reset Your Password!</h3>
            <div className='reset-text'>
              <p className='branded-text'>Please provide the email used to create your <em>CodeKnights</em> account.
                We will send an email to the address with account retrieval instructions! 🤠
              </p>
            </div>
            <div className="">
                
                <form onSubmit={handleForgotPassword} className='fp-form'>
                  <label className="branded-text">Email:</label>
                  <input
                      className="branded-shadow branded-input"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter your email address"
                  />
                </form>

            </div>
            <button className="branded-long-button fp-long-button">Reset</button>
            <div className="fp-extras">
                    <Link className="link-text" to="/login">Remember Your Login?</Link>
                </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default ForgotPassword;
