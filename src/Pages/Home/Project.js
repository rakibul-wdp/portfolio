import React from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
  const { _id, name, screenShotOne, preview, featureOne } = project;
  const navigate = useNavigate();

  const navigateDetails = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <div className='card w-96 shadow-xl border-4 border-primary project-box-shadow'>
      <figure>
        <div id='screen' className='w-full' style={{ backgroundImage: `url(${screenShotOne})` }}></div>
        <div id='base' className='' style={{ backgroundImage: `url(${screenShotOne})` }}></div>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{featureOne}</p>
        <div className='flex items-center justify-between'>
          <div className='card-actions justify-start'>
            <button className='btn btn-primary'>
              <a href={preview} target='_blank' rel='noreferrer'>
                Preview
              </a>
            </button>
          </div>
          <div className='card-actions justify-end'>
            <button onClick={() => navigateDetails(_id)} className='btn btn-primary'>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
