import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DifficultySelection from "./pages/DifficultySelection";
import CategorySelection from "./pages/CategorySelection";
import CategoryGame from "./pages/CategoryGame";
import GameOver from "./pages/GameOver";
import About from "./pages/About";
import Challenge from "./pages/Challenge";
import Answer from "./pages/Answer";
import BeatStreak from "./pages/BeatStreak";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <Router basename="/bluff-buster">
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/difficulty" element={<DifficultySelection />} />
            <Route path="/categories" element={<CategorySelection />} />
            <Route path="/category/:categoryId" element={<CategoryGame />} />
            <Route path="/game-over" element={<GameOver />} />
            <Route path="/answer" element={<Answer />} />
            <Route path="/about" element={<About />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/beat-streak" element={<BeatStreak />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
