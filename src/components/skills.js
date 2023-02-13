import React from "react";

const skills = () => {
  return (
    <div
      id="skills"
      className="w-[80%] lg:h-[100vh] m-auto text-white text-[24px] mt-[80px] lg:mt-[0]"
    >
      <h2 className="text-[#5ff3d1] text-[30px] sm:text-[44px] mb-[0] md:mb-[10px]">
        <span className="font-bold animation-pipe">||</span> &nbsp;Skills
      </h2>
      <div className="flex flex-col w-[100%] mt-[50px]">
        <div class="block p-6 rounded-lg shadow-lg border-4 border-[#5ff3d1]">
          <h5 class="text-xl leading-tight font-medium mb-2">
            What keeps me going?
          </h5>
          <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light">
            <li>learning, Nothing is impossible</li>
            <li>Failures are inevitable</li>
            <li>listen keenly to smarter people opinions</li>
            <li>learn from mistakes</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-[50px]">
          <div class="block p-6 rounded-lg shadow-lg w-full md:w-[30%] border-4 border-[#5ff3d1]">
            <h5 class="text-xl leading-tight font-medium mb-2">
              Proficient Programming Languages
            </h5>
            <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div class="block p-6 rounded-lg shadow-lg w-full md:w-[30%] border-4 border-[#5ff3d1] my-[50px] md:my-[0px]">
            <h5 class="text-xl leading-tight font-medium mb-2">
              Frameworks and libraries
            </h5>
            <div className="flex">
              <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light">
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Next</li>
                <li>Node</li>
              </ul>
              <ul className="flex flex-col list-disc pl-[100px] text-[18px] font-light">
                <li>TailwindCSS</li>
                <li>MUI</li>
                <li>Bootstrap</li>
                <li>ChakraUI</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
          <div class="block p-6 rounded-lg shadow-lg w-full md:w-[30%] border-4 border-[#5ff3d1]">
            <h5 class="text-xl leading-tight font-medium mb-2">
              Databases, Tools and Platform
            </h5>
            <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light">
              <li>MongoDB</li>
              <li>NoSQL</li>
              <li>Git</li>
              <li>Netlify</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
