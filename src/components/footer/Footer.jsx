import React from 'react'
import "./footer.css"
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
  return (
   <footer>
      <a href='#' className='footer__logo'>JAGMEET</a>

      <ul className='permalinks' >
         <li> <a href='#'>Home</a></li>
         <li> <a href='#about'>About</a></li>
         <li> <a href='#experience'>Experience</a></li>
         <li> <a href='#portfolio'>Portfolio</a></li>
         <li> <a href='#testimonials'>Testimonials</a></li>
         <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='#'><BsFacebook/></a>
        <a href='#'><IoLogoTwitter/></a>
        <a href='#'><FiInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>copyright&copy;2022 , All rights reserved. </small>
      </div>

   </footer>
  )
}

export default Footer
