import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="w-[80%] xl:h-[100vh] m-auto text-white text-[24px]"
    >
      <h2 className="text-[#5ff3d1] text-[30px] sm:text-[44px] mb-[0] md:mb-[10px]">
        \\ &nbsp;About Me
      </h2>
      <div className="flex flex-col md:flex-row pt-[20px]">
        <div className="w-full md:w-[30%] pt-[20px] hover:scale-105 transition duration-300 ease-in-out flex md:block justify-center">
          <img
            src={Image}
            className="w-[300px] border-4 border-[#5ff3d1] rounded-xl"
            alt="hero"
          />
        </div>
        <div className="w-full md:w-[70%] pt-[30px] md:pt-[15px] md:pl-[20px]">
          <p className="text-[18px] md:text-[22px] lg:text-[24px] font-['Arial']">
            My name is Siddesh and{" "}
            <span className="text-[#5ff3d1]">
              I love exploring cool tech,&nbsp;
            </span>
            trying to play with it and create some cool shit. I started into
            Programming only when I realised I can basically automate my
            routines. So I started writing scripts to complete my work and
            slowly started to{" "}
            <span className="text-[#5ff3d1]">monetise&nbsp;</span>
            it. I started freelancing Web development and that's when I got
            introduced into Crypto. The web3 tech is truly amazing and the more
            I learn about it, the more becomes my willingness to contribute back
            to the space.
            <br></br>
            <br></br>I write long tech stories{" "}
            {<span className="text-[#5ff3d1]">(sometimes JPEG stories)</span>}{" "}
            and have contributed to a variety of web3 projects. I love doing
            events and also lead{" "}
            <a className="text-[#5ff3d1]" href="https://coindcx.com/">
              CoinDCX
            </a>{" "}
            <a
              className="text-[#5ff3d1]"
              href="https://chat.whatsapp.com/E3ieiVcmspJ4z9OMPZfalt"
            >
              Local Chapter
            </a>{" "}
            in my city!
            <br></br>
            <br></br>
            <span className="text-[#5ff3d1]">
              I do bounties occasionally&nbsp;
            </span>
            {`(Who doesn't like some extra cash!)`}
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;