import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import { categories } from "../data/categories";

export default function CategorySelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const timer = location.state?.timer || 15; // Default to medium difficulty if no timer provided
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleSubcategorySelect = (mainCategory, subcategory) => {
    // Use both main and subcategory in the URL for clarity
    const mainSlug = mainCategory.toLowerCase().replace(/\s+/g, '-');
    const subSlug = subcategory.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${mainSlug}/${subSlug}`, {
      state: { timer, mainCategory, subcategory }
    });
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-4" />
      
      <h1 className="text-3xl font-bold mb-2 text-red-600">Choose Your Category</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Timer: {timer} seconds per question</p>

      {/* Main Categories and Subcategories */}
      <div className="w-full max-w-4xl space-y-4">
        {categories.map((main) => (
          <div key={main.name} className="mb-4">
            {/* Category Header - Clickable to expand/collapse */}
            <button
              onClick={() => toggleCategory(main.name)}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg hover:from-purple-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200"
            >
              <span>{main.name}</span>
              <span className="transform transition-transform duration-200">
                {expandedCategory === main.name ? '▼' : '▶'}
              </span>
            </button>

            {/* Subcategories - Only shown when category is expanded */}
            {expandedCategory === main.name && (
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-2">
                {main.subcategories.map((sub) => (
                  <button
                    key={sub.name}
                    onClick={() => handleSubcategorySelect(main.name, sub.name)}
                    className="w-full h-16 font-bold rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all transform hover:scale-105 text-lg"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/difficulty')}
        className="mt-8 px-6 py-3 rounded-lg bg-gray-600 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-800"
      >
        Back to Difficulty
      </button>
    </div>
  );
} 