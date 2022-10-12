import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button/Button';
import SignupModal from '../../Modal/SignupModal';
import './Header.css'
import { AuthContext } from '../../store/Context';
import {signOut} from 'firebase/auth';
import { auth } from '../../Firebase/config';


function Header() {
    const [click, setClick] = useState(false);
    const[button,setButton] = useState(true);
    const [modalShow, setModalShow] = useState(false)
    
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=> setClick(false)
    const {user} =useContext(AuthContext)

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    const logout = ()=>{
        signOut(auth)
        
    }

    useEffect(() => {
      showButton();
    
      
    })
    
    window.addEventListener('resize',showButton)

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-logo'>Jr</Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/blog" className='nav-links' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>
                        Gallery
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li> */}
            </ul>
            {user ? <span className='user-name' onClick={logout}>{user.displayName}</span> : button && <Button buttonStyle='btn--outline' onClick={()=>setModalShow(!modalShow)}>Sign Up</Button>}
        </div>
    </nav>
    <SignupModal show = {modalShow} setClose={()=>setModalShow(false)}/>
    </>
    )
}

export default Header