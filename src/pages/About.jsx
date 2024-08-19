import React from "react";
import Navbar from "../components/Navbar";
import group from "../assets/images/aboutpg/group.jpg";
import arcade from "../assets/images/brand/arcade.png";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container md:flex items-center py-2">
        <div className="hidden md:block md:w-1/2 px-2">
          <img src={group} alt="Group" className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-3/4 px-4 md:px-8">
          <div className="brand mt-3 md:py-8 px-2">
            {/* <h2 className="text-3xl font-bold text-center md:text-left mb-6">About Us</h2> */}
            <article className="leading-relaxed text-justify text-base md:text-lg font-serif">
              <span className="text-5xl md:text-6xl font-bold float-left mr-3 leading-none capitalize">
                A
              </span>rcade DYNASTY is a brand tasked with the vision to create a
              lasting solution for fashion entrepreneurs, models, and
              creatives. Our goal is to showcase different couture, styles,
              and design, creating a dependable platform for fashion designers
              to tell their story and enhance their creativity on the runway
              through our different and innovative fashion events such as
              <strong>
                {" "}
                ARCADE FASHION WEEKEND, IBADAN BRIDAL FASHION SHOW, ESTILO LUZ
                KIDS AND TEEN FASHION SHOW, URBAN STYLE FASHION SHOW, THE
                BRIDAL FASHION WEEKEND, LAGOS BRIDAL FASHION EXPERIENCE, AND
                EL AMOR FASHION TOUR.
              </strong>
            </article>
            <br />
            <h2 className="text-2xl font-semibold mt-8">Our Goals</h2>
            <ul className="py-4 list-disc list-inside leading-relaxed">
              <li>
                Provide an opportunity where fashion enthusiasts and consumers
                interact with each other.
              </li>
              <li>
                Create a well-managed platform for customers to meet the
                people behind strong and emerging brands.
              </li>
              <li>
                Reveal the products and services offered by your brand to a
                large audience, reaching out to local and global markets.
              </li>
              <li>
                To bring together fashion Designers and Moguls at the
                grassroots.
              </li>
              <li>
                Reinforcing the bond between innovative lifestyle and building
                and contributing immensely to the fashion and modeling
                industry.
              </li>
              <li>
                To create an unforgettable experience for all participants.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
