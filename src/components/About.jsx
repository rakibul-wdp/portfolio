import Rakibul from "../assets/Rakibul.jpg";

const About = () => {
  return (
    <div className="col-span-3 mt-36">
      <img
        className="w-28 h-28 rounded-full mx-auto"
        src={Rakibul}
        alt="Md. Rakibul Islam"
      />
      <h1 className="text-3xl font-bold my-3 text-[#5ff3d1">
        Md. Rakibul Islam
      </h1>
      <div className="text-center">
        <h2 className="text-2xl text-start text-[#5ff3d1]">
          Full Stack Developer
        </h2>
        <h2 className="text-2xl text-start text-[#5ff3d1]">Programmer and</h2>
        <h2 className="text-2xl text-start text-[#5ff3d1]">Problem Solver</h2>
      </div>
      <p className="mt-5 text-justify">
        Myself Md. Rakibul Islam. I like to write and see code. I am a
        full-stack developer with MERN stack technologies. I have four
        internship experiences as a full-stack developer. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Pariatur odit, est quas, eum, maiores
        quod esse aut officia expedita placeat tempora delectus tempore tenetur
        corporis animi! Odio sequi laboriosam cumque.
      </p>
    </div>
  );
};

export default About;
