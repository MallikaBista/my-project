import React from 'react';
import book1 from '../Images/book1.jpg';

const FeaturesSection = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Featured Books</h1>

      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          className="h-64 w-full object-cover"
          src={book1}
          alt="Featured book"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Book Title</h2>
          <p className="text-sm text-gray-600 mb-2">by Author Name</p>
          <p className="text-gray-700 text-sm mb-3">
            This is a short description of the book. It gives readers a glimpse of what the book is about.
          </p>
          <p className="text-lg font-bold text-green-700">Rs. 599</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
