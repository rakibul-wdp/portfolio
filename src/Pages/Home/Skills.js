import React from 'react';
import './Skills.css';
import skills from '../../assets/images/skills.png';

const Skills = () => {
  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-24 items-center'>
      <div className='avatar'>
        <div className='w-96 mask mask-squircle'>
          <img src={skills} alt='' />
        </div>
      </div>
      <div>
        <h3 className='text-xl text-black font-bold'>React.js 85%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '85%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>JavaScript 85%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '85%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>Tailwind CSS 80%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '80%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>Bootstrap 90%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '90%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>HTML/CSS 85%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '85%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>Node.js 70%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '70%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>Express.js 80%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '80%' }}></span>
        </div>
        <h3 className='text-xl text-black font-bold'>MongoDB 60%</h3>
        <div className='progress-animated max-w-xl mb-4 mt-1'>
          <span className='progress-bar-animated' style={{ width: '60%' }}></span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
