import { Link } from 'react-router-dom'
import { useLogout } from '../hook/useLogout'
import { useAuthContext } from '../hook/useAuthContext'
import './Navbar.css';

const Navbar = () => {
    // Importing the logout function from the custom hook
    const { logout } = useLogout()
    // Importing the user data from the custom hook
    const { user } = useAuthContext()

    // Function to handle the logout button click
    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                {!user && (
                    <div>
                        <Link to="/About">
                            <button className="about-btn">About</button>
                        </Link>
                        
                    </div>
                )}
                <Link to="/">
                    <h1>Code Kids</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <button className="login-btn">
                                <Link to="/login">Login</Link>
                            </button>
                            <button className="signup-btn">
                                <Link to="/signup">Signup</Link>
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar