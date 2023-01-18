import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume/Md_Rakibul_Islam_Web_Developer_Resume.pdf';
import './Navbar.css';

const Navbar = () => {
  const menuItems = (
    <>
      <li className='text-md font-bold'>
        <Link to='/'>Home</Link>
      </li>
      <li className='text-md font-bold'>
        <Link to='/'>Projects</Link>
      </li>
      <li className='text-md font-bold'>
        <Link to='/'>Blogs</Link>
      </li>
      <li className='text-md font-bold'>
        <Link to='/'>Contact Me</Link>
      </li>
      <li className='text-md font-bold'>
        <Link to='/'>About Me</Link>
      </li>
    </>
  );
  return (
    <div className='navbar bg-neutral text-neutral-content px-60'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>
          <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            {menuItems}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-2xl navbar-heading-name'>
          Md. Rakibul Islam
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
      </div>
      <div className='navbar-end'>
        <a href={resume} download className='btn btn-sm btn-primary'>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
