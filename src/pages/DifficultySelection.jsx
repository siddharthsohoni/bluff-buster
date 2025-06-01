import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

export default function DifficultySelection() {
  const navigate = useNavigate();

  const difficulties = [
    {
      name: "Easy",
      description: "20 seconds per question",
      timer: 20,
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Medium",
      description: "15 seconds per question",
      timer: 15,
      color: "bg-yellow-500 hover:bg-yellow-600"
    },
    {
      name: "Hard",
      description: "10 seconds per question",
      timer: 10,
      color: "bg-red-500 hover:bg-red-600"
    }
  ];

  const handleDifficultySelect = (difficulty) => {
    navigate('/categories', { state: { timer: difficulty.timer } });
  };

  return (
    <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-4" />
      
      {/* Difficulty Options */}
      <div className="grid grid-cols-1 gap-3 mb-6 w-full max-w-sm">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.name}
            onClick={() => handleDifficultySelect(difficulty)}
            className={`${difficulty.color} text-white font-bold rounded-lg p-3 transition-all transform hover:scale-105`}
          >
            <div className="text-xl mb-1">{difficulty.name}</div>
            <div className="text-sm">{difficulty.description}</div>
          </button>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 rounded-lg bg-gray-600 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-800 text-sm transition-colors duration-200"
      >
        Back to Home
      </button>
    </div>
  );
} 