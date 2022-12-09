import React from 'react'
import CV from "../../assets/19124027_JagmeetSingh_resume.pdf"

const CTA = () => {
  return (
    <div className='cta' >
        <a href={CV} className="btn" download>Download CV</a>
        <a href='#contact' className="btn-primary" >Let's Talk</a>
    </div>
  )
}

export default CTA
