import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import icon from  '../assets/real-icon.png'
import './Header.css';
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="menu">
        <div className="title-container">
         
        {/* <a className="title" href="https://goldenstarscollege.com"  rel="noopener noreferrer">
        <img src={icon} alt="Golden Stars College Logo" />
        <h2>Golden Stars College</h2>
       </a> */}
        <Link className="title " to="/"> <img src={icon} alt="" /> <h2>Golden Stars college</h2> </Link>
        </div>
        
        <label htmlFor="" className="icons" onClick={toggleMenu}>
          <FontAwesomeIcon  icon={toggle ? faTimes : faBars} />
        </label>
      </div>
    
      <ul id="link-container" className={toggle ? "show" : ""}>
       
        <li>
          <NavLink className="navlinks" activeClassName="active" exact to="/service">Service</NavLink>
        </li>
        
        <li>
          <NavLink className="navlinks" activeClassName="active" exact to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink className="navlinks" activeClassName="active" exact to="/certification">Achievement</NavLink>
        </li>
    
        <li>
          <NavLink className="navlinks" activeClassName="active" exact to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink className="navlinks" activeClassName="active" exact to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink className="navlinks" activeClassName="active" exact to="/background" >About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
