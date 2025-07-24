import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import images
import blog1 from "../Images/blog1.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/blog3.jpg";
import blog4 from "../Images/blog4.jpg";

const blogPosts = [
  {
    img: blog1,
    title: "Blog title goes here",
    text: "Book is very beneficial for our life. We should read a book daily, it sharpens the mind. All the successful people of the world read the book every day.",
    link: "/blog",
  },
  {
    img: blog4,
    title: "Blog title goes here",
    text: "Book is very beneficial for our life. We should read a book daily, it sharpens the mind. All the successful people of the world read the book every day.",
    link: "/blog1",
  },
  {
    img: blog3,
    title: "Blog title goes here",
    text: "Book is very beneficial for our life. We should read a book daily, it sharpens the mind. All the successful people of the world read the book every day.",
    link: "/blog",
  },
  {
    img: blog2,
    title: "Blog title goes here",
    text: "Book is very beneficial for our life. We should read a book daily, it sharpens the mind. All the successful people of the world read the book every day.",
    link: "/blog1",
  },
  {
    img: blog1,
    title: "Blog title goes here",
    text: "Book is very beneficial for our life. We should read a book daily, it sharpens the mind. All the successful people of the world read the book every day.",
    link: "/blog",
  },
];

const Blogs = () => {
  return (
    <section className="py-16 bg-white" id="blogs">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 uppercase">
        <span className="text-black">Our Blogs</span>
      </h1>

      <div className="max-w-6xl mx-auto px-4 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Navigation]}
          className="group"
        >
          {blogPosts.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="w-full border hover:border-black shadow-sm mb-6 rounded overflow-hidden">
                <div className="overflow-hidden h-64">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {blog.text}
                  </p>
                  <a
                    href={blog.link}
                    className="inline-block bg-green-600 text-white py-1.5 px-4 rounded hover:bg-green-700 text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         </div>
    </section>
  );
};
        export default Blogs;