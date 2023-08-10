import { experiences } from "@/constants/experiences";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {experiences.map((experience) => (
        <div className="text-start text-white px-5" key={experience.id}>
          <div className="flex items-center">
            <Image
              className="w-20 h-20 rounded-3xl"
              src={experience.avatar}
              alt="company logo"
            />
            <div className="ml-4">
              <h1 className="text-2xl">{experience.companyName}</h1>
              <h2 className="text-2xl">
                {experience.role}{" "}
                <span className="italic text-lg">{experience.designation}</span>
              </h2>
            </div>
          </div>
          <ul>
            {experience.descriptions.map((des) => (
              <li key={des.id}>{des.des}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
