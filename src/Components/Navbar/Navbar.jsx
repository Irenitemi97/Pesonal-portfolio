import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/as-whitetypeface.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* <Link to='/' className='navbar-logo'>ADEDIRAN S.A</Link> */}
                    <Link to='/' className='navbar-logo'><img src={logo} alt="" className='logs' /></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Service' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Protfolio' className='nav-links' onClick={closeMobileMenu}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                    </li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>


        </>
    )
}

export default Navbar