import React from "react";
import homepic from "../Images/Homebar.jpg";
import { Button } from "@material-tailwind/react";

const Deal = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 px-20">
          <h3 className="text-green-600 text-xl md:text-2xl font-bold tracking-wide">
            Deal Of The Day
          </h3>
          
          <h1 className="text-black text-xs lg:text-5xl font-bold  leading-tight">
             Upto 50% Off
          </h1>

          <p className="text-gray-700 text-xs lg:text-sm  ">
          Good news for you, if you buy any book on Saturday and Sunday you will get 50% off and also you will get free delivery.
          </p>

          <Button className="bg-green-600 text-white px-6 py-2 text-lg rounded-lg shadow-md hover:bg-green-700 transition">
            Shop Now
          </Button>
        </div>

        {/* Image */}
        <div>
          <img
            src={homepic}
            alt="Deal of the Day"
            className="w-full h-full object-cover rounded-lg pl-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Deal;
