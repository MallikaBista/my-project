import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Images import
import book1 from "../Images/book1.jpg";
import book2 from "../Images/book2.jpg";
import book3 from "../Images/book3.jpg";
import book4 from "../Images/book4.jpg";
import book5 from "../Images/book5.jpg";
import book6 from "../Images/book6.jpg";
import book7 from "../Images/book7.jpg";
import book8 from "../Images/book8.jpg";
import book9 from "../Images/book9.jpg";
import book10 from "../Images/book10.jpg";

const books = [
  { id: 1, image: book1, price: "2000Npr", oldPrice: "2400Npr" },
  { id: 2, image: book2, price: "3000Npr", oldPrice: "3500Npr" },
  { id: 3, image: book3, price: "1500Npr", oldPrice: "2000Npr" },
  { id: 4, image: book4, price: "150Npr", oldPrice: "200Npr" },
  { id: 5, image: book5, price: "1500Npr", oldPrice: "2000Npr" },
  { id: 6, image: book6, price: "450Npr", oldPrice: "540Npr" },
  { id: 7, image: book7, price: "560Npr", oldPrice: "670Npr" },
  { id: 8, image: book8, price: "800Npr", oldPrice: "870Npr" },
  { id: 9, image: book9, price: "270Npr", oldPrice: "320Npr" },
  { id: 10, image: book10, price: "720Npr", oldPrice: "900Npr" },
];

const FeaturesSection = () => {
  return (
    <section className="featured py-10 px-4 w-full bg-gray-50 " id="featured">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        <span>📚 Featured Books</span>
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="w-full h-full flex justify-center">
              <div
                className="group bg-white border-2 border-gray-300 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-95 hover:rotate-x-[6deg] hover:rotate-y-[-4deg] active:scale-95"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Top title bar with icons (shown on hover/touch) */}
                <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 
                  <div className="flex space-x-4 text-blue-500 text-lg">
                    <a href="she" className="fas fa-search hover:text-green-500" aria-label="Search"></a>
                    <a href="the" className="fas fa-heart hover:text-red-500" aria-label="Add to favorites"></a>
                    <a href="he" className="fas fa-eye hover:text-green-500" aria-label="View details"></a>
                  </div>
                </div>

                {/* Image section */}
                <div className="relative p-4 pb-0">
                  {/* Discount badge removed */}
                  <img
                    src={book.image}
                    alt={`Book ${book.id}`}
                    className="w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="text-center p-4 pt-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Featured Book</h3>
                  <p className="text-green-600 font-bold text-base">
                    {book.price}
                    <span className="text-sm text-gray-400 line-through ml-2">{book.oldPrice}</span>
                  </p>

                  {/* Add to cart */}
                  <a
                    href="hi"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-full hover:from-indigo-600 hover:to-blue-700 transition "
                  >
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturesSection;
