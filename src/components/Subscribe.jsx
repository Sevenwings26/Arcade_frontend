import React from "react";
import { FaArrowRight } from "react-icons/fa";
import designerEllipse from "../assets/images/designers/designerEllipse.jpg";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-1/2 py-5">
      <div className="bg-black w-full md:w-1/2 h-full py-5">
        <form className="flex flex-col px-6 md:px-9 py-9 text-white text-base h-full">
          <h1 className="py-1 text-xl">Stay Updated</h1>
          <p className="mb-3 text-sm">Subscribe for updates on Arcade Dynasty</p>
          <label htmlFor="full-name" className="text-white py-1">
            Full name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="bg-black border border-r-slate-100 h-8 p-2"
          />
          <label htmlFor="email" className="text-white mt-3 py-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-black border border-r-slate-100 h-8 p-2"
          />
          <button type="submit" className="btn-subscribe mt-10 items-center flex justify-between px-4 md:px-5 text-lg md:text-xl bg-white text-black py-2 w-full md:w-auto">
            SIGN UP <FaArrowRight />
          </button>
        </form>
      </div>
      <div className="hidden md:w-1/2 h-full md:flex flex-col justify-center items-center common-bg py-2">
        <img src={designerEllipse} alt="Designer" className="rounded-full w-1/2 md:w-1/2 mt-5" />
        <Link to="/" className="mt-5 flex items-center text-xl text-black mb-5">
          Designers <FaArrowRight className="ml-2"/>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
