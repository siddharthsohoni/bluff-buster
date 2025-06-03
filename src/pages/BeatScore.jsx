import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import { getUserTitle } from "../data/titles";

export default function BeatScore() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, category, timer } = location.state || {};

  // Get difficulty name based on timer
  const getDifficultyName = (timer) => {
    switch (timer) {
      case 20: return "Easy";
      case 15: return "Medium";
      case 10: return "Hard";
      default: return "Medium";
    }
  };

  const difficulty = getDifficultyName(timer);
  const userTitle = getUserTitle(score, category);

  const handleStartGame = () => {
    // Split the category into main and subcategory
    const [mainCategory, subcategory] = category.split(' - ');
    
    // Convert to lowercase and replace spaces with hyphens
    const formatPath = (str) => str.toLowerCase().replace(/\s+/g, '-');
    const categoryPath = `${formatPath(mainCategory)}/${formatPath(subcategory)}`;
    
    navigate(`/category/${categoryPath}`, { 
      state: { timer } 
    });
  };

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-center transition-colors duration-200">
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-20 sm:w-24 mb-2" />
      
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300">Beat Your Score</h2>
        
        {/* Stats Display */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6 transition-colors duration-200">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Current Score</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">{score}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Your Title</p>
              <p className="text-xl font-semibold text-purple-600 dark:text-purple-300">{userTitle}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{category}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Difficulty</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{difficulty}</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Ready to beat your score of {score} in {category}?
          </p>
          <button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
} 