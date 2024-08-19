import React from "react";
import { Link } from "react-router-dom";
import arcade from "../assets/images/brand/arcade.png";
import facebook from "../assets/images/mediaIcons/facebook.png";
import instagram from "../assets/images/mediaIcons/instagram.png";
import pinterest from "../assets/images/mediaIcons/pinterest.png";
import twitter from "../assets/images/mediaIcons/twitter.png";
import youtube from "../assets/images/mediaIcons/youtube.png";

const Footer = () => {
  return (
    <div className="common-bg">
      <div className="text-center pt-5 pb-6 px-4 md:px-36">
        {" "}
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          {" "}
          <div className="w-full md:w-2/5 mb-2 md:mb-0 text-center md:text-left">
            <div className="mb-4">
              <img
                src={arcade}
                alt="Arcade Media"
                className="mx-auto md:mx-0"
              />{" "}
              <p className="hidden md:block">
                The latest fashion trends, beauty tips, celebrity styles,
                fashion week highlights, cultural critiques, and videos on
                ARCCADE DYNASTY.
              </p>
            </div>
            <div className="social-icons w-full flex flex-wrap justify-center gap-6 md:gap-6">
              <Link to="https://facebook.com">
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link to="https://pinterest.com">
                <img src={pinterest} alt="Pinterest" />
              </Link>
              <Link to="https://instagram.com">
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link to="https://x.com">
                <img src={twitter} alt="Twitter" />
              </Link>
              <Link to="https://youtube.com">
                <img src={youtube} alt="YouTube" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/6 mt-6 md:mt-0 flex flex-col md:flex-row md:justify-between text-center md:text-left">
            <div className="md:mb-0">
              <Link to="">About Us</Link>
              <br />
              <Link to="">Contact</Link>
              <br />
              <Link to="">Sponsors</Link>
              <br />
              <Link to="">Designers</Link>
            </div>
            <div>
              <Link to="">Designer Application</Link>
              <br />
              <Link to="">Gallery</Link>
              <br />
              <Link to="">Blog</Link>
              <br />
              <Link to="">Buy Ticket</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-t-2 w-full flex flex-col items-center">
        <p className="text-black text-sm">
          &copy; 2023 Arcade Media. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
