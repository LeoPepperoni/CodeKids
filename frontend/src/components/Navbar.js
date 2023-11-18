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

    const menuClick = () => {
      const menu = document.getElementById("menu-toggle");
      menu.click();
    }

    return (
        <div>
            <div className="container">
                {!user && (
                    <div>
                      <div class="hamburger-menu">
                        <input id="menu-toggle" type="checkbox" />
                        <label class="menu-btn" for="menu-toggle">
                          <span></span>
                        </label>

                        <ul class="menu-box">
                          <li><Link to="/"><div className="menu-item" onClick={menuClick}>Home</div></Link></li>
                          <li><Link to="/about"><div className="menu-item" onClick={menuClick}>About</div></Link></li>
                          <li><Link to="/dashboard"><div className="menu-item" onClick={menuClick}>Modules</div></Link></li>
                        </ul>
                      </div>
                    </div>
                )}
                {user && (
                    <div>
                        <Link to="/About">
                            <button className="branded-button">About Us</button>
                        </Link>
                        
                    </div>
                )}
                <nav>
                    {user && (
                        <div>
                            <button className="branded-button" onClick={handleClick}>Log out</button>
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
        </div>
    )
}

export default Navbar