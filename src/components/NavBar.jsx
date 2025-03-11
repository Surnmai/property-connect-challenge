import React, { useState } from "react";

// import icons
import { IconHome2, IconMenu2, IconX } from "@tabler/icons-react";

// import data
import { navLinks } from "../data";

// import react router
import { Link } from "react-router-dom";

// import MUI
import { Button } from "@mui/material";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  //   console.log(menu);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 w-full bg-white shadow-md py-4">
        <div className="container flex justify-between items-center ">
          {/* logo  */}
          <div className="md:flex items-end bg-primary text-white md:text-sm text-xs rounded-md p-[0.3rem] md:p-2 cursor-pointer">
            <IconHome2 size={40} className="" />
            <h2>Property Connect</h2>
          </div>

          {/* nav links  */}
          <ul className="md:flex md:gap-4 hidden">
            {navLinks.map((nav) => (
              <Link to={nav.path} key={nav.id}>
                {nav.text}
              </Link>
            ))}
          </ul>

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
            {menu ? <IconMenu2 size={40} /> : <IconX size={40} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
