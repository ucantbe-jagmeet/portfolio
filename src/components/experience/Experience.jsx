import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontend = [
  {
    title: "HTML3",
    experience: "Experienced",
  },
  {
    title: "CSS5",
    experience: "Experienced",
  },
  {
    title: "JAVASCRIPT",
    experience: "Intermediate",
  },
  {
    title: "TAILWIND",
    experience: "Experienced",
  },
  {
    title: "REACTJS",
    experience: "Experienced",
  },
  {
    title: "REDUX TOOLKIT",
    experience: "Experienced",
  },
  {
    title: "TYPESCRIPT",
    experience: "Experienced",
  },
  {
    title: "NEXTJS",
    experience: "Experienced",
  },
];

const otherTech = [
  {
    title: "NODEJS",
    experience: "Intermediate",
  },
  {
    title: "EXPRESSJS",
    experience: "Intermediate",
  },
  {
    title: "MONGO DB",
    experience: "Experienced",
  },
  {
    title: "GITHUB",
    experience: "Experienced",
  },
  {
    title: "AZURE DEVOPS",
    experience: "Intermediate",
  },
  {
    title: "FIREBASE",
    experience: "Intermediate",
  },
  {
    title: "POSTMAN",
    experience: "Experienced",
  },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend.map((item, index) => {
              return (
                <article className="experience__details" key={index}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Frontend Part End*/}

        <div className="experience__technologies">
          <h3>Other Technologies</h3>
          <div className="experience__content">
            {otherTech.map((item, index) => {
              return (
                <article className="experience__details" key={index}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
