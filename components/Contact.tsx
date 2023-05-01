import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import { RxResume } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { SlPhone } from "react-icons/sl";

const contacts = [
  {
    id: 1,
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
    label: "github/rakibul-wdp",
    icon: <AiOutlineGithub className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 5,
    label: "leetcode/rakibul-wdp",
    icon: <SiLeetcode className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 6,
    label: "linkedin/rakibul-wdp",
    icon: <AiFillLinkedin className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 7,
    label: "twitter/rakibul_wdp",
    icon: <BsTwitter className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
  {
    id: 8,
    label: "facebook/rakibu.wdp",
    icon: <FaFacebookSquare className="mr-3 text-[#5ff3d1]" />,
    subIcon: <FiExternalLink className="text-[#5ff3d1]" />,
  },
];

const Contact = () => {
  return (
    <div className="text-start">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`flex items-center justify-between px-2 py-1 border-2 border-[#5ff3d1] rounded-sm ${
            contact.id % 2 === 0 ? "my-2" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            {contact.icon}
            <span>{contact.label}</span>
          </div>
          {contact.subIcon}
        </div>
      ))}
    </div>
  );
};

export default Contact;
