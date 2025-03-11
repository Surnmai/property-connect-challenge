import React from "react";

// import react router dom
import { Link } from "react-router-dom";

import { navLinks } from "../data";

// import GlobalContext
import { useGlobalContext } from "../context";

const NavMobile = () => {
  // destructure Context
  const { menu } = useGlobalContext();
  return (
    <>
      {/* nav links  */}
      <ul
        className={`md:hidden container flex flex-col bg-primary absolute top-[6.1rem] w-full h-screen text-white text-lg font-bold z-50 pt-4 transition-all duration-500 ${
          menu ? "left-0" : "-left-[50rem]"
        }`}
      >
        {navLinks.map((nav) => (
          <Link
            to={nav.path}
            key={nav.id}
            className="p-2 hover:bg-white hover:text-black transition-all duration-500"
          >
            {nav.text}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default NavMobile;
