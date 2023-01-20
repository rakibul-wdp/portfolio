import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(!isVisible);
  }, 1000);

  return (
    <div className="relative w-[100vw]">
      <div className="flex justify-center mt-[40px]">
        <ul className="list-none flex flex-row text-white text-[16px] md:text-[24px]">
          <li className="mx-[10px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out">
            <a href="#about">
              <span className="font-bold animation-pipe">||</span>
              &nbsp; About Me
            </a>
          </li>
          <li className="mx-[10px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out ">
            <a href="#skills">
              <span className="font-bold animation-pipe">||</span>&nbsp; Skills
            </a>
          </li>
          <li className="mx-[10px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out ">
            <a href="#timeline">
              <span className="font-bold animation-pipe">||</span>&nbsp;
              Timeline
            </a>
          </li>
        </ul>
      </div>
      <a
        className="absolute right-[55px] top-[50%] translate-y-[-50%] px-[18px] py-[6px] text-[#5ff3d1] hover:text-white transition duration-300 ease-in-out border-2 rounded hover:border-[#5ff3d1] hidden lg:block animation-border"
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