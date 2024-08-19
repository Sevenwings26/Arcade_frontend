import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import arcade from "../assets/images/brand/arcade.png";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Tailwind style for nav items
  const NavStyle =
    "hover:bg-gray-900 hover:text-white rounded-md transition-all px-3 py-2";

  return (
    <nav className="w-full bg-white drop-shadow-md py-4 px-2 xl:px-10 flex justify-between items-center text-black relative z-50">
      <div className="text-lg font-bold z-50">
        <Link to="/">
          <img src={arcade} className="" width="160px" alt="Arcade-Dynasty" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 z-20">
        <Link to="/" className={NavStyle}>
          Home
        </Link>
        <Link to="/blog" className={NavStyle}>
          Blog
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`${NavStyle} flex items-center cursor-pointer`}
          >
            Gallery <FaChevronDown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-30">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Arcade Fashion Weekend
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                El Almor
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Kids Fashion
              </Link>
            </div>
          )}
        </div>
        <Link to="/about" className={NavStyle}>
          About
        </Link>
        <Link to="/designers" className={NavStyle}>
          Designers
        </Link>
        {user ? (
          <button
            onClick={logoutUser}
            className="px-3 py-2 rounded-md transition-all"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="px-3 py-2 rounded-md transition-all">
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-2 rounded-md transition-all"
            >
              Signup
            </Link>
          </>
        )}
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden block cursor-pointer z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-screen bg-white flex flex-col items-start gap-6 font-semibold text-lg pt-28 pb-6 px-2 z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0 opacity-100 ease-out" : "-translate-x-full opacity-0 ease-in"
        }`}
      >
        <Link
          to="/"
          className="block p-2 border-b w-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="block p-2 border-b w-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <div className="relative w-full">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left p-2 border-b"
          >
            Gallery <FaChevronDown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="w-full">
              <Link
                to="/gallery/option1"
                className="block px-4 py-2 border-b hover:bg-gray-200"
              >
                Arcade Fashion Weekend
              </Link>
              <Link
                to="/gallery/option2"
                className="block px-4 py-2 border-b hover:bg-gray-200"
              >
                El Almor
              </Link>
              <Link
                to="/gallery/option3"
                className="block px-4 py-2 border-b hover:bg-gray-200"
              >
                Kids Fashion
              </Link>
              <Link
                to="/gallery/option4"
                className="block px-4 py-2 border-b hover:bg-gray-200"
              >
                Option 4
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/about"
          className="block p-2 border-b w-full"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/designers"
          className="block p-2 border-b w-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Designers
        </Link>
        {user ? (
          <button
            onClick={() => {
              logoutUser();
              setIsMenuOpen(false);
            }}
            className="block p-2 border-b w-full text-left"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="block p-2 border-b w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block p-2 border-b w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
