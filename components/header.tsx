import React from "react";
import Link from "next/link";
import { DownloadIcon } from "@/assets/svg";

const Header = () => {
  return (
    <header className="bg-yellow">
      <nav className="container flex justify-between items-center py-3">
        <Link href="#about" className="nav-link">
          About
        </Link>
        <Link href="#exprience" className="nav-link">
          Experiences
        </Link>
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
        <Link
          href="#"
          download="/cv.pdf"
          className="nav-link flex items-center"
        >
          <DownloadIcon className="w-4 h-4 fill-blue" />
          Download cv
        </Link>
      </nav>
    </header>
  );
};

export default Header;
