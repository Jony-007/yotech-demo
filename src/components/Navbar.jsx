import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../img/logo-two.png";
import newLogo from "../img/new-logo.png";

const Navbar = ({ type }) => {
  const [navStyles, setNavStyles] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", colorChange);

  return (
    <div
      className={
        color
          ? "navContainer w-[100%] bg-[#ffffffb3] backdrop-blur-[10px] h-[60px]  flex justify-center items-center text-[#7e3c87] fixed z-20"
          : type === "mission"
          ? "  w-[100%] xl:bg-transparent bg-[#7e3c87] h-[60px]  flex justify-center items-center text-white fixed z-[900]"
          : "  w-[100%] bg-transparent h-[60px]  flex justify-center items-center text-white fixed z-[900]"
      }
    >
      <div className="w-[100%] max-w-[1320px] flex justify-between items-center p-7 ">
        {color === true ? (
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className=" brand-logo cursor-pointer w-[100%] h-[100%] object-contain"
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src={newLogo}
              alt="logo"
              className=" brand-logo cursor-pointer w-[100%] h-[100%] object-contain"
            />
          </Link>
        )}
        {/* <Link to="/"></Link> */}
        <ul
          className={
            type === "mission"
              ? "navbar lg:flex justify-around items-center gap-7 hidden text-[#7e3c87]"
              : "navbar lg:flex justify-around items-center gap-7 hidden"
          }
        >
          <Link
            to="/about"
            className={
              navStyles
                ? "afterHoveringLink  bg-orange-400"
                : "link afterHoveringLink bg-amber-200"
            }
            onMouseLeave={(e) => {
              console.log("Hey i am leaving");
              console.log(e.target);

              setNavStyles((prev) => !prev);
            }}
          >
            About
          </Link>

          <Link to="/career" className="link cursor-pointer">
            Careers
          </Link>

          <Link to="/mission" className="link cursor-pointer">
            {" "}
            Mission & Values
          </Link>

          <Link to="/people" className="link cursor-pointer">
            Our People
          </Link>
        </ul>

        {/* Hamburger */}

        <div onClick={handleClick} className="lg:hidden z-10 text-3xl ">
          {!nav ? (
            <FaBars
              className={
                type === "mission" ? "cursor-pointer " : "cursor-pointer"
              }
            />
          ) : (
            <FaTimes className="text-white cursor-pointer" />
          )}
        </div>
        {/* Mobile menu */}

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#7e3c87] flex flex-col justify-center items-center gap-6 text-gray-100"
          }
        >
          <Link
            to="/about"
            className={
              navStyles
                ? "afterHoveringLink  bg-orange-400"
                : "link afterHoveringLink bg-amber-200"
            }
            onMouseLeave={(e) => {
              console.log("Hey i am leaving");
              console.log(e.target);

              setNavStyles((prev) => !prev);
            }}
          >
            About
          </Link>

          <Link to="/career" className="link cursor-pointer">
            Careers
          </Link>

          <Link to="/mission" className="link cursor-pointer">
            {" "}
            Mission & Values
          </Link>

          <Link to="/people" className="link cursor-pointer">
            Our People
          </Link>
        </ul>

        {/* {type === "mission" && <h1 className="text-gray-900">Pikachu</h1>} */}
      </div>
    </div>
  );
};

export default Navbar;
