import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://arcade-backend-bwa0.onrender.com/api/upcoming-event/")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  return (
    <div className="flex flex-col w-full m-auto">
      {shows.map((show, index) => (
        <div key={index} className="show-item relative m-4 w-full">
          <img
            src={`https://arcade-backend-bwa0.onrender.com${show.image}`}
            alt={show.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bg-black view_more transform md:-translate-y-4 -translate-x-2/4 md:-translate-x-0 md:w-28 md:h-16 text-white">
            <p>Buy Ticket</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayShows;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DisplayShows = () => {
//     const [shows, setShows] = useState([]);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/upcoming-event/')
//             .then(response => {
//                 setShows(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching the images:', error);
//             });
//     }, []);

//     return (
//         <div className="flex flex-col w-full m-auto">
//             {shows.map((show, index) => (
//                 <div
//                     key={index}
//                     className="relative w-full h-96 rounded-lg bg-cover bg-center"
//                     style={{ backgroundImage: `url(http://127.0.0.1:8000${show.image})`, height:'140vh' }}
//                 >
//                     <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
//                         <h3 className="text-white text-lg font-bold">{show.title}</h3>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default DisplayShows;
