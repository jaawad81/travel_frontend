import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks, DropDownLinks } from "../../constants/navbar.js";
import Logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import  ResponsiveMenu  from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  return (
    <section className=" fixed top-0 right-0 w-full bg-white text-black shadow-md mb-32 z-10">
      {/* banner */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-between py-[2px] text-white">
            <p>20% off on next booking</p>
            <p>Mobile No. +92 090000000</p>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="container py-2 sm:py-0">
        <div
          className="flex justify-between
        items-center"
        >
          {/* Logo Section */}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo" className="h-16" />
            </Link>
          </div>
          {/* navbar */}
          <nav className="md:block hidden">
            <ul className="flex items-center gap-6 ">
              {NavbarLinks.map((item, key) => (
                <li key={key} className={"py-4"}>
                  <NavLink
                    to={item.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) =>
                      ` duration-200 ${
                        isActive ? "text-primary" : "text-black"
                      }`
                    }
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
              {/* dropdown */}
              <li className="cursor-pointer py-4 relative group ">
                <div className="dropdown flex items-center">
                  <span> Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all  duration-200 group-hover:rotate-180 " />
                  </span>
                </div>
                <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block  shadow-md text-black w-[150px] bg-white p-2">
                  <ul>
                    {DropDownLinks.map((item, key) => (
                      <li key={key} className="">
                        <NavLink
                          to={item.to}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary text-center"
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex gap-1">
            {/* Book Now Button */}
            <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
              Book now
            </button>
            {/* MObile Hamburger
             */}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt3
                  onClick={() => {setShowMenu(!showMenu)}}
                  className="transition-all cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt1
                  onClick={() => setShowMenu(!showMenu)}
                  className="transition-all cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {
        showMenu && <ResponsiveMenu setShowMenu={setShowMenu} showMenu />
      }
    </section>
  );
};

export default Navbar;
