import React, { useRef } from 'react';
import './ProjectCarousel.module.css'; // Import CSS for styling

const ProjectCarousel = ({ projects }) => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const projectWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.floor(scrollLeft / projectWidth);
      scrollRef.current.scrollTo({
        left: projectWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="project-carousel" ref={scrollRef} onScroll={handleScroll}>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="cover-image">
            <img src={project.coverImage} alt="Project Cover" />
          </div>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
