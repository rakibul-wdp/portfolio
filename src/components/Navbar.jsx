import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-around mt-5 text-2xl font-semibold text-[#5ff3d1] mb-14'>
      <NavLink to="/" className={({ isActive }) => isActive ? "italic underline decoration-[#5ff3d1]" : ""}>Experiences</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "italic underline decoration-[#5ff3d1]" : ""}>Projects</NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? "italic underline decoration-[#5ff3d1]" : ""}>Skills</NavLink>
      <NavLink to="/timeline" className={({ isActive }) => isActive ? "italic underline decoration-[#5ff3d1]" : ""}>Timeline</NavLink>
    </div>
  )
}

export default Navbar;