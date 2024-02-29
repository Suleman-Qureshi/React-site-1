import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [click, setclick] = useState(true);
  const [clickupdown, setclickupdown] = useState(true);
  const clickMenu = () => {
    if (click) {
      setclick(false);
    } else {
      setclick(true);
    }
  };
  setInterval(() => {
    if (window.innerWidth > 1024) {
      setclick(true);
    } else {
    }
  });
  const click_in = () => {
    setclickupdown(false);
  };
  const click_out = () => {
    setclickupdown(true);
  };
  return (
    <>
      <ul className="flex space-x-12 text-neutral-300 text-lg font-medium max-lg:hidden">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive ? "text-white" : "text-neutral-300"
            } hover:text-white cursor-pointer duration-150 hover:no-underline`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/Feature"}
          className={({ isActive }) =>
            `${
              isActive ? "text-white" : "text-neutral-300"
            } hover:text-white cursor-pointer duration-150 hover:no-underline`
          }
        >
          Feature
        </NavLink>
        <NavLink
          to={"/Pricing"}
          className={({ isActive }) =>
            `${
              isActive ? "text-white" : "text-neutral-300"
            } hover:text-white cursor-pointer duration-150 hover:no-underline`
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to={"/Blog"}
          className={({ isActive }) =>
            `${
              isActive ? "text-white" : "text-neutral-300"
            } hover:text-white cursor-pointer duration-150 hover:no-underline`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to={"/ContactUs"}
          className={({ isActive }) =>
            `${
              isActive ? "text-white" : "text-neutral-300"
            } hover:text-white cursor-pointer duration-150 hover:no-underline`
          }
        >
          Contact us
        </NavLink>
      </ul>
      <span
        onClick={clickMenu}
        onMouseDown={click_in}
        onMouseUp={click_out}
        className={`${
          clickupdown
            ? "scale-100 hidden max-lg:block z-10"
            : "scale-90 hidden max-lg:block z-10"
        }`}
      >
        <i className="fa-solid fa-bars fa-2x cursor-pointer text-white"></i>
      </span>
      <div
        id="menu"
        className={
          click
            ? "w-screen h-screen fixed bg-black bg-opacity-45 top-0 left-0 flex-col justify-center hidden items-center p-8"
            : "w-screen h-screen fixed bg-black bg-opacity-45 top-0 left-0 flex-col justify-center flex items-center p-8"
        }
      >
        <div className="w-full h-full bg-white mt-12 p-8 rounded-2xl">
          <ul className="flex flex-col space-y-8 text-lg font-medium">
            <NavLink
              onClick={clickMenu}
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-600" : "text-neutral-700"
                } hover:text-sky-600 cursor-pointer duration-150 hover:no-underline`
              }
            >
              Home
            </NavLink>{" "}
            <hr />
            <NavLink
              onClick={clickMenu}
              to={"/Feature"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-600" : "text-neutral-700"
                } hover:text-sky-600 cursor-pointer duration-150 hover:no-underline`
              }
            >
              Feature
            </NavLink>{" "}
            <hr />
            <NavLink
              onClick={clickMenu}
              to={"/Pricing"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-600" : "text-neutral-700"
                } hover:text-sky-600 cursor-pointer duration-150 hover:no-underline`
              }
            >
              Pricing
            </NavLink>{" "}
            <hr />
            <NavLink
              onClick={clickMenu}
              to={"/Blog"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-600" : "text-neutral-700"
                } hover:text-sky-600 cursor-pointer duration-150 hover:no-underline`
              }
            >
              Blog
            </NavLink>{" "}
            <hr />
            <NavLink
              onClick={clickMenu}
              to={"/ContactUs"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-600" : "text-neutral-700"
                } hover:text-sky-600 cursor-pointer duration-150 hover:no-underline`
              }
            >
              Contact us
            </NavLink>{" "}
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavLinks;
