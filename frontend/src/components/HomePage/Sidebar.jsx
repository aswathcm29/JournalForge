import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Journals",
    href: "/journals",
  },

  {
    name: "Contact",
    href: "/contactus",
  },
];

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open sidebar */}
      <Button
        variant="ghost"
        className="text-black px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-2 flex items-center justify-end">
          <Button
            variant="ghost"
            className="ml-auto px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
            onClick={toggleSidebar}
          >
            X
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`text-base ${
                    location.pathname === link.href
                      ? "text-green-600 font-bold"
                      : "text-gray-800 hover:text-green-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileSidebar;
