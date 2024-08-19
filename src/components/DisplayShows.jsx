import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import './DisplayShows.css'; // Create this CSS file for styling

const DisplayShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      // .get("http://127.0.0.1:8000/api/display-shows/")
      .get("https://arcade-backend-bwa0.onrender.com/api/display-shows/")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center w-full md:flex md:flex-row flex-nowrap">
      {shows.map((show, index) => (
        <Link
          to={`/show/${show.id}`} // Adjust the path as needed
          key={index}
          className="show-item relative m-4 w-full sm:w-1/2 md:w-1/3"
        >
          <div className="w-full h-full">
            <img
              src={`https://arcade-backend-bwa0.onrender.com${show.image}`}
              alt={show.title}
              className="show-image w-full h-auto rounded-lg"
            />
            <p className="show-title absolute bottom-12 px-3 py-4 left-1/4 w-1/2 bg-white bg-opacity-35 transform -translate-x-1/2 text-black rounded text-left font-bold italic text-3xl">
              {show.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayShows;
