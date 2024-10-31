import './Footer.css'

import React from 'react'
import { FaTwitter,FaLinkedin,FaFacebook,FaInstagram,FaMailBulk,FaTelegram,FaRobot } from "react-icons/fa";

function Footer() {
  return (
    <div id='footer'>
  
    <footer>
      
      <FaTwitter className='react-icons'/>
      <FaLinkedin className='react-icons'/>
      <a href="https://www.facebook.com/Goldenstars2011/?locale=gn_PY" target='_blank'> <FaFacebook className='react-icons'/></a>
      <FaInstagram className='react-icons'/>
      <FaTelegram className='react-icons'/>
      
    </footer>
    <h1>© 2024 Golden Stars College, All Rights Reserved</h1>
    </div>
  )
}

export default Footer