import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-4" />
      
      {/* How to Play Section */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mb-8 transition-colors duration-200">
        <h2 className="text-2xl font-bold mb-4 text-red-600">How to Play</h2>
        <div className="space-y-4 text-left text-gray-900 dark:text-gray-100">
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold">1.</span>
            <p>Choose your favorite category from the options below</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold">2.</span>
            <p>You'll see three statements - one of them is a bluff!</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold">3.</span>
            <p>Find the bluff before the timer runs out to build your streak</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold">4.</span>
            <p>Challenge your friends to beat your streak!</p>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={() => navigate('/difficulty')}
        className="px-8 py-4 text-xl font-bold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105"
      >
        Start Game
      </button>
    </div>
  );
} 