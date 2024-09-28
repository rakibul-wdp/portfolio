import { skills } from "@/constants/skills";

const Skills = () => {
  return (
    <div>
      {skills.map((skill) => (
        <div
          className="flex flex-col mb-10 text-white p-5 border-[0.01px] rounded-sm border-gray-500"
          key={skill.id}
        >
          <h3 className="text-2xl">{skill.title}</h3>
          <div className="px-14 flex justify-start gap-14">
            <ul className="mt-7 list-disc list-inside">
              {skill.list[0]
                .split(", ")
                .slice(0, 6)
                .map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
            </ul>
            <ul className="mt-7 pl-10 list-disc list-inside">
              {skill.list[0]
                .split(", ")
                .slice(6)
                .map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
