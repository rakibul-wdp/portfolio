import Image from "next/image";
import Rakibul from "../public/images/Rakibul.jpg";

const About = () => {
  return (
    <section>
      <Image src={Rakibul} alt="Md. Rakibul Islam" />
    </section>
  );
};

export default About;
