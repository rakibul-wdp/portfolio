import IGDrones from "../assets/ig-drones.jpeg";
import Navbar from "../components/Navbar";

const experiences = [
  {
    id: 1,
    avatar: IGDrones,
    companyName: "IG Drones",
    role: "React Developer",
    designation: "Internship",
    timePeriod: "04/2023-Current",
    descriptions: [
      {
        id: 1,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet. Vitae nostrum accusantium doloremque rerum explicabo assumenda soluta et minima maiores. Ipsum sunt blanditiis maxime distinctio quam alias sapiente ullam velit harum!",
      },
      {
        id: 2,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: 2,
    avatar: IGDrones,
    companyName: "Banao Technologies",
    role: "Full Stack Developer",
    designation: "Internship",
    timePeriod: "04/2023-Current",
    descriptions: [
      {
        id: 1,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: 3,
    avatar: IGDrones,
    companyName: "IG Drones",
    role: "React Developer",
    designation: "Internship",
    timePeriod: "04/2023-Current",
    descriptions: [
      {
        id: 1,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: 4,
    avatar: IGDrones,
    companyName: "MetaStart",
    role: "Full Stack Developer",
    designation: "Internship",
    timePeriod: "04/2023-Current",
    descriptions: [
      {
        id: 1,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

const Experiences = () => {
  return (
    <div className="col-span-6 lg:mx-3 xl:mx-5 2xl:mx-7">
      <Navbar />

      {experiences.map((experience) => (
        <div className="text-start px-5" key={experience.id}>
          <div className="flex items-center">
            <img
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
    </div>
  );
};

export default Experiences;
