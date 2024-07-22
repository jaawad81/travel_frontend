import React,{useEffect} from "react";
import { FaTimes } from "react-icons/fa";
import { NavbarLinks, DropDownLinks } from "../../constants/navbar";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/theme";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const { mode, setMode } = useTheme()

  
  return (
    <section
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 x-20 flex h-screen w-3/4 flex-col justify-between bg-white  dark:bg-gray-900 dark:text-white px-8 pb-16 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card ">
        <div className="flex flex-col gap-4 mt-4">
          {NavbarLinks.map((item, key) => (
            <NavLink
              key={key}
              to={item.to}
              onClick={() => {
                window.scrollTo(0, 0);
                setShowMenu(false);
              }}
              className={({ isActive }) => {
                return ` duration-200 text-xl font-bold ${
                  isActive ? "text-primary" : ""
                }`;
              }}
            >
              {item.text}
            </NavLink>
          ))}
          <button className="mode"
          onClick={()=>{
            setMode(!mode)
          }}
          >
            {mode?"Dark":"Light"}
          </button>
        </div>
        
        <div className="flex  items-center  justify-center py-4">
          <button
            onClick={() => setShowMenu(false)}
            className="text-2xl rounded-full border-2 p-1 hover:bg-primary"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveMenu;
