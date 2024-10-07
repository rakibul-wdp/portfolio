"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import { RxResume } from "react-icons/rx";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { SlPhone } from "react-icons/sl";
import { TbBrandFiverr } from "react-icons/tb";

const contacts = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1l-L8IO0F3ExL4EbyDMYFVZlku5840MZz/view?usp=sharing",
    label: "rakibul-resume",
    icon: <RxResume className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 2,
    label: "rakibul.wdp@gmail.com",
    icon: <HiOutlineMail className="mr-3 text-[#5ff3d1]" />,
    subIcon: <MdContentCopy className="text-[#5ff3d1]" />,
  },
  {
    id: 3,
    label: "+8801580530145",
    icon: <SlPhone className="mr-3 text-[#5ff3d1]" />,
    subIcon: <MdContentCopy className="text-[#5ff3d1]" />,
  },
  {
    id: 4,
    link: "https://github.com/rakibul-wdp",
    label: "github/rakibul-wdp",
    icon: <AiOutlineGithub className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 5,
    link: "https://codeforces.com/profile/rakibul-wdp",
    label: "codeforces/rakibul-wdp",
    icon: <SiCodeforces className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 6,
    link: "https://leetcode.com/rakibul-wdp",
    label: "leetcode/rakibul-wdp",
    icon: <SiLeetcode className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 7,
    link: "https://www.fiverr.com/rakibul6631",
    label: "fiverr/rakibul6631",
    icon: <TbBrandFiverr className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 8,
    link: "https://www.linkedin.com/in/rakibul-wdp",
    label: "linkedin/rakibul-wdp",
    icon: <AiFillLinkedin className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 9,
    link: "https://www.youtube.com/@rakibul-wdp",
    label: "youtube/rakibul-wdp",
    icon: <FaYoutube className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 10,
    link: "https://x.com/rakibul_wdp",
    label: "twitter/rakibul_wdp",
    icon: <BsTwitter className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 11,
    link: "https://www.facebook.com/rakibul.wdp",
    label: "facebook/rakibul.wdp",
    icon: <FaFacebookSquare className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
];

const Contact = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyClipboard = (label: any) => {
    navigator.clipboard
      .writeText(label)
      .then(() => {
        setTooltipVisible(true);
        setTimeout(() => {
          setTooltipVisible(false);
        }, 1500);
      })
      .catch((err) => {
        console.log("It's a link and open it in a new tab");
      });
  };

  return (
    <div className="w-full grid grid-cols-2 gap-3.5 items-center justify-center">
      {contacts.map((contact) => (
        <Link
          target={contact.link ? "_blank" : ""}
          href={contact.link ? contact.link : ""}
          key={contact.id}
          className={`flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm ${
            contact.id % 2 === 0 ? "" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            {contact.icon}
            <span>{contact.label}</span>
          </div>
          {contact.link ? (
            <div>{contact.subIcon}</div>
          ) : (
            <div
              onClick={() => copyClipboard(contact.label)}
              // className="relative"
            >
              {contact.subIcon}
              {tooltipVisible && (
                <span className="absolute p-1 rounded-xl top-[19rem] left-[21.7rem] bg-gradient-to-r from-purple-600 to-blue-500 text-white border border-purple-500 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out text-sm">
                  Copied
                </span>
              )}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Contact;
