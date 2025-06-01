import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

export default function CategorySelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const timer = location.state?.timer || 15; // Default to medium difficulty if no timer provided
  const categories = ["Science", "Pop Culture", "History", "Geography", "Food & Culture", "Animals"];

  const handleCategorySelect = (category) => {
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { timer }
    });
  };

  return (
    <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-4" />
      
      <h1 className="text-3xl font-bold mb-2 text-red-600">Choose Your Category</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Timer: {timer} seconds per question</p>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className="w-48 h-20 font-bold rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all transform hover:scale-105 text-lg"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/difficulty')}
        className="px-6 py-3 rounded-lg bg-gray-600 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-800"
      >
        Back to Difficulty
      </button>
    </div>
  );
} 