import { useState } from "react"
import { useLogin } from "../hook/useLogin"
import { Link } from 'react-router-dom'; 

const Login = () => {
    // Define state variables for email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     // Custom hook for handling login functionality
    const { login, error, isLoading } = useLogin()

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Call the login function from the custom hook with email and password
        await login(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

             {/* Submit button with disabled attribute while loading */}
            <button disabled={isLoading}>Log in</button>
            {/* Display error message if there is an error */}
            {error && <div className="error">{error}</div>}

            <label className="message">Don't have an account?</label>
            <Link to="/signup">Signup Here</Link>

            {/* Link to reset password modal */} 
            <label className="message">Forgot password?</label>
        </form>
    )
}

export default Login