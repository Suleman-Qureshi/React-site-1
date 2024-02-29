import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function NavBar() {
  const [Navbar, setNavbar] = useState(false);
  window.addEventListener(`scroll`, () => {
    if (window.scrollY > 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });
  return (
    <nav
      id="nav"
      className={
        Navbar
          ? "py-3 px-44 max-lg:py-0 flex justify-between duration-200 items-center z-20 fixed w-screen bg-sky-600 bg-opacity-90 max-2xl:px-40 max-xl:px-12 max-md:px-2 max-lg:items-center"
          : "py-2 px-44 flex justify-between items-center z-20 fixed duration-200 w-screen bg-sky-600 bg-opacity-30 max-2xl:px-40 max-xl:px-12 max-md:px-2 max-lg:py-0"
      }
    >
      <Link
        to="/"
        className="text-white text-3xl max-lg:text-2xl font-semibold hover:no-underline"
      >
        SoftLand
      </Link>
      <NavLinks />
    </nav>
  );
}
export default NavBar;
