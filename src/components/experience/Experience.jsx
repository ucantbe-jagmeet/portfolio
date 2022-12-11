import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container' >
        <div className='experience__frontend' >
          <h3>Frontend Development</h3>
          <div className='experience__content' >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TAILWIND</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>REACTJS</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>GITHUB</h4>
                  <small className='text-light' >Experienced</small>
                </div>
            </article>
           
          </div>
        </div>

       { /* Frontend Part End*/}
        
        <div className='experience__technologies' >
          <h3>OTHER TECHNOLOGIES</h3>
            <div className='experience__content' >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C LANGUAGE</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JAVA</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DATA STRUCTURE</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>FIGMA</h4>
                <small className='text-light' >Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>VERCEL</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            </div>
        </div>

      </div>

    </section>
  )
}

export default Experience
