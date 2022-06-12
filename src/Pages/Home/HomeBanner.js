import React from 'react';
import './HomeBanner.css';
import rakibulOne from '../../assets/images/rakibul-1.png';

const HomeBanner = () => {
  return (
    <>
      <div className='banner-background'></div>
      <div className='banner-background bg-two'></div>
      <div className='banner-background bg-three'></div>
      <div className='banner-background-content'>
        <div className='hero min-h-[70vh]'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <img src={rakibulOne} className='max-w-sm rounded-lg shadow-2xl banner-image-animation' alt='' />
            <div>
              <h1 className='text-5xl font-bold'>I'm Md. Rakibul Islam</h1>
              <h2 className='text-3xl font-bold'>Full Stack Web Developer</h2>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ullam a tempore esse magnam laudantium rem sint. Ratione nulla enim deserunt culpa odit, sequi natus,
                assumenda ducimus, adipisci non cum excepturi.
              </p>
              <button className='btn btn-primary'>About Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
