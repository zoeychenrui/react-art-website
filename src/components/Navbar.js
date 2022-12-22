import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    zoeychenrui
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/teaching" className="nav-links" onClick={closeMobileMenu}>
                            teaching
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/originals" className="nav-links" onClick={closeMobileMenu}>
                            originals
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/pinterest" className="nav-links" onClick={closeMobileMenu}>
                            pinterest
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            about
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="https://www.linkedin.com/in/zoey-chen/" className="nav-links" onClick={closeMobileMenu}>
                        <i className= "fa-brands fa-linkedin"/>
                        </a>
                     
                    </li>
                    <li className='nav-item'>
                    <a href="mailto: zoeychen2013@gmail.com" className="nav-links" onClick={closeMobileMenu}>
                        <i className= "fa-solid fa-square-envelope"/>
                        </a>
                    </li>
                   
                </ul>

            </div>
                
        </nav>
        </>
      
    
  )
}

export default Navbar
