import React from 'react';
import './Skills.css';
import skills from '../../assets/images/skills.png';

const Skills = () => {
  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-16 items-center'>
      <div className='avatar'>
        <div className='w-96 mask mask-squircle'>
          <img src={skills} alt='' />
        </div>
      </div>
      <div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
        <div className='progress-animated max-w-xl my-5'>
          <span className='progress-bar-animated' style={{ width: '75%' }}></span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
