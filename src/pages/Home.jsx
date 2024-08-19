import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Sponsors from "../components/Sponsors";
import ArcadeComponent from "../assets/images/ArcadeComponent.jpg";
import wedding from "../assets/images/wedding.png";
import DisplayShows from "../components/DisplayShows";
import UpcomingEvent from "../components/UpcomingEvent";
import "../App.css";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection";
import Subcribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSlider />
      <div className="md:container m-auto py-2 px-6">
        <section>
          <div className="flex items-center justify-center text-center w-full flex-col border-0 m-auto">
            <div className="brand-box flex flex-col justify-center">
              <h1 className="text-3xl font-semibold">Arcade Fashion Weekend</h1>
              <p className="px-7 md:px-10 capitalize">
                Recent updates on models, runway trends, and casual fashion,
                featuring both seasoned supermodels and emerging talents.
              </p>

              <div className="brand mt-3 rounded-xl w-full relative">
                <Link to="">
                  <div className="absolute bg-black view_more transform md:-translate-y-4 -translate-x-2/4 md:-translate-x-0 md:w-28 md:h-16 text-white">
                    <p>View More</p>
                  </div>
                  <img src={ArcadeComponent} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="brand mt-3 w-full relative m-auto md:flex flex-row justify-between justify-items-center md:py-8">
            <div className="py-3 text-center md:hidden">
              <Link to="/about" className="bold">
                About Us
              </Link>
            </div>
            <div className="md:w-2/5 border-red-50">
              <Link to="/about">
                <img src={wedding} alt="" />
              </Link>
            </div>
            <div className="hidden md:block md:w-3/5 px-10">
              <h2 className="text-2xl font-semibold ">About Us</h2>
              <p className="leading-[1.1] xl:leading-[1.5]">
                Arcade DYNASTY is a brand tasked with the vision to create a
                lasting solution for fashion entrepreneurs, models, and
                creatives. Our goal is to showcase different couture, styles,
                and design, creating a dependable platform for fashion designers
                to tell their story and enhance their creativity on the runway
                through our different and innovative fashion events such as
                ARCADE FASHION WEEKEND, IBADAN BRIDAL FASHION SHOW, ESTILO LUZ
                KIDS AND TEEN FASHION SHOW, URBAN STYLE FASHION SHOW, THE BRIDAL
                FASHION WEEKEND, LAGOS BRIDAL FASHION EXPERIENCE, AND EL AMOR
                FASHION TOUR.
              </p>
              <ul className="py-4 list-disc list-inside leading-[1] xl:leading-[1.3]">
                {" "}
                {/* Modified this line */}
                <li>
                  Provide an opportunity where fashion enthusiasts and consumers
                  interact with each other.
                </li>
                <li>
                  Create a well-managed platform for customers to meet the
                  people behind strong and emerging brands.
                </li>
                <li className="leading-tight truncate-ellipsis">
                  Reveal the products and services offered by your brand to a
                  large audience, reaching out to local and global markets...
                </li>
              </ul>
              <Link to="/about" className="text-red-500">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Must read section */}
      <section>
        <div className="line-must-read text-center py-2 mt-3 mb-3">
          <p className="font-semibold">Must Read</p>
        </div>
        <div className="w-full md:container m-auto py-2 px-6">
          <div className="">
            <DisplayShows />
          </div>
        </div>
      </section>
      {/* New Event Section */}
      <section>
        <div className="line-must-read text-center py-2 mt-3 mb-3">
          <p className="font-semibold">New Event</p>
        </div>
        <div className="container m-auto">
          <UpcomingEvent />
        </div>
      </section>
      {/* blog section */}
      <section>
        <div className="w-full md:container m-auto">
          <BlogSection />
        </div>
      </section>
      {/* subcribe section */}
      <section className="w-full md:container m-auto">
        <Subcribe />
      </section>
      {/* sponsors section  */}
      <section>
        <Sponsors />
      </section>

      {/* footer section */}
      <section>
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
};

export default Home;
