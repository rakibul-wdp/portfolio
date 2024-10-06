import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const YouTube = () => {
  return (
    <div className="text-white p-5 border-[0.01px] rounded-sm border-gray-500">
      <p>
        <strong>I love sharing what I learn,</strong> so I created a YouTube
        channel where I teach HTML, CSS, JavaScript, and other technologies.
      </p>
      <div className="mt-5 flex items-center justify-start gap-2">
        <p>Checkout my YouTube Channel 👉</p>
        <Link
          href="https://www.youtube.com/@rakibul-wdp"
          className="bg-[#5ff3d1] px-2 rounded-lg flex items-center justify-center gap-1"
        >
          <span className="bg-[#5ff3d1] text-black">youtube/@rakibul-wdp</span>
          <FiExternalLink className="bg-[#5ff3d1] text-black" />
        </Link>
      </div>
    </div>
  );
};

export default YouTube;
