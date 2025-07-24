import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import images explicitly from src folder
import hariImg from "../Images/hari.jpg";
import kiranImg from "../Images/kiran.jpg";
import ramImg from "../Images/ram.jpg";
import ramitaImg from "../Images/ramita.jpg";
import sitaImg from "../Images/sita.jpg";
import mallikaImg from "../Images/mallika.png.jpg";

const reviews = [
  {
    img: hariImg,
    name: "Rohit",
    text:
      "The website is very good and responsive, all the books available in this website are original and very cheap, you can buy them comfortably. Payment can also be done easily.",
  },
  {
    img: kiranImg,
    name: "Hari",
    text:
      "The website is very good and responsive, all the books available in this website are original and very cheap, you can buy them comfortably. Payment can also be done easily.",
  },
  {
    img: ramImg,
    name: "Raj ",
    text:
      "The website is very good and responsive, all the books available in this website are original and very cheap, you can buy them comfortably. Payment can also be done easily.",
  },
  {
    img: ramitaImg,
    name: "Tomika",
    text:
      "The website is very good and responsive, all the books available in this website are original and very cheap, you can buy them comfortably. Payment can also be done easily.",
  },
  {
    img: sitaImg,
    name: "Dipsikha",
    text:
      "The website is very good and responsive, all the books available in this website are original and very cheap, you can buy them comfortably. Payment can also be done easily.",
  },
  {
    img: mallikaImg,
    name: "Mallika",
    text:
      "The website is very good and responsive, all the books available in this website are original and very cheap, you can buy them comfortably. Payment can also be done easily.",
  },
];

const ClientReviews = () => {
  return (
    <section className="py-16 px-4 bg-white" id="reviews">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 uppercase">
        <span className="text-green-600">Client's Reviews</span>
      </h1>

      <Swiper
        slidesPerView={2}
        grid={{ rows: 1, fill: "row" }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, Grid]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-12 max-w-6xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-200 hover:border-black rounded-lg p-6 text-center shadow-sm bg-white">
              <img
                src={review.img}
                alt={review.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                {review.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {review.text}
              </p>
              <div className="text-green-600 mt-3 space-x-1 text-lg">
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

export default ClientReviews;
