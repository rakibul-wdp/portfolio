import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/rakibul-wdp/my-simple-portfolio/main/public/projects.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const eachProject = projects.find((project) => project._id === parseInt(projectId));
  return (
    <>
      <div className='banner-background'></div>
      <div className='banner-background bg-two'></div>
      <div className='banner-background bg-three'></div>
      <div className='banner-background-content'></div>
      <div className='px-80 my-16'>
        <h2 className='text-3xl font-bold text-white text-center mb-5'>{eachProject?.name}</h2>
        <div className='p-5 rounded-2xl border-4 border-primary'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='card card-compact w-96 bg-base-100 shadow-xl h-96 border-4 border-primary'>
              <figure>
                <div
                  id='screen-details'
                  className='w-full'
                  style={{ backgroundImage: `url(${eachProject?.screenShotOne})` }}
                ></div>
                <div id='base' className='' style={{ backgroundImage: `url(${eachProject?.screenShotOne})` }}></div>
              </figure>
            </div>
            <div className='card card-compact w-96 bg-base-100 shadow-xl h-96 border-4 border-primary'>
              <figure>
                <div
                  id='screen-details'
                  className='w-full'
                  style={{ backgroundImage: `url(${eachProject?.screenShotTwo})` }}
                ></div>
                <div id='base' className='' style={{ backgroundImage: `url(${eachProject?.screenShotTwo})` }}></div>
              </figure>
            </div>
            <div className='card card-compact w-96 bg-base-100 shadow-xl h-96 border-4 border-primary'>
              <figure>
                <div
                  id='screen-details'
                  className='w-full'
                  style={{ backgroundImage: `url(${eachProject?.screenShotThree})` }}
                ></div>
                <div id='base' className='' style={{ backgroundImage: `url(${eachProject?.screenShotThree})` }}></div>
              </figure>
            </div>
          </div>
          <div className='flex justify-around my-10'>
            <button className='btn btn-primary w-56'>
              <a href={eachProject?.preview} target='_blank' rel='noreferrer'>
                Preview
              </a>
            </button>
            <button className='btn btn-primary w-56'>
              <a href={eachProject?.clientCode} target='_blank' rel='noreferrer'>
                Client Code
              </a>
            </button>
            <button className='btn btn-primary w-56'>
              <a href={eachProject?.serverCode} target='_blank' rel='noreferrer'>
                Server Code
              </a>
            </button>
          </div>
          <div className='flex justify-between m-10 text-white text-lg'>
            <div className='mr-10'>
              <ul>
                <li className='list-disc my-4'>{eachProject?.featureOne}</li>
                <li className='list-disc my-4'>{eachProject?.featureTwo}</li>
                <li className='list-disc my-4'>{eachProject?.featureThree}</li>
                <li className='list-disc my-4'>{eachProject?.featureFour}</li>
              </ul>
            </div>
            <div className='ml-10'>
              <ul>
                <li className='list-disc my-4'>{eachProject?.featureFive}</li>
                <li className='list-disc my-4'>{eachProject?.technology}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
