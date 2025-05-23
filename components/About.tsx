import Image from "next/image";
import Rakibul from "../public/images/md-rakibul-wdp.jpg";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center sticky top-28 border-[0.01px] rounded-sm border-gray-500 p-6">
      <Image
        className="w-60 h-60 rounded-full"
        src={Rakibul}
        alt="Md. Rakibul Islam"
      />
      <div className="text-center mt-3">
        <h1 className="text-3xl font-bold mb-1">Md. Rakibul Islam</h1>
        <p className="text-lg font-medium">
          Full Stack Developer, Programmer and Problem Solver
        </p>
      </div>

      <p className="my-5 text-justify">
        I like to write and see code. Also, I love to teach (YouTube), what I
        learn. I'm a full-stack developer. I have 3 internships and freelancing
        experience (1 year+) as a full-stack developer.
      </p>

      <Contact />
    </section>
  );
};

export default About;
