import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import projectsstyle from "./Projects.module.css";
import Button from '../../components/Button/Button';

import Brandme from '../../assets/Brandme.png';
import BrandmeHover from '../../assets/Brandme-hover.png';
import Gradient from '../../assets/Gradient.png';
import IconClick from '../../assets/IconClick.png';
import BrandmeShop from '../../assets/BrandmeShop.png';
import Packs from '../../assets/packs.jpg';
import PacksHover from '../../assets/packs.MOV';

function Projects() {
  const projectsRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BrandMe",
      heading: "Social Media",
      description: "A social media platform facilitating interactions among a maximum of four users per post, with the added feature of enabling others to like one user, fostering friendly competition.",
      image: Brandme,
      hoverImage: BrandmeHover,
      gradient: Gradient,
      icon: IconClick
    },
    {
      id: 2,
      title: "BrandMe Shop",
      heading: "Market Place",
      description: "A marketplace application tailored for small businesses and skilled individuals, offering a convenient search feature where users can input their desired products or services to find local offerings around his/her location",
      image: BrandmeShop,
      hoverImage: BrandmeShop,
      gradient: Gradient,
      icon: IconClick
    },
    {
      id: 3,
      title: "Packs",
      heading: "Pair to Pair",
      description: "A native pair to pair interactions among a maximum of four users per post, with the added feature of enabling others to like one user, fostering friendly competition.",
      image: Packs,
      hoverImage: PacksHover,
      gradient: Gradient,
      icon: IconClick
    },
  ];

  useEffect(() => {
    const projectsTimeline = gsap.timeline({ paused: true });
    projectsTimeline
      .from(".project-card", { opacity: 0, duration: 0.5 })
      .from(".project-img", { opacity: 0, duration: 0.5 }, "-=0.5");

    const onScroll = () => {
      const element = projectsRef.current;
      const topOffset = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (topOffset < windowHeight * 0.75) {
        projectsTimeline.play();
        window.removeEventListener("scroll", onScroll);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={projectsstyle["container"]} ref={projectsRef} id='projects'>
      {projects.map((project, index) => (
        <div key={project.id} className={index % 2 === 1 ? projectsstyle["contents-reverse"] : projectsstyle["contents"]}>
          <div className={projectsstyle["left"]}>
            <p className={projectsstyle["title"]}>{project.title}</p>
            <img src={project.gradient} className={projectsstyle["gradient"]} />
            <p className={projectsstyle["heading"]}>{project.heading}</p>
            <div className={projectsstyle["project-card"]}>
              <p className={projectsstyle["project-desc"]}>{project.description}</p>
            </div>
            <div className={projectsstyle["btn-container"]}>
              <img src={project.icon} alt="" className={projectsstyle["icon-click"]} />
              <button className={projectsstyle["skill-btn"]}>Learn More</button>
              <img src={project.icon} alt="" className={projectsstyle["icon-click"]} />
            </div>
          </div>
          <div className={projectsstyle["right"]}>
            <img
              src={hoveredImage === project.id ? project.hoverImage : project.image}
              alt=""
              className={projectsstyle["project-img"]}
              onMouseEnter={() => setHoveredImage(project.id)}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
