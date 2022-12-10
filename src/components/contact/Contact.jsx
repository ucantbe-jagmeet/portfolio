import React from 'react'
import "./contact.css"
import { MdMailOutline } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'




const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container' >
        <div className='contact__options'>
          <article className='contact__option' >
            <MdMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jagmeetsingh2921@gmail.com</h5>
            <a href='mailto:jagmeetsingh2921@gmail.com' target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option' >
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Jagmeet Singh</h5>
            <a href='https://www.linkedin.com/in/jagmeet-singh-8a02931b0/' target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option' >
              <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917876#######</h5>
            <a href='https://api.whatsapp.com/send?phone=+99999999999' target='_blank'>Send A Message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=''>
            <input typeof='text' name='name' placeholder='Your Full Name' required/>
            <input typeof='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' cols="30" rows="7" placeholder='Your Message here' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

       </div>
    </section>
  )
}

export default Contact
