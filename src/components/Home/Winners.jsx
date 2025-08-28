import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const winners = [
  {
    name: "James Brown",
    location: "Perth",
    prize: "$951,889.10",
    img: "/images/winner.webp",
  },
  {
    name: "Daniel Li",
    location: "London",
    prize: "$235,658",
    img: "images/winner2.webp",
  },
  {
    name: "Emma Lee",
    location: "Sydney",
    prize: "142,753",
    img: "images/winner3.webp",
  },
    {
    name: "Sophia",
    location: "York",
    prize: "$50,307",
    img: "images/winner4.webp",
  },
    {
    name: "Alexander",
    location: "Bristol",
    prize: "$12,004",
    img: "images/winner5.webp",
  },
   
];

export default function WinnersSwiper() {
  return (
    <div className=" py-10">
      <h2 className="text-3xl font-bold text-center mb-5">Recent Winners</h2>
      <p className="text-center text-gray-600 mb-10">
        Real people, real wins. These lucky players <br /> recently hit it big with
        Lottery Drops Australian
      </p>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-6 relative"
        >
        {winners.map((winner, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center  ">
            <img
              src={winner.img}
              alt={winner.name}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{winner.name}</h3>
            <p className="text-gray-500">{winner.location}</p>
            <button className="bg-black text-white mt-4 px-4 py-2 rounded-full">
              Won {winner.prize}
            </button>
            </div>
          </SwiperSlide>
       ))}
        <div className="custom-prev hidden lg:flex absolute left-2 top-1/2 transform -translate-y-1/2  bg-black/50 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-all duration-300 z-10">
          &#8249;
        </div>
        <div className="custom-next hidden lg:flex absolute right-2 top-1/2 transform -translate-y-1/2  bg-black/50 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center  rounded-full cursor-pointer shadow-lg transition-all duration-300 z-10">
          &#8250;
        </div>
      </Swiper>

      </div>
    </div>
  );
}

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const winners = [
//   {
//     name: "Emma Brown",
//     location: "New York",
//     prize: "$1000",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "Emma Brown",
//     location: "New York",
//     prize: "$1000",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "Emma Brown",
//     location: "New York",
//     prize: "$1000",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "Emma Brown",
//     location: "New York",
//     prize: "$1000",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "Emma Brown",
//     location: "New York",
//     prize: "$1000",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "Emma Brown",
//     location: "New York",
//     prize: "$1000",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "John Doe",
//     location: "California",
//     prize: "$500",
//     img: "https://via.placeholder.com/300x200",
//   },
//   {
//     name: "Alice Smith",
//     location: "Texas",
//     prize: "$750",
//     img: "https://via.placeholder.com/300x200",
//   },
// ];

// const CustomSwiper = () => {
//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="px-6"
//       >
//         {winners.map((winner, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//               <img
//                 src={winner.img}
//                 alt={winner.name}
//                 className="rounded-lg w-full h-48 object-cover"
//               />
//               <h3 className="text-xl font-semibold mt-4">{winner.name}</h3>
//               <p className="text-gray-500">{winner.location}</p>
//               <button className="bg-[#064A8F] hover:bg-[#02396b] text-white mt-4 px-6 py-2 rounded-full transition-colors duration-300">
//                 Won {winner.prize}
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Custom navigation buttons */}
//         <div className="custom-prev hidden lg:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#064A8F] hover:bg-[#02396b] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-all duration-300 z-10">
//           &#8249;
//         </div>
//         <div className="custom-next hidden lg:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#064A8F] hover:bg-[#02396b] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-all duration-300 z-10">
//           &#8250;
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default CustomSwiper;

