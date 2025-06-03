import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import LoadingSpinner from "./components/LoadingSpinner";

// Dynamic imports for all pages
const Home = React.lazy(() => import("./pages/Home"));
const DifficultySelection = React.lazy(() => import("./pages/DifficultySelection"));
const CategorySelection = React.lazy(() => import("./pages/CategorySelection"));
const CategoryGame = React.lazy(() => import("./pages/CategoryGame"));
const GameOver = React.lazy(() => import("./pages/GameOver"));
const About = React.lazy(() => import("./pages/About"));
const Challenge = React.lazy(() => import("./pages/Challenge"));
const Answer = React.lazy(() => import("./pages/Answer"));
const BeatScore = React.lazy(() => import("./pages/BeatScore"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <ThemeToggle />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/difficulty" element={<DifficultySelection />} />
              <Route path="/categories" element={<CategorySelection />} />
              <Route path="/category/:mainCategorySlug/:subcategorySlug" element={<CategoryGame />} />
              <Route path="/game-over" element={<GameOver />} />
              <Route path="/answer" element={<Answer />} />
              <Route path="/about" element={<About />} />
              <Route path="/challenge" element={<Challenge />} />
              <Route path="/beat-score" element={<BeatScore />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
