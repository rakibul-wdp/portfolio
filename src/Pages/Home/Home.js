import React from 'react';
import AboutMe from './AboutMe';
import HomeBanner from './HomeBanner';
import './Home.css';
import Skills from './Skills';

const Home = () => {
  return (
    <div className='px-80'>
      <HomeBanner />
      <hr className='colored'></hr>
      <AboutMe />
      <hr className='colored'></hr>
      <Skills />
    </div>
  );
};

export default Home;
