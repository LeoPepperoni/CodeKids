import { useState } from "react"
import { useLogin } from "../hook/useLogin"
import './Login.css';

import { Link } from 'react-router-dom'; 

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     // Custom hook for handling login functionality
    const { login, error, isLoading } = useLogin()

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Call the login function from the custom hook with email and password
        await login(email, password);
    }

    return (
        <div>
            <form className="login branded-shadow" onSubmit={handleSubmit}>
                <h3 className="branded-header">Welcome Back to CodeKids!</h3>

                <label className="branded-text">Email:</label>
                <input
                    className="branded-shadow branded-input"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter Email here"
                />
                <label>Password:</label>
                <input
                    className="branded-shadow branded-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password here"

                />

                {/* Submit button with disabled attribute while loading */}
                <button disabled={isLoading}>Log in</button>
                {/* Display error message if there is an error */}
                {error && <div className="error">{error}</div>}

                <label>Don't have an account? 
                    <Link to="/signup"> Signup Here</Link>
                </label>

                {/* Link to reset password modal */} 
                <label >
                    <Link to="/forgot-password">Forgot password?</Link>
                </label>
            </form>
        </div>
    )
}

export default Login;