import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/grid";

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

// Book data
const books = [
  { id: 1, title: "Book One", image: book1 },
  { id: 2, title: "Book Two", image: book2 },
  { id: 3, title: "Book Three", image: book3 },
  { id: 4, title: "Book Four", image: book4 },
  { id: 5, title: "Book Five", image: book5 },
  { id: 6, title: "Book Six", image: book6 },
  { id: 7, title: "Book Seven", image: book7 },
  { id: 8, title: "Book Eight", image: book8 },
  { id: 9, title: "Book Nine", image: book9 },
  { id: 10, title: "Book Ten", image: book10 },
];

const NewArrivals = () => {
  return (
    <section className="py-10 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">📚 New Arrivals</h2>

      <Swiper
        slidesPerView={2}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, Grid]}
        breakpoints={{
          640: { slidesPerView: 2, grid: { rows: 2 } },
          768: { slidesPerView: 3, grid: { rows: 2 } },
          1024: { slidesPerView: 4, grid: { rows: 2 } },
        }}
        className="!pb-12"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="bg-white p-4 shadow-md rounded-lg text-center transition-all duration-200 border border-transparent hover:border-gray-500">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold">{book.title}</h3>

              {/* Price */}
              <h1 className="text-lg font-bold text-center mb-2 text-gray-600">
                Rs150{" "}
                <span className="line-through text-gray-400 ml-2">
                  200
                </span>
              </h1>

              {/* Star rating */}
              <div className="text-green-500 text-xl flex justify-center gap-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
