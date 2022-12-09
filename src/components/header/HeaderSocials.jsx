import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jagmeet-singh-8a02931b0/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ucantbe-jagmeet" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/ucantbe_jagmeett" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
