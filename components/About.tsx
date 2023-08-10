import Image from "next/image";
import Rakibul from "../public/images/Rakibul.jpg";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center border-[0.01px] rounded-sm border-gray-500 p-8">
      <Image
        className="w-32 h-32 rounded-full"
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
        I'm Md. Rakibul Islam. I like to write and see code. I'm a full-stack
        developer. I have four internship and freelancing experiences as a
        full-stack developer.
      </p>

      <Contact />
    </section>
  );
};

export default About;
