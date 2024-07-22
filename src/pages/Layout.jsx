import React, { useEffect } from "react";
import { useTheme } from "../context/theme";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
const Layout = () => {
  const { mode, setMode } = useTheme();
  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      console.log(mode);
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      console.log(mode);
    }
  }, [mode]);
  return (
    <section>
      <Navbar />
      <div className=" border-2">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
