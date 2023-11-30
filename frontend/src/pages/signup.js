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
                <h3 className="branded-header">Lets Create Your Account! 💪</h3>

                <label className="branded-text">First Name:</label>
                <input
                    className="branded-input branded-shadow"
                    type="text" 
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    placeholder="Enter First Name"
                />

                <label className="branded-text">Last Name:</label>
                <input
                    className="branded-input branded-shadow"
                    type="text" 
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    placeholder="Enter Last Name"
                />

                <label className="branded-text">Email address:</label>
                <input
                    className="branded-input branded-shadow"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter Email here"

                />
                <label className="branded-text">Password:</label>
                <input
                    className="branded-input branded-shadow"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password here"
                />

                <button disabled={isLoading} className="branded-long-button">Sign up</button>
                {error && <div className="error">{error}</div>}

                <div className="login-extras">Already have an account?
                  &nbsp;<Link className="link-text" to="/login">Login Here</Link>
                </div>
             </form>
        </div>
    )
}

export default Signup
