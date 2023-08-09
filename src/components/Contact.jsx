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
    <div className="col-span-3 mt-36 text-start">
      <div className="flex items-center justify-between font-bold px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <RxResume className="mr-3 text-[#5ff3d1]" />
          <span>rakibul-resume</span>
        </div>
        <FiExternalLink className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between my-2 px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <HiOutlineMail className="mr-3 text-[#5ff3d1]" />
          <span>rakibul.wdp@gmail.com</span>
        </div>
        <MdContentCopy className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <SlPhone className="mr-3 text-[#5ff3d1]" />
          <span>+8801580530145</span>
        </div>
        <MdContentCopy className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between my-2 px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <AiOutlineGithub className="mr-3 text-[#5ff3d1]" />
          <span>github/rakibul-wdp</span>
        </div>
        <FiExternalLink className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <SiLeetcode className="mr-3 text-[#5ff3d1]" />
          <span>leetcode/rakibul-wdp</span>
        </div>
        <FiExternalLink className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between my-2 px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <AiFillLinkedin className="mr-3 text-[#5ff3d1]" />
          <span>linkedin/rakibul-wdp</span>
        </div>
        <FiExternalLink className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <BsTwitter className="mr-3 text-[#5ff3d1]" />
          <span>twitter/rakibul_wdp</span>
        </div>
        <FiExternalLink className="text-[#5ff3d1]" />
      </div>
      <div className="flex items-center justify-between mt-2 px-2 py-1 border-2 border-[#5ff3d1] rounded-sm">
        <div className="flex items-center justify-between">
          <FaFacebookSquare className="mr-3 text-[#5ff3d1]" />
          <span>facebook/rakibu.wdp</span>
        </div>
        <FiExternalLink className="text-[#5ff3d1]" />
      </div>
    </div>
  );
};

export default Contact;
