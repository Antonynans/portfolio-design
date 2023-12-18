import { useState } from "react";

import { FaBars, FaDownload, FaWifi } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#273b1a] to-[#3b4c26]">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3">
        <div className="lg:w-1/4 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center">
          <a
            href="#"
            to="/"
            className="font-medium tracking-wider transition-colors cursor-pointer"
          >
            <button className="flex items-center gap-x-4 text-white">
              <FaWifi className="text-2xl" />
              <p className="text-2xl">wonkass</p>
            </button>
          </a>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-xl text-white leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={
            "lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-3/4" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
            <div className="flex flex-col lg:flex-row items-center justify-between lg:w-2/3">
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Services</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Portfolio</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">About</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Contact Me</a>
              </li>
            </div>

            <div className="lg:w-1/3 flex items-center justify-end">
              <button className="rounded-full px-6 py-4 flex items-center text-white gap-2 border border-[#627f4e] hover:text-[#627f4e] hover:bg-white">
                <p className="">Download CV</p>
                <FaDownload />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
