import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import { getUserTitle } from "../data/titles";

export default function Answer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { correctAnswer, explanation, streak, category, timer } = location.state || {};
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(true);

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

  // Countdown and redirect
  useEffect(() => {
    if (isRedirecting && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isRedirecting && countdown === 0) {
      navigate('/game-over', { 
        state: { 
          streak, 
          category, 
          timer,
          correctAnswer,
          explanation
        } 
      });
    }
  }, [countdown, isRedirecting, navigate, streak, category, timer, correctAnswer, explanation]);

  const handleContinue = () => {
    setIsRedirecting(false);
    navigate('/game-over', { 
      state: { 
        streak, 
        category, 
        timer,
        correctAnswer,
        explanation
      } 
    });
  };

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-center transition-colors duration-200">
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-20 sm:w-24 mb-2" />
      
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300">The Answer</h2>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg mb-6 transition-colors duration-200">
          <p className="text-xl sm:text-2xl font-semibold text-red-700 dark:text-red-400 mb-3">"{correctAnswer}"</p>
          <p className="text-base text-gray-700 dark:text-gray-100">{explanation}</p>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {isRedirecting ? `Redirecting to leaderboard in ${countdown}...` : "Ready to continue?"}
          </p>
          
          <button
            onClick={handleContinue}
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-base hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow"
          >
            Continue to Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
} 