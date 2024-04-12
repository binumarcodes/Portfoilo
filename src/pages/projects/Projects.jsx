import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import projectsstyle from "./Projects.module.css";

function Projects() {
  const projectsRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BrandMe",
      heading: "Social Media",
      description: "A social media platform facilitating interactions among a maximum of four users per post, with the added feature of enabling others to like one user, fostering friendly competition.",
      image: "/public/Brandme.png",
      hoverImage: "/public/Brandme-hover.png",
      gradient: "/public/Gradient.png",
      icon: "/public/IconClick.png"
    },
    {
      id: 2,
      title: "BrandMe Shop",
      heading: "Market Place",
      description: "A marketplace application tailored for small businesses and skilled individuals, offering a convenient search feature where users can input their desired products or services to find local offerings around his/her location",
      image: "/public/BrandmeShop.png",
      hoverImage: "/public/BrandmeShop.png",
      gradient: "/public/Gradient.png",
      icon: "/public/IconClick.png"
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
    <div className={projectsstyle["container"]} ref={projectsRef}>
      <h2 className={projectsstyle["head-text"]}>The Mobile</h2>
      {projects.map((project, index) => (
        <div key={project.id} className={index % 2 === 1 ? projectsstyle["contents-reverse"] : projectsstyle["contents"]}>
          <div className={projectsstyle["left"]}>
            <p className={projectsstyle["title"]}>{project.title}</p>
            <img src={project.gradient} className={projectsstyle["gradient"]} />
            <p className={projectsstyle["heading"]}>{project.heading}</p>
            <div className={projectsstyle["project-card"]}>
              <p className={projectsstyle["project-desc"]}>{project.description}</p>
            </div>
            <img src={project.icon} alt="" className={projectsstyle["icon-click"]} />
            <img src={project.icon} alt="" className={projectsstyle["icon-click"]} />
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