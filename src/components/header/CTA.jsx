import React from "react";
import CV from "../../assets/JagmeetSingh_19124027_resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
