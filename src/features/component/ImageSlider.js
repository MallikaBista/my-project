import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
  'https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2Fy51jn9yXZ3C6W9CWRUcP3cVCb0u4TcjCynwT1g6f.webp&w=1920&q=75',
  'https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2FKnUznZ0dxmrorRMUEo44sH3iPR9IRajzKuHdAsVW.webp&w=1920&q=75',
  'https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2FNBpEdTkimyTf9VbTKwoO1kM3SsNLnvZR8OOXnPOd.webp&w=1920&q=75',
  'https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2Fo4a18iVjFamKxUvEhBXIW0VTXzPoPuplqDggcKRD.webp&w=1920&q=75',
 'https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2FKnUznZ0dxmrorRMUEo44sH3iPR9IRajzKuHdAsVW.webp&w=1920&q=75'

];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,      // 🔧 new
  pauseOnFocus: false,
  };

  return (
    <div className="px-10 py-6 bg-gray-100">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="px-2">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-64 object-cover rounded-xl shadow transition-transform duration-300 hover:scale-105 active:scale-95"

            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
