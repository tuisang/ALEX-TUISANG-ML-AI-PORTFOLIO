import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      data: "home",
    },
    {
      id: 2,
      data: "about",
    },
    {
      id: 3,
      data: "portfolio",
    },

    {
      id: 4,
      data: "experience",
    },

    {
      id: 5,
      data: "contact",
    },
  ];

  return (
    <div className="flex justify-between px-4 items-center text-white  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full h-20 fixed z-50">
      <div className="text-3xl font-bold ml-2">MISHU</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="text-1.5xl px-4 capitalize cursor-pointer text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link.data} smooth duration={500}>{link.data}</Link>

          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-2xl py-4 capitalize cursor-pointer text-gray-500 hover:scale-105 duration-200"
            >
              <Link onClick={()=>setNav(!nav)} to={link.data} smooth duration={500}>{link.data}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
