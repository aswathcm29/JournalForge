/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaFile } from "react-icons/fa";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import hamburger from "../assets/burger-menu-svgrepo-com.svg";
import close from "../assets/close-svgrepo-com.svg";
import { AnimatePresence, motion } from "framer-motion";
import MagneticEffect from "./util/MagneticEffect";
import LogoImage from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toPublish = () => {
    navigate("/addjournals");
  };

  const navLink = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Journals",
      link: "/journals",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between border-b-4 border-green-400 p-4">
        <LogoImage></LogoImage>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div className="relative w-full flex gap-6 items-center justify-center">
            {navLink.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="relative flex items-center"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="nav"
                        className="absolute inset-0 px-4 py-4 bg-[#4ADE80] rounded-3xl"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 px-4 py-2 ${
                        isActive ? "text-black" : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        )}

        {/* Add Journal Button */}
        <MagneticEffect>
          <button
            onClick={toPublish}
            className="hidden lg:flex bg-green-400 w-[15rem] h-[3rem] items-center justify-center rounded-full gap-x-3"
          >
            <FaFile className="text-3xl px-2" />
            <span className="text-xl">Add Journal</span>
          </button>
        </MagneticEffect>
        {/* Hamburger Button for Mobile */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <img src={isMenuOpen ? close : hamburger} className="h-8" />
          </button>
        )}
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-4 flex flex-col gap-4 items-center"
          >
            {navLink.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="text-xl font-semibold"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
              >
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive ? "text-green-500 font-bold" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}

            {/* Add Journal Button for Mobile */}
            <button
              onClick={toPublish}
              className="bg-green-400 w-[12rem] h-[3rem] flex items-center justify-center rounded-full gap-x-3 mt-4"
            >
              <FaFile className="text-2xl px-2" />
              <span className="text-lg">Add your Journal</span>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Nav Divider */}
      <hr className="h-[0.1rem] flex justify-center bg-green-500 mt-4 shadow-2xl" />
    </>
  );
};

export default Navbar;
