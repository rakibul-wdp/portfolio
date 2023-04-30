import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      {navLinks.map((navLink) => (
        <Link href={navLink.route}>{navLink.label}</Link>
      ))}
    </nav>
  );
};

export default Navbar;
