import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Yummy Slice Pizza",
    href: "https://github.com/ucantbe-jagmeet/yummy-slice-pizza",
  },
  {
    id: 2,
    img: IMG2,
    title: "Image Gallery",
    href: "https://github.com/ucantbe-jagmeet/imageGallery",
  },
  {
    id: 3,
    img: IMG3,
    title: "CV ",
    href: "https://github.com/ucantbe-jagmeet/cv",
  },
  {
    id: 4,
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
        {data.map((links) => {
          const { id, img, title, href } = links;

          return (
            <article key={id} className="portfolio__item">
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
