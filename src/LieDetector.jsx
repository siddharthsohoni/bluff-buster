import React, { useState, useEffect } from "react";
import {
  scienceQuestions,
  popCultureQuestions,
  historyQuestions,
  geographyQuestions,
} from "./questions"; // Import category-specific questions
import banner from './assets/banner.jpg';

export default function LieDetectorGame() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [timer, setTimer] = useState(60); // 1-minute timer
  const [isGameActive, setIsGameActive] = useState(false);
  const [playerAnswers, setPlayerAnswers] = useState([]); // Track player answers
  const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category
  const [countdown, setCountdown] = useState(null); // Track the countdown phase

  // Shuffle questions and reset game state when the game starts
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

    // Shuffle the selected questions
    const shuffledQuestions = [...selectedQuestions].sort(
      () => Math.random() - 0.5
    );

    // Set the countdown phase
    setCountdown(3); // Start countdown from 3
    setQuestions(shuffledQuestions);

    // Start the countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval);
          setCountdown(null); // End countdown
          setIsGameActive(true); // Start the game
          setTimer(60); // Reset the timer
          setScore({ correct: 0, wrong: 0 });
          setCurrent(0);
          setSelected(null);
          setShowResult(false);
          setPlayerAnswers([]); // Reset player answers
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Timer logic
  useEffect(() => {
    let interval;
    if (isGameActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsGameActive(false); // End the game when the timer reaches 0

      // Save game data to localStorage
      const userTitle = getUserTitle(score);
      localStorage.setItem(
        "gameData",
        JSON.stringify({
          score,
          playerAnswers,
          userTitle,
        })
      );
    }
    return () => clearInterval(interval);
  }, [isGameActive, timer, score, playerAnswers]);

  useEffect(() => {
    const savedGameData = localStorage.getItem("gameData");
    if (savedGameData) {
      const { score, playerAnswers, userTitle } = JSON.parse(savedGameData);
      setScore(score);
      setPlayerAnswers(playerAnswers);
      setIsGameActive(false); // Ensure the game is not active
      setTimer(0); // Ensure the timer is 0 to show the Game Over page
    }
  }, []);

  // Handle answer selection
  const handleSelect = (index) => {
    if (showResult || !isGameActive) return;
    setSelected(index);
    setShowResult(true);

    // Track player's answer
    setPlayerAnswers((prev) => [
      ...prev,
      { question: questions[current], selected: index },
    ]);

    if (index === questions[current].answer) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    // Automatically move to the next question after 500ms
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null); // Reset the selected state
        setShowResult(false);
      } else {
        setIsGameActive(false); // End the game if no more questions are left
      }
    }, 500);
  };

  // Share score on social media
  const handleShareScore = () => {
    // Determine the user's title based on their score
    const getUserTitle = (score) => {
      if (score.correct > 15) {
        return "Truth Master";
      } else if (score.correct >= 11 && score.correct <= 15) {
        return "Suspiciously Smart";
      } else if (score.correct >= 6 && score.correct <= 10) {
        return "Kind of Gullible";
      } else {
        return "Certified Liar Detector Malfunction";
      }
    };

    const userTitle = getUserTitle(score);

    // Share text with the user's title
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

  if (countdown !== null) {
    // Show the countdown timer
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-6xl font-bold">{countdown}</h1>
        <p className="text-lg mt-4">Get ready!</p>
      </div>
    );
  }

  if (!isGameActive && timer === 0) {
    // Function to determine the user's title
    const getUserTitle = (score) => {
      if (score.correct > 15) {
        return "Truth Master";
      } else if (score.correct >= 11 && score.correct <= 15) {
        return "Suspiciously Smart";
      } else if (score.correct >= 6 && score.correct <= 10) {
        return "Kind of Gullible";
      } else {
        return "Certified Liar Detector Malfunction";
      }
    };

    const userTitle = getUserTitle(score);

    return (
      <div className="h-full bg-white flex flex-col items-center p-4 text-center">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white w-full max-w-2xl z-10 p-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Game Over!</h1>
          <p className="text-lg font-semibold mb-4">
            You scored {score.correct} correct and {score.wrong} wrong answers.
          </p>
          <p className="text-lg font-semibold mb-4">
            Your Title: <span className="text-blue-600">{userTitle}</span>
          </p>
          <div className="flex justify-center gap-4">
            {/* Play Again Button */}
            <button
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              onClick={() => {
                localStorage.removeItem("gameData"); // Clear saved game data
                setIsGameActive(false); // Go back to the start page
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
            {/* Share Score Button */}
            <button
              onClick={handleShareScore}
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Share Score
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] w-full max-w-2xl p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          {playerAnswers.map((entry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-300 gap-4 mb-4 text-left"
            >
              <h3 className="text-lg font-semibold mb-2 text-center">
                Question {index + 1}
              </h3>
              <ul className="list-disc list-inside mb-4">
                {entry.question.statements.map((statement, i) => (
                  <li key={i}>{statement}</li>
                ))}
              </ul>
              <p className="text-sm">
                <span className="font-semibold">Correct Answer:</span>{" "}
                <span className="text-green-600">
                  {entry.question.statements[entry.question.answer]}
                </span>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Your Answer:</span>{" "}
                <span
                  className={
                    entry.selected === entry.question.answer
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {entry.question.statements[entry.selected] || "No Answer"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!isGameActive) {
    // Start Screen
    const categories = ["Science", "Pop Culture", "History", "Geography"]; // Categories from questions.js

    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        {/* Responsive Image */}
        <img
          src={banner} // Add the base path
          alt="Bluff Buster"
          className="w-40 sm:w-60 lg:w-80 mb-6" // Responsive width for mobile, tablet, and laptop
        />
        <p className="text-lg mb-4">Select a category to start the game:</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)} // Set the selected category
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
        <button
          onClick={handleStart}
          disabled={!selectedCategory} // Disable if no category is selected
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

  const { statements } = questions[current];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Responsive Image */}
      <img
        src={banner} // Add the base path
        alt="Bluff Buster"
        className="w-40 sm:w-60 lg:w-80 mb-6" // Responsive width for mobile, tablet, and laptop
      />
      <div className="text-2xl font-semibold mb-4">Time Left: {timer}s</div>
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md text-xl">
        {statements.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`block w-full text-center p-4 sm:p-5 mb-4 rounded-lg border transition-all duration-300 ${
              selected === i
                ? "border-gray-500 bg-gray-200 shadow-inner" // Pressed button effect
                : "border-gray-300 bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      {/* Conditionally Render Buttons */}
      {!isGameActive && timer === 0 ? (
        // Show "Play Again" button after the game ends
        <button
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          onClick={() => {
            localStorage.removeItem("gameData"); // Clear saved game data
            setIsGameActive(false); // Go back to the start page
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
      ) : (
        // Show "Restart Game" button during the game
        <button
          onClick={() => {
            setIsGameActive(false); // Go back to the start page
            setSelectedCategory(null); // Clear the selected category
            setQuestions([]); // Clear questions
            setScore({ correct: 0, wrong: 0 }); // Reset score
            setTimer(60); // Reset timer
            setCurrent(0); // Reset current question index
            setSelected(null); // Clear selected answer
            setShowResult(false); // Hide result
            setPlayerAnswers([]); // Clear player answers
          }}
          className="mt-6 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
        >
          Restart Game
        </button>
      )}
    </div>
  );
}
