import React from "react";
import logo from "../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="border-bottom-2 sticky top-0 bg-[#070416] z-50">
      <div className="max-w-6xl m-auto flex items-center justify-between py-5 px-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navLinks.map(({ id, title, link }) => (
              <Link
                activeClass="nav-active"
                to={link}
                key={id}
                spy={true}
                smooth={true}
                offset={-90}
                duration={300}
              >
                {title}
              </Link>
            ))}
            <button className="px-6 py-2 border-[0.5px] border-gray-700 rounded-full hover:bg-violet-600 transition">
              Join us
            </button>
          </ul>
        </div>
        <div className="md:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
