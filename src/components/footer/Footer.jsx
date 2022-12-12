import React from 'react'
import "./footer.css"
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
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
        <a href='https://www.facebook.com/profile.php?id=100004533609204'><BsFacebook/></a>
        <a href='https://twitter.com/home?lang=en'><IoLogoTwitter/></a>
        <a href='https://www.linkedin.com/in/jagmeet-singh-8a02931b0/'><BsLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>copyright&copy;2022 , All rights reserved. </small>
      </div>

   </footer>
  )
}

export default Footer
