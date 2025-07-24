import React, { useState } from 'react';
import HomeImage from "../Images/Homebar.jpeg";

const Home = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-full mt-0 relative">
      {/* Background Image Container */}
      <div
        className="w-full h-[500px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        {/* Overlay (dark gradient for better readability) */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Centered Content */}
        <div className="relative z-10 text-white text-center flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold">Subscribe for Updates</h2>

          {/* Email Input */}
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md outline-none text-black"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>

          {/* Like Button */}
          <button
            onClick={toggleLike}
            className="text-2xl mt-2 transition-colors duration-300"
          >
            <i
              className={`fas fa-heart ${
                liked ? "text-red-500" : "text-white"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
