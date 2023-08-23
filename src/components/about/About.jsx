import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>12+ Months</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1000+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am a Full Stack Developer with a passion for building beautiful
            and user-friendly websites. I have strong understanding of both
            front-end and back-end development, and I am excited to put my
            skills to use in a professional setting. I am a quick learner and a
            team player, and I am confident that I can be a valuable asset to
            any Web Development Team
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
