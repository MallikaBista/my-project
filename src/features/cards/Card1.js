import React from "react";

const Card1 = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-95 active:scale-95 p-28">
      {/* Top right icons */}
      <div className="flex justify-end space-x-3 text-gray-500 text-lg mb-2 ">
        <a href="gi" className="fas fa-search hover:text-blue-500" aria-label="Search"></a>
        <a href="my" className="fas fa-heart hover:text-red-500" aria-label="Add to favorites"></a>
        <a href="hii" className="fas fa-eye hover:text-green-500" aria-label="View details"></a>
      </div>

      {/* Image with discount label */}
      <div className="relative group overflow-hidden rounded-xl ">
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
          -20%
        </span>
        <img
          src={require("../Images/book1.jpg")}
          alt="Featured Book"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content section */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Featured Book Title</h3>
        <p className="text-green-600 font-bold text-base">
          720Npr
          <span className="text-sm text-gray-400 line-through ml-2">900Npr</span>
        </p>

        {/* Add to cart button */}
        <a
          href="fi"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-full hover:from-indigo-600 hover:to-blue-700 transition"
        >
          <i className="fas fa-cart-plus"></i> Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Card1;
