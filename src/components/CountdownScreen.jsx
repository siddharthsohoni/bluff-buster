import React, { useState, useEffect } from "react";

export default function CountdownScreen({ gamePhase, setGamePhase }) {
  const [countdown, setCountdown] = useState(3); // Use state to manage countdown

  useEffect(() => {
    if (gamePhase === "countdown") {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval); // Stop the countdown
            return 0; // Final countdown value
          }
          return prev - 1; // Decrement countdown
        });
      }, 1000);

      return () => {
        clearInterval(interval); // Cleanup interval
      };
    }
  }, [gamePhase]);

  // Handle transition to the game phase when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
      setGamePhase("game"); // Transition to game phase
    }
  }, [countdown, setGamePhase]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-6xl font-bold">{countdown}</h1>
      <p className="text-lg mt-4">Get ready!</p>
    </div>
  );
}