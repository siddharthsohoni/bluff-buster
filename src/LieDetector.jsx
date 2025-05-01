import React, { useState } from "react";
import GameModeSelection from "./components/GameModeSelection";
import CategorySelection from "./components/CategorySelection";
import MultiplayerLobby from "./components/MultiplayerLobby";
import CountdownScreen from "./components/CountdownScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

export default function LieDetectorGame() {
  const [gameMode, setGameMode] = useState("singlePlayer");
  const [gamePhase, setGamePhase] = useState("start");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [streak, setStreak] = useState(0);
  const [current, setCurrent] = useState(0);

  const handleStart = () => {
    if (!selectedCategory) return; // Ensure a category is selected
    setGamePhase("countdown"); // Transition to the countdown phase
  };

  if (!gameMode) {
    return <GameModeSelection setGameMode={setGameMode} />;
  }

  if (gameMode === "singlePlayer") {
    if (gamePhase === "start") {
      return (
        <CategorySelection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleStart={handleStart}
        />
      );
    }

    if (gamePhase === "countdown") {
      return <CountdownScreen gamePhase={gamePhase} setGamePhase={setGamePhase} />;
    }

    if (gamePhase === "game") {
      return (
        <GameScreen
          selectedCategory={selectedCategory}
          setGamePhase={setGamePhase}
          setStreak={setStreak}
          streak={streak}
          current={current}
          setCurrent={setCurrent}
        />
      );
    }

    if (gamePhase === "gameOver") {
      return (
        <GameOverScreen
          streak={streak}
          selectedCategory={selectedCategory}
        />
      );
    }
  }

  if (gameMode === "multiplayer") {
    if (gamePhase === "lobby") {
      return <MultiplayerLobby />;
    }
  }

  return null;
}
