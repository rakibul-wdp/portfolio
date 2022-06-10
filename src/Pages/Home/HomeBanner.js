import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <>
      <div class='banner-background'></div>
      <div class='banner-background bg-two'></div>
      <div class='banner-background bg-three'></div>
      <div class='banner-background-content'>
        <div class='hero min-h-[75vh]'>
          <div class='hero-content flex-col lg:flex-row-reverse'>
            <img
              src='https://api.lorem.space/image/movie?w=260&h=400'
              class='max-w-sm rounded-lg shadow-2xl banner-image-animation'
              alt=''
            />
            <div>
              <h1 class='text-5xl font-bold'>Box Office News!</h1>
              <p class='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button class='btn btn-primary'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
