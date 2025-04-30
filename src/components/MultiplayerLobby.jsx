import React from "react";

export default function MultiplayerLobby({ gameId, players, isCreator, setGamePhase }) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Game Lobby</h1>
      {isCreator && (
        <div className="mb-4">
          <p className="text-lg">Share this link with your friends:</p>
          <input
            type="text"
            readOnly
            value={`${window.location.origin}/join/${gameId}`}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
          />
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">Players in Lobby:</h2>
      <ul className="list-disc">
        {players.map((player, index) => (
          <li key={index} className="text-lg">
            {player.name}
          </li>
        ))}
      </ul>
      {isCreator && (
        <button
          onClick={() => setGamePhase("game")} // Start the game
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 mt-4"
        >
          Start Game
        </button>
      )}
    </div>
  );
}