import React, { useState, useEffect } from "react";
import {
  scienceQuestions,
  popCultureQuestions,
  historyQuestions,
  geographyQuestions,
} from "./questions"; // Import category-specific questions
import banner from './assets/banner.jpg'; // Import banner image

export default function LieDetectorGame() {
  // State variables to manage game data and UI
  const [questions, setQuestions] = useState([]); // Stores the shuffled questions
  const [current, setCurrent] = useState(0); // Tracks the current question index
  const [selected, setSelected] = useState(null); // Tracks the selected answer
  const [showResult, setShowResult] = useState(false); // Whether to show the result of the current question
  const [score, setScore] = useState({ correct: 0, wrong: 0 }); // Tracks the player's score
  const [timer, setTimer] = useState(60); // Timer for the game (1 minute)
  const [isGameActive, setIsGameActive] = useState(false); // Whether the game is currently active
  const [playerAnswers, setPlayerAnswers] = useState([]); // Tracks the player's answers
  const [selectedCategory, setSelectedCategory] = useState(null); // Tracks the selected category
  const [countdown, setCountdown] = useState(null); // Countdown before the game starts

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
      default:
        selectedQuestions = [];
    }

    // Shuffle the selected questions randomly
    const shuffledQuestions = [...selectedQuestions].sort(
      () => Math.random() - 0.5
    );

    // Set the countdown phase
    setCountdown(3); // Start countdown from 3 seconds
    setQuestions(shuffledQuestions);

    // Start the countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval); // Stop the countdown
          setCountdown(null); // End countdown
          setIsGameActive(true); // Start the game
          setTimer(60); // Reset the timer to 60 seconds
          setScore({ correct: 0, wrong: 0 }); // Reset the score
          setCurrent(0); // Reset the current question index
          setSelected(null); // Clear the selected answer
          setShowResult(false); // Hide the result
          setPlayerAnswers([]); // Clear player answers
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
    } else if (timer === 0) {
      setIsGameActive(false); // End the game when the timer reaches 0

      // Save game data to localStorage
      const userTitle = getUserTitle(score); // Determine the user's title
      localStorage.setItem(
        "gameData",
        JSON.stringify({
          score,
          playerAnswers,
          userTitle,
        })
      );
    }
    return () => clearInterval(interval); // Cleanup the interval
  }, [isGameActive, timer, score, playerAnswers]);

  // Load saved game data from localStorage on component mount
  useEffect(() => {
    const savedGameData = localStorage.getItem("gameData");
    if (savedGameData) {
      const { score, playerAnswers, userTitle } = JSON.parse(savedGameData);
      setScore(score); // Restore the score
      setPlayerAnswers(playerAnswers); // Restore player answers
      setIsGameActive(false); // Ensure the game is not active
      setTimer(0); // Ensure the timer is 0 to show the Game Over page
    }
  }, []);

  // Handle answer selection by the player
  const handleSelect = (index) => {
    if (showResult || !isGameActive) return; // Prevent selection if the result is shown or the game is inactive
    setSelected(index); // Set the selected answer
    setShowResult(true); // Show the result

    // Track the player's answer
    setPlayerAnswers((prev) => [
      ...prev,
      { question: questions[current], selected: index },
    ]);

    // Update the score based on whether the answer is correct
    if (index === questions[current].answer) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    // Automatically move to the next question after 500ms
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1); // Move to the next question
        setSelected(null); // Reset the selected state
        setShowResult(false); // Hide the result
      } else {
        setIsGameActive(false); // End the game if no more questions are left
      }
    }, 500);
  };

  // Share the player's score on social media
  const handleShareScore = () => {
    const userTitle = getUserTitle(score); // Determine the user's title

    // Create the share text
    const shareText = `I scored ${score.correct} correct answers in Bluff Buster and earned the title "${userTitle}"! Can you beat my score? Play here: https://siddharthsohoni.github.io/bluff-buster`;
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

  // Determine the user's title based on their score
  const getUserTitle = (score) => {
    if (score.correct === 0) {
      return "Certified Liar Detector Malfunction"; // No correct answers
    } else if (score.correct > score.wrong) {
      return "Suspiciously Smart"; // More correct than wrong
    } else if (score.correct === questions.length) {
      return "Truth Master"; // All answers correct
    } else {
      return "Kind of Gullible"; // More wrong than correct
    }
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
    const userTitle = getUserTitle(score); // Determine the user's title

    return (
      <div className="h-full bg-white flex flex-col items-center p-4 text-center">
        {/* Game Over Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Game Over!</h1>
        <p className="text-lg font-semibold mb-4">
          You scored {score.correct} correct and {score.wrong} wrong answers.
        </p>
        <p className="text-lg font-semibold mb-4">
          Your Title: <span className="text-blue-600">{userTitle}</span>
        </p>
        {/* Buttons for replaying or sharing the score */}
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            onClick={() => {
              localStorage.removeItem("gameData"); // Clear saved game data
              setIsGameActive(false); // Reset the game state
              setSelectedCategory(null); // Clear the selected category
              setQuestions([]); // Clear questions
              setScore({ correct: 0, wrong: 0 }); // Reset score
              setTimer(60); // Reset timer
              setCurrent(0); // Reset current question index
              setSelected(null); // Clear selected answer
              setShowResult(false); // Hide result
              setPlayerAnswers([]); // Clear player answers
            }}
          >
            Play Again
          </button>
          <button
            onClick={handleShareScore}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Share Score
          </button>
        </div>
      </div>
    );
  }

  // Render the start screen
  if (!isGameActive) {
    const categories = ["Science", "Pop Culture", "History", "Geography"]; // Categories from questions.js

    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Bluff Buster"
          className="w-40 sm:w-60 lg:w-80 mb-6"
        />
        <p className="text-lg mb-4">Select a category to start the game:</p>
        {/* Category Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-40 h-16 font-bold rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-gray-300 text-black"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Start Game Button */}
        <button
          onClick={handleStart}
          disabled={!selectedCategory}
          className={`px-6 py-3 rounded-lg font-bold text-white transition-all ${
            selectedCategory
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          Start Game
        </button>
      </div>
    );
  }

  // Render the game screen
  const { statements } = questions[current];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Timer */}
      <div className="text-2xl font-semibold mb-4">Time Left: {timer}s</div>
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
