import React from "react";
import logo from "../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { navLinks } from "../constants";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setOpen(!isOpen);
  };

  return (
    <nav className="border-bottom-2 fixed top-0 left-0 w-full bg-[#070416] z-50">
      <div className="max-w-6xl m-auto flex items-center justify-between py-5 px-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navLinks.map(({ id, title, link }) => (
              <Link
                className="cursor-pointer"
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
        <div className="md:hidden" onClick={() => setActive(!active)}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {active && (
          <div className="fixed top-20 left-0 bottom-0 right-0 bg-violet-800 z-50">
            <ul className="flex flex-col items-center justify-center space-y-6 h-full text-2xl">
              {navLinks.map(({ id, title, link }) => (
                <Link
                  className="cursor-pointer"
                  to={link}
                  key={id}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={300}
                  onClick={handleClick}
                >
                  {title}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
