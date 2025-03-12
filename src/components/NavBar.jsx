import React from "react";

// import icons
import { IconHome2, IconMenu2, IconX } from "@tabler/icons-react";

// import data
import { navLinks } from "../data";

// import react router
import { Link } from "react-router-dom";

// import MUI
import { Button } from "@mui/material";

// import components
import NavMobile from "./NavMobile";

// import GlobalContext
import { useGlobalContext } from "../context";

const NavBar = () => {
  // destructure Context
  const { setMenu, menu } = useGlobalContext();
  //   console.log(menu);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 w-full bg-white shadow-md py-4">
        <div className="container flex justify-between items-center ">
          {/* logo  */}
          <Link
            to={navLinks[0].path}
            className="md:flex items-end bg-primary text-white md:text-sm text-xs rounded-md p-[0.3rem] md:p-2 cursor-pointer"
          >
            <IconHome2 size={40} />
            <h2>Property Connect</h2>
          </Link>

          {/* nav links  */}
          <ul className="md:flex md:gap-4 hidden">
            {navLinks.map((nav) => (
              <Link
                to={nav.path}
                key={nav.id}
                className="text-xl hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-md"
              >
                {nav.text}
              </Link>
            ))}
          </ul>

          <NavMobile />

          {/* call to actions  */}
          <div className="md:flex md:gap-1 hidden">
            {/* <Link path="#hash">Sign In</Link>
            <Link path="#hash">Sign Up</Link> */}
            <Button variant="contained" href="#contained-buttons">
              Sign In
            </Button>
            <Button variant="outlined" href="#contained-buttons">
              Sign Up
            </Button>
          </div>

          {/* clos & menu bars  */}
          <div
            onClick={() => {
              setMenu(!menu);
            }}
            className="cursor-pointer md:hidden"
          >
            {menu ? <IconX size={40} /> : <IconMenu2 size={40} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
