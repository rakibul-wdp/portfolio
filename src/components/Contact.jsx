import React from 'react';
import { RxResume } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='col-span-3 mt-36 text-start ml-5'>
      <div className='flex items-center justify-between text-xl font-bold px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <RxResume />
        rakibul-resume
        <FiExternalLink />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <HiOutlineMail />
        Email
        <MdContentCopy />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <SlPhone />
        Phone No
        <MdContentCopy />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <AiOutlineGithub />
        GitHub
        <FiExternalLink />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <SiLeetcode />
        LeetCode
        <FiExternalLink />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <AiFillLinkedin />
        LinkedIn
        <FiExternalLink />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <BsTwitter />
        Twitter
        <FiExternalLink />
      </div>
      <div className='flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm'>
        <FaFacebookSquare />
        Facebook
        <FiExternalLink />
      </div>
    </div>
  )
}

export default Contact;