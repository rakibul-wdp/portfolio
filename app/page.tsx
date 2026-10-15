import { experiences } from "@/constants/experiences";
import Image from "next/image";
import Link from "next/link";
import { TiArrowUpThick } from "react-icons/ti";

export default function Home() {
  return (
    <div>
      {experiences.map((experience) => (
        <div
          className="flex flex-col mb-10 text-white p-5 border-[0.01px] rounded-sm border-gray-500"
          key={experience.id}
        >
          <div className="flex items-center">
            <Image
              className="h-[70px] w-[70px] rounded-sm object-contain"
              src={experience.avatar}
              alt={`${experience.companyName} logo`}
            />
            <div className="w-full ml-4 flex items-center justify-between">
              <div className="h-[70px] flex flex-col justify-between">
                <h1 className="text-2xl">
                  {experience.role}{" "}
                  <span className="italic text-sm">
                    {experience.designation}
                  </span>
                </h1>
                <h1 className="text-xl">{experience.companyName}</h1>
              </div>
              <div className="h-[70px] flex flex-col items-center justify-between">
                <p>{experience.end}</p>
                <TiArrowUpThick />
                <p>{experience.start}</p>
              </div>
            </div>
          </div>
          <ul className="mt-7 pl-4 list-disc">
            {experience.descriptions.map((des) => (
              <li key={des.id}>{des.des}</li>
            ))}
          </ul>
          {experience.links && (
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-400">Projects:</span>
              {experience.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-[#5ff3d1]/60 px-2.5 py-1 text-[#5ff3d1] transition-colors hover:bg-[#5ff3d1] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ff3d1]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
