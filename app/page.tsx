import { experiences } from "@/constants/experiences";
import Image from "next/image";

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
              className="w-20 h-20 rounded-sm"
              src={experience.avatar}
              alt="company logo"
            />
            <div className="ml-4">
              <h1 className="text-2xl">{experience.companyName}</h1>
              <h2 className="text-2xl">
                {experience.role}{" "}
                <span className="italic text-sm">{experience.designation}</span>
              </h2>
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
