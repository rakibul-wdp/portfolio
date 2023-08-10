import { experiences } from "@/constants/experiences";
import Image from "next/image";
import { TiArrowUpThick } from "react-icons/ti";

export default function Home() {
  return (
    <main>
      {experiences.map((experience) => (
        <div
          className="flex flex-col mb-14 text-white px-5"
          key={experience.id}
        >
          <div className="flex items-center">
            <Image
              className="w-[70px] rounded-sm"
              src={experience.avatar}
              alt="company logo"
            />
            <div className="w-full ml-4 flex items-center justify-between">
              <div className="h-[70px] flex flex-col justify-between">
                <h1 className="text-2xl">
                  {experience.role}{" "}
                  <span className="italic text-sm">
                    {experience.designation}
                  </span>
                </h1>
                <h1 className="text-2xl">{experience.companyName}</h1>
              </div>
              <div className="h-[70px] flex flex-col items-center justify-between">
                <p>{experience.end}</p>
                <TiArrowUpThick />
                <p>{experience.start}</p>
              </div>
            </div>
          </div>
          <ul className="mt-5 list-disc list-inside">
            {experience.descriptions.map((des) => (
              <li key={des.id}>{des.des}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
