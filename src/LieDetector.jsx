import React, { useState, useEffect } from "react";
import {
  scienceQuestions,
  popCultureQuestions,
  historyQuestions,
  geographyQuestions,
  foodAndCultureQuestions, // Import for Food & Culture
  animalQuestions, // Import for Animals
} from "./questions"; // Import category-specific questions
import { funnyTitles } from "./funnyTitles"; // Import funny titles
import banner from "./assets/banner.jpg"; // Import banner image

export default function LieDetectorGame() {
  // State variables to manage game data and UI
  const [questions, setQuestions] = useState([]); // Stores the shuffled questions
  const [current, setCurrent] = useState(0); // Tracks the current question index
  const [selected, setSelected] = useState(null); // Tracks the selected answer
  const [showResult, setShowResult] = useState(false); // Whether to show the result of the current question
  const [streak, setStreak] = useState(0); // Tracks the user's streak
  const [timer, setTimer] = useState(10); // Timer for each question (10 seconds)
  const [isGameActive, setIsGameActive] = useState(false); // Whether the game is currently active
  const [selectedCategory, setSelectedCategory] = useState(null); // Tracks the selected category
  const [countdown, setCountdown] = useState(null); // Countdown before the game starts
  const [correctAnswer, setCorrectAnswer] = useState(null); // Tracks the correct answer for the last question
  const [categoryStreaks, setCategoryStreaks] = useState(() => {
    const storedStreaks = JSON.parse(localStorage.getItem("categoryStreaks"));
    return (
      storedStreaks || {
        Science: 0,
        "Pop Culture": 0,
        History: 0,
        Geography: 0,
        "Food & Culture": 0,
        Animals: 0,
      }
    );
  }); // Tracks the highest streak for each category

  // Function to start the game
  const handleStart = () => {
    if (!selectedCategory) return; // Ensure a category is selected

    let selectedQuestions = [];

    // Load questions based on the selected category
    switch (selectedCategory) {
      case "Science":
        selectedQuestions = scienceQuestions.questions;
        break;
      case "Pop Culture":
        selectedQuestions = popCultureQuestions.questions;
        break;
      case "History":
        selectedQuestions = historyQuestions.questions;
        break;
      case "Geography":
        selectedQuestions = geographyQuestions.questions;
        break;
      case "Food & Culture": // New category
        selectedQuestions = foodAndCultureQuestions.questions;
        break;
      case "Animals": // New category
        selectedQuestions = animalQuestions.questions;
        break;
      default:
        selectedQuestions = [];
    }

    // Shuffle the selected questions randomly
    const shuffledQuestions = [...selectedQuestions].sort(
      () => Math.random() - 0.5
    );
    setQuestions(shuffledQuestions); // Set the shuffled questions

    // Set the countdown phase
    setCountdown(3); // Start countdown from 3 seconds

    // Start the countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval); // Stop the countdown
          setCountdown(null); // End countdown
          setIsGameActive(true); // Start the game
          setTimer(10); // Reset the timer to 10 seconds
          setStreak(0); // Reset the streak
          setCurrent(0); // Reset the current question index
          setSelected(null); // Clear the selected answer
          setShowResult(false); // Hide the result
        }
        return prev - 1; // Decrement the countdown
      });
    }, 1000); // Countdown interval of 1 second
  };

  // Timer logic to count down during the game
  useEffect(() => {
    let interval;
    if (isGameActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1); // Decrement the timer
      }, 1000);
    } else if (isGameActive && timer === 0) {
      setIsGameActive(false); // End the game when the timer reaches 0
    }
    return () => clearInterval(interval); // Cleanup the interval
  }, [isGameActive, timer]);

  useEffect(() => {
    if (!isGameActive && streak > 0) {
      setCategoryStreaks((prevStreaks) => ({
        ...prevStreaks,
        [selectedCategory]: Math.max(prevStreaks[selectedCategory], streak),
      }));
    }
  }, [isGameActive, streak, selectedCategory]);

  useEffect(() => {
    if (!isGameActive && streak > 0) {
      const storedStreaks =
        JSON.parse(localStorage.getItem("categoryStreaks")) || {};
      const updatedStreaks = {
        ...storedStreaks,
        [selectedCategory]: Math.max(
          storedStreaks[selectedCategory] || 0,
          streak
        ),
      };
      localStorage.setItem("categoryStreaks", JSON.stringify(updatedStreaks));
    }
  }, [isGameActive, streak, selectedCategory]);

  // Function to get the user's title based on their streak
  const getUserTitle = (streak) => {
    const titleObj = funnyTitles.find(
      (title) => streak >= title.minStreak && streak <= title.maxStreak
    );
    return titleObj ? `${titleObj.title} ${titleObj.emoji}` : "Bluff Buster";
  };

  // Handle answer selection by the player
  const handleSelect = (index) => {
    if (showResult || !isGameActive) return; // Prevent selection if the result is shown or the game is inactive
    setSelected(index); // Set the selected answer
    setShowResult(true); // Show the result

    // Update the streak based on whether the answer is correct
    if (index === questions[current].answer) {
      setStreak((prev) => prev + 1); // Increment the streak
      setTimer(10); // Reset the timer to 10 seconds
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1); // Move to the next question
        setSelected(null); // Reset the selected state
        setShowResult(false); // Hide the result
      } else {
        setIsGameActive(false); // End the game if no more questions are left
      }
    } else {
      // Set the correct answer when the user selects the wrong answer
      setCorrectAnswer(questions[current].statements[questions[current].answer]);
      setIsGameActive(false); // End the game on a wrong answer
      setTimer(0); // Stop the timer
    }
  };

  // Share the player's score on social media
  const handleShareScore = () => {
    const userTitle = getUserTitle(streak); // Get the user's title
    const shareText = `I achieved a streak of ${streak} in the "${selectedCategory}" category of Bluff Buster and earned the title "${userTitle}"! Can you beat my score? Play here: https://siddharthsohoni.github.io/bluff-buster`;
    const encodedText = encodeURIComponent(shareText);

    // WhatsApp Web URL
    const whatsappWebUrl = `https://wa.me/?text=${encodedText}`;

    // WhatsApp App URL (for mobile devices)
    const whatsappAppUrl = `whatsapp://send?text=${encodedText}`;

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Open the appropriate URL
    window.open(isMobile ? whatsappAppUrl : whatsappWebUrl, "_blank");
  };

  // Render the countdown screen
  if (countdown !== null) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-6xl font-bold">{countdown}</h1>
        <p className="text-lg mt-4">Get ready!</p>
      </div>
    );
  }

  // Render the game over screen
  if (!isGameActive && timer === 0) {
    const userTitle = getUserTitle(streak); // Get the user's title

    return (
      <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Bluff Buster"
          className="w-40 sm:w-60 lg:w-80 mb-6"
        />
        {/* Game Over Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Game Over!</h1>
        <p className="text-lg font-semibold mb-4">
          Your Streak: <span className="text-red-600">{streak}</span>
        </p>
        <p className="text-lg font-semibold mb-4">
          Your Title: <span className="text-blue-600">{userTitle}</span>
        </p>
        {/* Show the correct answer if the player chose the wrong answer */}
        {correctAnswer && (
          <div className="text-left bg-gray-100 p-4 rounded-lg shadow-md mb-4 max-w-lg">
            <p className="text-lg font-semibold text-red-600">
              <strong>Bluff:</strong> {correctAnswer}
            </p>
          </div>
        )}
        {/* Buttons for replaying or sharing the score */}
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            onClick={() => {
              setIsGameActive(false); // Reset the game state
              setQuestions([]); // Clear questions
              setStreak(0); // Reset streak
              setTimer(10); // Reset timer
              setCurrent(0); // Reset current question index
              setSelected(null); // Clear selected answer
              setShowResult(false); // Hide result
              // Delay resetting selectedCategory to ensure UI updates correctly
              setTimeout(() => {
                setSelectedCategory(null); // Clear the selected category
              }, 0);
            }}
          >
            Beat the Streak
          </button>
          <button
            onClick={handleShareScore}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Challenge Friends
          </button>
        </div>
      </div>
    );
  }

  // Render the start screen
  if (!isGameActive) {
    const categories = [
      "Science",
      "Pop Culture",
      "History",
      "Geography",
      "Food & Culture", // New category
      "Animals", // New category
    ];

    return (
      <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Bluff Buster"
          className="w-40 sm:w-60 lg:w-80 mb-6"
        />
        {/* Instructions */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6 max-w-lg">
          <h2 className="text-xl font-bold mb-2">How to Play</h2>
          <p className="text-sm text-gray-700 mb-2">
            Welcome to <strong>Bluff Buster</strong>! Test your ability to
            detect bluff.
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside text-left">
            <li>Select a category to start the game.</li>
            <li>You will be presented with a series of statements.</li>
            <li>
              You have <strong>10 seconds</strong> to choose the{" "}
              <strong>false</strong> statement.
            </li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            Try to achieve the highest streak possible. Good luck!
          </p>
        </div>
        <p className="text-lg mb-4">Select a category to start the game:</p>
        {/* Category Buttons */}
        <div className="flex flex-col gap-4 mt-4 text-center justify-center items-center">
          {/* Dropdown for Categories */}
          <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-60 h-12 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black font-bold text-center appearance-none pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundPosition: "calc(100% - 1rem) center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1rem",
            }}
          >
            <option value="" disabled>
              Categories
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category} (Best Streak: {categoryStreaks[category]})
              </option>
            ))}
          </select>

          {/* Start Game Button */}
          <button
            onClick={handleStart}
            disabled={!selectedCategory}
            className={`w-60 h-12 px-6 py-3 rounded-lg font-bold text-white transition-all ${
              selectedCategory
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            Start Game
          </button>

          {/* Reset Streaks Button */}
          {!Object.values(categoryStreaks).every((streak) => streak === 0) && (
            <button
              onClick={() => {
                localStorage.removeItem("categoryStreaks");
                setCategoryStreaks({
                  Science: 0,
                  "Pop Culture": 0,
                  History: 0,
                  Geography: 0,
                  "Food & Culture": 0,
                  Animals: 0,
                });
              }}
              className="w-60 h-12 px-6 py-3 rounded-lg font-bold text-white transition-all bg-red-600 hover:bg-red-700"
            >
              Reset Streaks
            </button>
          )}
        </div>
      </div>
    );
  }

  // Render the game screen
  const { statements } = questions[current];

  return (
    <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Bluff Buster"
        className="w-40 sm:w-60 lg:w-80 mb-6"
      />
      {/* Timer */}
      <div className="text-2xl font-semibold mb-4">Time Left: {timer}s</div>
      <div className="text-xl font-semibold mb-4">Streak: {streak}</div>
      {/* Question and Answer Buttons */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md text-xl">
        {statements.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`block w-full text-center p-4 sm:p-5 mb-4 rounded-lg border transition-all duration-300 ${
              selected === i
                ? "border-gray-500 bg-gray-200 shadow-inner"
                : "border-gray-300 bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
