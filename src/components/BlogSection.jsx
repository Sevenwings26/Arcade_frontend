import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://arcade-backend-bwa0.onrender.com/api/blog")
      .then((response) => {
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog content:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] relative"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            {/* <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mx-2"> */}
            <div className="flex flex-col items-center mb-10 group relative shadow-lg text-white rounded-lg p-4 overflow-hidden cursor-pointer">
              <img
                src={`https://arcade-backend-bwa0.onrender.com${blog.image}`}
                alt={`Image${index + 1}`}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="absolute bottom-3 mt-0 w-11/12 bg-black p-3 rounded-b-lg ">
                <h2 className="text-2xl font-semibold text-white text-center">
                  {blog.title}
                </h2>
                <p className="text-blue-500 text-center">{blog.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination styling */}
      <div className="swiper-pagination mt-5 flex justify-center" />
    </div>
  );
};

export default BlogSection;
