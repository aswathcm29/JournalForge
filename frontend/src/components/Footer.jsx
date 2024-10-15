// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       {/* Footer Section */}
//       <div className="w-full bg-[#F4F7F0] text-[#333] p-6 border-t-4 border-[#32CD32] mt-auto">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full border-b-4 border-green-400 space-y-6 lg:space-y-0 lg:space-x-6">
          
//           {/* Left side: Platform Description */}
//           <div className="text-left lg:w-1/3">
//             <h2 className="font-bold text-lg">JournalForge</h2>
//             <p className="text-sm max-w-md">
//               JournalForge is an innovative journaling platform that combines personal writing with AI-powered content generation. It provides users with personalized logins, private journals, and the ability to publish their entries for others to read.
//             </p>
//           </div>

//           {/* Center: Quick Access Links */}
//           <div className="lg:w-1/3 flex flex-col text-center lg:text-left">
//             <h3 className="font-bold text-lg mb-2">Quick Access</h3>
//             <ul className="space-y-2 ml-0 lg:ml-4">
//               <li><Link to={'/'} className="hover:text-[#32CD32] transition duration-300">Home</Link></li>
//               <li><Link to={'/journals'} className="hover:text-[#32CD32] transition duration-300">Journals</Link></li>
//               <li><Link to={'/about'} className="hover:text-[#32CD32] transition duration-300">About Us</Link></li>
//               <li><Link to={'/profile'} className="hover:text-[#32CD32] transition duration-300">Profile</Link></li>
//             </ul>
//           </div>

//           {/* Right side: Social Media Links */}
//           <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
//             <h3 className="font-bold text-lg mb-2 text-center lg:text-right">Social Media</h3>
//             <div className="flex space-x-6">
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-[#32CD32] transition duration-300">
//                 <FaGithub size={24} />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-[#32CD32] transition duration-300">
//                 <FaLinkedin size={24} />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-[#32CD32] transition duration-300">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-[#32CD32] transition duration-300">
//                 <FaDiscord size={24} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom section */}
//         <div className="text-center w-full mt-4">
//           <p className="text-[12px]">© Copyright 2024 - JournalForge</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;








import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Footer Section */}
      <div className="w-full bg-[#F4F7F0] text-[#333] p-6 border-t-4 border-[#32CD32] mt-auto bot">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full border-b-4 border-green-400 space-y-6 lg:space-y-0 lg:space-x-6">
          
          {/* Left side: Platform Description */}
          <div className="text-left lg:w-1/3">
            <h2 className="font-bold text-lg"> <span className="text-4xl">
          J<span className="text-3xl mb-2 absolute mr-2.5">F</span>
        </span>&nbsp;&nbsp; &nbsp; &nbsp;JournalForge</h2>
            <p className="text-sm max-w-md">
              JournalForge is an innovative journaling platform that combines personal writing with AI-powered content generation. It provides users with personalized logins, private journals, and the ability to publish their entries for others to read.
            </p>
          </div>

          {/* Center: Quick Access Links */}
          <div className="lg:w-1/3 flex flex-col lg:items-center text-center"> {/* Updated class to center the links */}
            <h3 className="font-bold text-lg mb-2">Quick Access</h3>
            <ul className="space-y-2">
              <li><Link to={'/'} className="hover:text-[#32CD32] transition duration-300">Home</Link></li>
              <li><Link to={'/journals'} className="hover:text-[#32CD32] transition duration-300">Journals</Link></li>
              <li><Link to={'/about'} className="hover:text-[#32CD32] transition duration-300">About Us</Link></li>
              <li><Link to={'/profile'} className="hover:text-[#32CD32] transition duration-300">Profile</Link></li>
            </ul>
          </div>

          {/* Right side: Social Media Links */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
            <h3 className="font-bold text-lg mb-2 text-center lg:text-right">Social Media</h3>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social text-[#333] hover:text-[#32CD32] transition duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social text-[#333] hover:text-[#32CD32] transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social text-[#333] hover:text-[#32CD32] transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social text-[#333] hover:text-[#32CD32] transition  duration-300">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center w-full mt-14">
          <p className="text-[12px]">© Copyright 2024 - JournalForge</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
