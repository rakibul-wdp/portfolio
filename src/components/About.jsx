import React from 'react';
import Rakibul from "../assets/Rakibul.jpg";

const About = () => {
  return (
    <div className='col-span-3 mt-36'>
      <img className='w-28 h-28 rounded-full mx-auto' src={Rakibul} alt="Md. Rakibul Islam" />
      <h1 className='text-3xl font-bold my-3 AnimatedGradientText'>Md. Rakibul Islam</h1>
      <h2 className='text-2xl text-[#5ff3d1] text-start ml-8'>Full Stack Developer</h2>
      <h2 className='text-2xl text-[#5ff3d1] my-1 text-start ml-16'>Programmer</h2>
      <h2 className='text-2xl text-[#5ff3d1] text-start ml-24'>Problem Solver</h2>
      <p className='mt-5'>Myself Md. Rakibul Islam. I like to write and see code. I'm a full-stack developer with MERN stack technologies. I have four internship experiences as a full-stack developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit, est quas, eum, maiores quod esse aut officia expedita placeat tempora delectus tempore tenetur corporis animi! Odio sequi laboriosam cumque.</p>
    </div>
  )
}

export default About;