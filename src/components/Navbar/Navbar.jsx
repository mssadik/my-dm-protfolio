


// Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const facebook = useLocation().pathname === "/facebookPreWork";
  const instagram = useLocation().pathname === "/instaPreWork";
  const youtube = useLocation().pathname === "/youtubePreWork";
  console.log(location);
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto lg:px-20 flex justify-between items-center">
        <div className="text-white text-xl font-bold"><Link to="/"><img className='w-60 h-auto' src="https://i.ibb.co/qxdkc9V/Capture-removebg-preview-1.png" alt="" /></Link></div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>


        <div className={`lg:flex ${isMenuOpen ? '' : 'hidden'}`}>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-emerald-500 mr-4"
          >
            Home
          </a>
          <a
            href="#about"
            className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-emerald-500 mr-4 ${facebook || instagram || youtube  ? 'hidden lg:hidden' : ''}`}
          >
            About
          </a>

          <a
            href="#pre"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-emerald-500"
          >
            Previous_Work
          </a>
          <a
            href="#contact"
            className={`block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-white hover:text-emerald-500 mr-4 ${facebook || instagram || youtube ? 'hidden lg:hidden' : ''}`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
