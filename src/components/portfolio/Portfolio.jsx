import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";

const data = [
  {
    img: IMG5,
    title: "Offiql Tech - Clone Site",
    href: "https://github.com/ucantbe-jagmeet/offiql-technologies",
  },
  {
    img: IMG6,
    title: "AKP Project - Clone Site",
    href: "https://github.com/ucantbe-jagmeet/akp-project",
  },
  {
    img: IMG1,
    title: "Yummy Slice Pizza",
    href: "https://github.com/ucantbe-jagmeet/yummy-slice-pizza",
  },
  {
    img: IMG7,
    title: "Google Form Clone",
    href: "https://github.com/ucantbe-jagmeet/g-form-project",
  },
  {
    img: IMG2,
    title: "Image Gallery",
    href: "https://github.com/ucantbe-jagmeet/imageGallery",
  },
  {
    img: IMG3,
    title: "CV ",
    href: "https://github.com/ucantbe-jagmeet/cv",
  },
  {
    img: IMG4,
    title: "Profile Card",
    href: "https://github.com/ucantbe-jagmeet/profile-card",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((links, index) => {
          const { id, img, title, href } = links;

          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt="portfolio image" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={href} className="a btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
