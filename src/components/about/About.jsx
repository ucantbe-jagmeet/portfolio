import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
  <section id='about' >
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image' >
          <img src={ME} alt='About Image'/>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>5+ Months</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>1000+ Worldwide</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Completed</small>
          </article>
        </div>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nibh mauris. Aliquam eget augue sed diam sodales pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut erat risus, placerat in blandit at, tincidunt sit amet purus. Integer ut pretium orci. Mauris pretium nisi in molestie 
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>

  </section>
  )
}

export default About
