import { useState } from "react"
import { useSignup } from "../hook/useSignup"
import './signup.css'
import { Link } from 'react-router-dom'; 

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(firstName, lastName, email, password)
    }

    return (
        <div>
            <form className="signup branded-shadow" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label>First Name:</label>
                <input
                    className="branded-input"
                    type="text" 
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    placeholder="Enter First Name"
                />

                <label>Last Name:</label>
                <input
                    className="branded-input"
                    type="text" 
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    placeholder="Enter Last Name"
                />

                <label>Email address:</label>
                <input
                    className="branded-input"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter Email here"

                />
                <label>Password:</label>
                <input
                    className="branded-input"
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
        </div>
    )
}

export default Signup
