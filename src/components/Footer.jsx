import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-16 px-6 mt-40">
        {" "}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <h2
              className="text-3xl font-bold bg-gradient-to-r
             from-purple-400 to-purple-200 
            bg-clip-text text-transparent"
            >
              Sathwik`s
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-transparent">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sathwik-Devireddy"
                  target="_blank"
                  className="text-gray-700 hover:text-violet-300 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-violet-300 transition-colors"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sathwik-devireddy-b5b8a72b5/"
                  target="_blank"
                  className="text-gray-700 hover:text-violet-300 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="border-t border-gray-700 mt-12
             pt-8 flex flex-col 
          md:flex-row justify-between items-center"
          >
            <p className="text-gray-500 text-sm">© 2025 SathwikPortfolio </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                className="text-gray-500 hover:text-white text-sm transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-gray-500 hover:text-white text-sm transition-colors"
                href="#"
              >
                Terms Of Service
              </a>
              <a
                className="text-gray-500 hover:text-white text-sm transition-colors"
                href="#"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
