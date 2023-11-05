import { useState } from "react"
import { useSignup } from "../hook/useSignup"
import './signup.css'
import { Link } from 'react-router-dom'; 

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <body>
            <form className="signup" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label>Email address:</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter Email here"

                />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password here"
                />

                <button disabled={isLoading}>Sign up</button>
                {error && <div className="error">{error}</div>}

                <label className="message">Already have an account?
                <Link to="/login">Login Here</Link></label>
             </form>
        </body>
    )
}

export default Signup
