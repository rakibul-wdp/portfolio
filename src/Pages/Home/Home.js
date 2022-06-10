import React from 'react';
import AboutMe from './AboutMe';
import HomeBanner from './HomeBanner';
import './Home.css';

const Home = () => {
  return (
    <div className='px-80'>
      <HomeBanner />
      <hr className='colored'></hr>
      <AboutMe />
    </div>
  );
};

export default Home;
