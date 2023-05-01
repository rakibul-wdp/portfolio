import Image from "next/image";
import Rakibul from "../public/images/Rakibul.jpg";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="text-white">
      <Image
        className="w-28 h-28 rounded-full"
        src={Rakibul}
        alt="Md. Rakibul Islam"
      />
      <div>
        <h1>Md. Rakibul Islam</h1>
        <h2>Full Stack Developer</h2>
        <h2>Programmer and</h2>
        <h2>Problem Solver</h2>
      </div>

      <p className="mt-5">
        I'm Md. Rakibul Islam. I like to write and see code. I'm a full-stack
        developer. I have four internship and freelancing experiences as a
        full-stack developer.
      </p>

      <Contact />
    </section>
  );
};

export default About;
