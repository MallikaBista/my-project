import React from 'react';
import Homebar from '../Images/Homebar.jpg'; // ensure path is correct

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-white">

      {/* 📝 Text Section - Left Side */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-10">
      
        <div className="text-lg md:text-xl text-gray-700 max-w-md space-y-4">
  
  
  <h1 className="text-4xl font-bold  md:text-5xl text-blue-800 mb-6">Up to 50% Off</h1>

  <p className="text-base md:text-lg text-gray-600">
    Good news for you! If you buy any book on Saturday and Sunday, you’ll get <span className="font-semibold">50% off</span> and also enjoy <span className="font-semibold">free delivery</span>.
  </p>
  <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded transition">
    Shop Now
  </button>

</div>

      </div>

      {/* 🖼 Image Section - Right Side */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src={Homebar}
          alt="Home Banner"
          className="w-9/12 h-96 object-cover mt-24 "
        />
      </div>

    </div>
  );
};

export default HomePage;
