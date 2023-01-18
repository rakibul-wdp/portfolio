import React from 'react';

const Navbar = () => {
  return (
    <div className="relative w-[100vw]">
      <div className="flex justify-center mt-[40px]">
        <ul className="list-none flex flex-row text-white text-[16px] md:text-[24px]">
          <li className="mx-[10px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out">
            <a href="#about">\\&nbsp; About Me</a>
          </li>
          <li className="mx-[10px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out ">
            <a href="#skills">\\&nbsp; Skills</a>
          </li>
          <li className="mx-[10px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out ">
            <a href="#timeline">\\&nbsp; Timeline</a>
          </li>
        </ul>
      </div>
      <a
        className="absolute right-[55px] top-[50%] translate-y-[-50%] px-[18px] py-[6px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out border-2 rounded hover:border-[#5ff3d1] hidden lg:block"
        href="https://drive.google.com/file/d/1WfWRhfxRW6lF_4sn2R-ikxTFAwwPK6CE/view?usp=sharing"
        target={"_blank"}
        rel={"noreferrer"}
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;