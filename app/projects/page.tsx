import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { TiArrowUpThick } from "react-icons/ti";

const Projects = () => {
  return (
    <main>
      {projects.map((project) => (
        <div
          className="flex flex-col mb-10 text-white border-[0.01px] rounded-sm border-gray-500"
          key={project.id}
        >
          <div className="">
            <Image
              className="border-b-[0.01px] rounded-b-sm border-gray-500"
              src={project.img}
              alt="project image"
            />
          </div>
          <div className="mt-5 px-5 flex items-center justify-between">
            <div className="h-[60px] flex flex-col justify-between">
              <h1 className="text-2xl">{project.projectName}</h1>
              <h3 className="text-xl">{project.projectStack}</h3>
            </div>
            <div className="h-[60px] flex flex-col items-start justify-between">
              <Link
                className="flex items-center justify-center gap-1"
                target="_blank"
                href={"https://github.com/rakibul-wdp"}
              >
                <span className="underline underline-offset-2">Preview</span>{" "}
                <FiExternalLink />
              </Link>
              <Link
                className="flex items-center justify-center gap-1"
                target="_blank"
                href={"https://github.com/rakibul-wdp"}
              >
                <span className="underline underline-offset-2">Code</span>{" "}
                <FiExternalLink />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p>{project.end}</p>
              <TiArrowUpThick />
              <p>{project.start}</p>
            </div>
          </div>
          <ul className="mt-5 list-disc list-inside p-5">
            {project.descriptions.map((des) => (
              <li key={des.id}>{des.des}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default Projects;
