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
                {user && (
                    <div>
                        <button className="dropdown-btn branded-button">"Drop Down"</button>
                    </div>
                )}
                {!user && (
                    <div>
                        <Link to="/About">
                            <button className="branded-button">About Us</button>
                        </Link>
                        
                    </div>
                )}
                <nav>
                    {user && (
                        <div>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                                <Link to="/login">
                                  <button className="branded-button">Login</button>
                                </Link>
                                <Link to="/signup">
                                  <button className="branded-button">Signup</button>
                                </Link>
                            
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar