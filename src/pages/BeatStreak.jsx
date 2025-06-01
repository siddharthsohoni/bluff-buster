import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import { getUserTitle } from "../data/titles";

export default function BeatStreak() {
  const navigate = useNavigate();
  const location = useLocation();
  const { streak, category, timer } = location.state || {};

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
  const userTitle = getUserTitle(streak);

  const handleStartGame = () => {
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`, { 
      state: { timer } 
    });
  };

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-center transition-colors duration-200">
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-20 sm:w-24 mb-2" />
      
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300">Beat Your Streak</h2>
        
        {/* Stats Display */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6 transition-colors duration-200">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Current Streak</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">{streak}</p>
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

        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to beat your streak of {streak} in {category}?
          </p>
          
          <div className="space-y-3">
            <button
              onClick={handleStartGame}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow"
            >
              Start Game
            </button>
            <button
              onClick={() => navigate('/game-over', { state: location.state })}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold text-base hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-200 shadow"
            >
              Back to Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 