import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ExploreBooks = () => {
  const scroll = (direction) => {
    const container = document.getElementById("scrollContainer");
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const images = [
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937949262%2F9789937949262-4227.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2Fb550%2Fb550-3232.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937672627%2F9789937672627-8368.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937753074%2Fimage.jpeg&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937010788%2Fimage.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937332637%2Fimage.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937332705%2Fimage.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937753845%2F9789937753845-9236.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937921299%2Fimage_ELmhlGW.jpeg&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789394280038%2F9789394280038-1804.webp&w=1920&q=75",
    "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937734257%2Fimage.jpeg&w=1920&q=75",
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Text Content */}
        <div className="text-center max-w-xl space-y-6 px-4">
          <h3 className="text-black-600 text-xl md:text-xl font-semibold tracking-wide ">
            Explore From Our Amazing Collection of
          </h3>

          <h1 className="text-black text-3xl md:text-4xl font-bold leading-tight">
            Thousands of Nepali Books
          </h1>

        </div>

        {/* Scrollable Image Section with side arrows */}
        <div className="relative w-full max-w-full">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-80"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            id="scrollContainer"
            className="flex overflow-x-auto gap-4 scroll-smooth px-8 py-2"
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Book ${i + 1}`}
                className="w-40 md:w-52 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-80"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Explore Books Button below images */}
        <div>
          <a
            href="see"
            className="inline-block bg-blue-600 text-white px-6 py-3 text-lg rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Explore Books
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreBooks;
