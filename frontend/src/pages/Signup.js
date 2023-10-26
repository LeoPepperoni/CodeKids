import {useState} from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        e.preventDefault

        console.log(email, password)
    }

    return (
        <form classname="signup" onSubmit={handleSubmit}>
            <h3>
                Signup
            </h3>
            <label>
                email:
            </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>
                password:
            </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Sign up</button>
        </form>
    )
}

export default Signup