import React from 'react';
import { FaLinkedin, FaGithub, FaTimes, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>trendtrove1004@gmail.com</p>
          <p>2nd Floor, Bandra West,<br /> Mumbai, Maharashtra 400050,<br /> India</p>
          <p>+91 xxxxxx2020</p>
          
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaGithub size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaTimes size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram size={24} /></a>
          </div>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800">FAQ's</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800">Return Policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Star Us</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Subscribe to Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h2>
          <p className="mb-2">Be the first to know about exclusive deals and new arrivals straight to your inbox.</p>
          <p className="mb-4">Join our fashion community today!</p>
          
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
