"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-5 text-2xl font-semibold text-[#5ff3d1] mb-14">
      <div className="lg:hidden flex items-center justify-center gap-5">
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
      </div>

      <div className="hidden lg:flex items-center justify-center gap-10">
        {navLinks.slice(1).map((navLink) => {
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
      </div>
    </nav>
  );
};

export default Navbar;
