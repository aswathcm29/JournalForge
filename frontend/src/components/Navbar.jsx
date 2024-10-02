import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import plus from "../assets/icons/plus.svg";
import profile from "../assets/icons/user.svg";
import MobileSidebar from "./HomePage/Sidebar";

const navbarLinks = [
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

const Navbar = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => {
    if (
      (path === "/" || path === "/home") &&
      (location.pathname === "/" || location.pathname === "/home")
    ) {
      return "text-green-500 font-bold";
    }
    return location.pathname === path ? "text-green-600 font-bold" : "";
  };

  return (
    <header className="bg-white border-b border-gray-200 ">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="md:hidden">
              <MobileSidebar />
            </div>
            <span className="text-xl font-bold text-gray-800">
              <h1 className="text-5xl flex items-start">
                <span>J</span>
                <span className="text-4xl mb-2 ">F</span>
              </h1>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navbarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-gray-600 hover:text-green-600 transition-colors ${isActive(
                  link.href
                )}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link to="/addjournals">
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              >
                <img src={plus} alt="plus" width={24} height={24} />
                Add Journal
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="icon" className="flex items-center ">
                <img
                  src={profile}
                  alt="profile"
                  className="size-6 md:size-7 lg:size-8"
                />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
