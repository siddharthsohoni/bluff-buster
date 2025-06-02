import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import { getUserTitle } from "../data/titles";
import { getBasePath } from '../utils/basePath';

export default function Challenge() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const category = searchParams.get('category');
  const difficulty = searchParams.get('difficulty');
  const streak = searchParams.get('streak');
  const challengerName = searchParams.get('name') || 'A friend';
  const challengerTitle = getUserTitle(parseInt(streak));
  
  // Convert difficulty name to timer value
  const getTimerFromDifficulty = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 20;
      case 'medium': return 15;
      case 'hard': return 10;
      default: return 15;
    }
  };

  const handleStartGame = () => {
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { timer: getTimerFromDifficulty(difficulty) }
    });
  };

  // If any required parameter is missing, redirect to home
  if (!category || !difficulty || !streak) {
    navigate('/');
    return null;
  }

  return (
    <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-4" />
      
      <h1 className="text-2xl font-bold mb-6 text-red-600">Challenge Accepted!</h1>

      {/* Challenge Message */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md w-full max-w-sm mb-6 transition-colors duration-200">
        <p className="text-lg text-gray-800 dark:text-gray-100 mb-4">
          <span className="font-bold text-purple-600">{challengerName}</span> 
          <span className="text-gray-600 dark:text-gray-400"> (</span>
          <span className="font-semibold text-purple-600">{challengerTitle}</span>
          <span className="text-gray-600 dark:text-gray-400">) has challenged you to beat their streak of </span>
          <span className="font-bold text-red-600">{streak}</span>
          <span className="text-gray-600 dark:text-gray-400"> in </span>
          <span className="font-semibold text-gray-800 dark:text-gray-100">{category}</span>
          <span className="text-gray-600 dark:text-gray-400"> at </span>
          <span className="font-semibold text-gray-800 dark:text-gray-100">{difficulty}</span>
          <span className="text-gray-600 dark:text-gray-400"> difficulty!</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Do you have what it takes to beat this challenge? 🏆
        </p>
      </div>

      {/* Stats Display */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm mb-6 transition-colors duration-200">
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 dark:text-gray-400">Category</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{category}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">Difficulty</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{difficulty}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">Streak to Beat</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">{streak}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleStartGame}
        className="px-8 py-4 text-xl font-bold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105"
      >
        Accept Challenge
      </button>
    </div>
  );
} 