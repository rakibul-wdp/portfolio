import Image from "next/image";
import Rakibul from "../public/images/Rakibul.jpg";

const About = () => {
  return (
    <section>
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

      <p className="mt-5 text-justify">
        Myself Md. Rakibul Islam. I like to write and see code. I am a
        full-stack developer with MERN stack technologies. I have four
        internship experiences as a full-stack developer. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Pariatur odit, est quas, eum, maiores
        quod esse aut officia expedita placeat tempora delectus tempore tenetur
        corporis animi! Odio sequi laboriosam cumque.
      </p>
    </section>
  );
};

export default About;
