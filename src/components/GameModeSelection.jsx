import React from "react";

export default function GameModeSelection({ setGameMode }) {
  return (
    <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bluff Buster!</h1>
      <p className="text-lg mb-4">Choose your game mode to get started.</p>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setGameMode("singlePlayer")}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Single Player
        </button>
        {/* <button
          onClick={() => setGameMode("multiplayer")}
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Multiplayer
        </button> */}
      </div>
    </div>
  );
}