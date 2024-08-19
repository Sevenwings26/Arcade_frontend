import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/carousel-images/')
      .then(response => {
        console.log(response.data);  // Debugging line
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching the images:', error);
      });
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id} className="relative text-center h-96">
            <img src={`http://127.0.0.1:8000${image.image}`} alt={image.title} className="w-full h-auto rounded-lg" />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-5 rounded-md text-white">
              <h2 className="text-2xl m-0">{image.title}</h2>
              <p className="text-lg">{image.description}</p>
              <div className="mt-2 space-x-2">
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 text-sm">View Portfolio</button>
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 text-sm">Contact Us</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
