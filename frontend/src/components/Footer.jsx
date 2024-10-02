import { Link } from "react-router-dom";

const footerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contactus",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row  items-start gap-6">
          <div className="mb-8 md:mb-0">
            <div className="">
              <div className="flex items-center mb-4">
                <h1 className="text-5xl flex items-start text-green-600">
                  <span>J</span>
                  <span className="text-4xl mb-2 ">F</span>
                </h1>
              </div>
              <p className="max-w-xs text-sm">
                Advancing knowledge through collaborative research and
                publication.
              </p>
            </div>
          </div>
          <div className="grow grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4  text-green-600">
                Quick Links
              </h3>
              <ul className="flex items-center justify-between flex-wrap gap-4 flex-col md:flex-row">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="hover:text-green-400 transition-colors flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" pt-8 border-t border-red-500 text-center text-sm">
          © {new Date().getFullYear()} JournalForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
