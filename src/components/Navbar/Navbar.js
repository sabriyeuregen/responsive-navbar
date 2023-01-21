import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
const Navbar = () => {
   
  const [showNav, setShowNav] = useState(false)

  return (
   <div className="nav-bar">
    <div><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></div>
      <nav className={showNav ? 'mobile-show' : ''}>
        <div className="navbar-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
        <FontAwesomeIcon className='close-icon' onClick={() => setShowNav(false)} icon={faClose}></FontAwesomeIcon>
      </nav>
     
       <FontAwesomeIcon className="hamburger-icon" onClick={() => setShowNav(true)} icon={faBars}></FontAwesomeIcon>
      
   </div>
  )
}

export default Navbar;