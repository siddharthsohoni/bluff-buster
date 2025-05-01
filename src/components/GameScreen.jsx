import React, { useEffect, useState } from "react";
import scienceQuestions from "../data/scienceQuestions";
import popCultureQuestions from "../data/popCultureQuestions";
import historyQuestions from "../data/historyQuestions";
import geographyQuestions from "../data/geographyQuestions";
import foodAndCultureQuestions from "../data/foodAndCultureQuestions";
import animalQuestions from "../data/animalQuestions";
import bannerImage from "../assets/banner.jpg"; // Adjust the path based on your folder structure

export default function GameScreen({
  selectedCategory,
  setGamePhase,
  setStreak,
  streak,
}) {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(10); // Timer state
  const [current, setCurrent] = useState(0); // Current question index

  // Initialize questions based on the selected category
  useEffect(() => {
    let selectedQuestions = [];
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
      case "Food & Culture":
        selectedQuestions = foodAndCultureQuestions.questions;
        break;
      case "Animals":
        selectedQuestions = animalQuestions.questions;
        break;
      default:
        selectedQuestions = [];
    }

    // Shuffle the selected questions randomly
    const shuffledQuestions = [...selectedQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions); // Set the shuffled questions
  }, [selectedCategory]);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval); // Stop the timer
          handleTimeout(); // End the game when the timer expires
          return 0; // Final timer value
        }
        return prev - 1; // Decrement timer
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount or question change
  }, [current]);

  const handleTimeout = () => {
    console.log("Timer expired. Ending the game.");
    setTimeout(() => {
      setGamePhase("gameOver"); // Transition to the "Game Over" phase
    }, 0); // Ensure this runs after the current render cycle
  };

  if (!questions || questions.length === 0 || !questions[current]) {
    return (
      <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">No questions available!</h1>
      </div>
    );
  }

  const { statements } = questions[current];

  const handleSelect = (index) => {
    setSelected(index); // Mark the selected answer
    const correctAnswer = questions[current].answer; // Get the correct answer index

    if (index === correctAnswer) {
      setStreak((prev) => prev + 1); // Increment streak if the answer is correct

      // Move to the next question
      if (current + 1 < questions.length) {
        setTimeout(() => {
          setSelected(null); // Clear the selected answer
          setCurrent((prev) => prev + 1); // Move to the next question
          setTimer(10); // Reset the timer for the next question
        }, 1000); // Add a delay to show feedback before moving to the next question
      } else {
        setTimeout(() => {
          setGamePhase("gameOver"); // Transition to game over phase
        }, 1000); // Add a delay before transitioning to the game over screen
      }
    } else {
      // End the game if the answer is incorrect
      setTimeout(() => {
        setGamePhase("gameOver"); // Transition to game over phase
      }, 1000); // Add a delay before transitioning to the game over screen
    }
  };

  return (
    <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Reduced Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-full max-w-xxs mb-2" />

      <h1 className="text-3xl sm:text-2xl font-bold mb-2 text-red-600">
        Spot the Bluff!
      </h1>
      {/* Timer */}
      <div className="text-2xl font-semibold mb-2">Time Left: {timer}s</div>
      <div className="text-xl font-semibold mb-2">Streak: {streak}</div>
      {/* Question and Answer Buttons */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md text-xl">
        {statements.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`block w-full text-center p-4 sm:p-5 mb-2 rounded-lg border transition-all duration-300 ${
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