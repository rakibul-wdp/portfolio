import React, { useState, useEffect } from 'react';
import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24'>
      {projects.slice(0, 3).map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
