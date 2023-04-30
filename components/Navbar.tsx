"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <nav className="flex items-center justify-around mt-5 text-2xl font-semibold text-[#5ff3d1] mb-14">
        {navLinks.map((navLink) => {
          const isActive = pathname === navLink.route;

          return (
            <Link
              className={
                isActive ? "italic underline decoration-[#5ff3d1]" : ""
              }
              href={navLink.route}
              key={navLink.id}
            >
              {navLink.label}
            </Link>
          );
        })}
      </nav>
    </Container>
  );
};

export default Navbar;
