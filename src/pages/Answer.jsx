import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

export default function Answer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { correctAnswer, explanation, score, category, timer, userTitle } = location.state || {};
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
          score, 
          category, 
          timer,
          correctAnswer,
          explanation,
          userTitle
        } 
      });
    }
  }, [countdown, isRedirecting, navigate, score, category, timer, correctAnswer, explanation, userTitle]);

  const handleContinue = () => {
    setIsRedirecting(false);
    navigate('/game-over', { 
      state: { 
        score, 
        category, 
        timer,
        correctAnswer,
        explanation,
        userTitle
      } 
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center p-4 text-center transition-colors duration-200">
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-20 sm:w-24 mb-2" />
      
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300">Game Over!</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6 transition-colors duration-200">
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400">The Bluff Was:</p>
              <p className="text-xl font-bold text-red-600 dark:text-red-400">{correctAnswer}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Explanation:</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">{explanation}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Redirecting to results in {countdown} seconds...
          </p>
          <button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow"
            onClick={handleContinue}
          >
            Continue Now
          </button>
        </div>
      </div>
    </div>
  );
} 