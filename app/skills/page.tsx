import { experiences } from "@/constants/experiences";

const Page = () => {
  return (
    <div className="w-[85%]">
      {experiences.map((experience) => (
        <div
          className="flex flex-col mb-10 text-white p-5 border-[0.01px] rounded-sm border-gray-500"
          key={experience.id}
        >
          <h3>Programming Languages</h3>
          <ul className="mt-7 list-disc list-inside">
            {experience.descriptions.map((des) => (
              <li key={des.id}>{des.des}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Page;
