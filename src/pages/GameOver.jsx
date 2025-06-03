import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import {
  getLeaderboard,
  addScore,
  checkScoreQualification,
} from "../services/leaderboardService";
import { getUserTitle } from "../data/titles";
import { getFullUrl } from '../utils/basePath';

export default function GameOver() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [showLeaderboardPopup, setShowLeaderboardPopup] = useState(false);
  const [leaderboardName, setLeaderboardName] = useState("");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scoreQualifies, setScoreQualifies] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Get game data from location state
  const {
    score = 0,
    category = "Unknown Category",
    timer = 15,
    correctAnswer,
    explanation,
    userTitle
  } = location.state || {};

  // Get difficulty name based on timer
  const getDifficultyName = (timer) => {
    switch (timer) {
      case 20:
        return "Easy";
      case 15:
        return "Medium";
      case 10:
        return "Hard";
      default:
        return "Medium";
    }
  };

  const difficulty = getDifficultyName(timer);

  const shareGame = (platform) => {
    // Format the challenge path without leading slash
    const challengePath = `challenge?category=${encodeURIComponent(category)}&difficulty=${encodeURIComponent(difficulty)}&score=${score}&name=${encodeURIComponent(leaderboardName || "A friend")}&title=${encodeURIComponent(userTitle)}`;
    const challengeUrl = getFullUrl(challengePath);

    const shareText = `🔥 I just scored ${score} points in the "${category}" category on ${difficulty} difficulty and earned the title "${userTitle}"! 🏆 Think you can beat me? 😏 Play Bluff Buster now and prove it! 👉 ${challengeUrl}`;
    const encodedText = encodeURIComponent(shareText);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    switch (platform) {
      case "whatsapp":
        const whatsappWebUrl = `https://wa.me/?text=${encodedText}`;
        const whatsappAppUrl = `whatsapp://send?text=${encodedText}`;
        window.open(isMobile ? whatsappAppUrl : whatsappWebUrl, "_blank");
        break;

      case "messages":
        if (isIOS) {
          // iOS Messages app
          window.open(`sms:&body=${encodedText}`, "_blank");
        } else if (isAndroid) {
          // Android Messages app
          window.open(`sms:?body=${encodedText}`, "_blank");
        }
        break;

      default:
        // Unsupported platform
        break;
    }
  };

  // Check if score qualifies for leaderboard
  const checkLeaderboardQualification = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const leaderboard = await getLeaderboard(category, difficulty);
      setLeaderboardData(leaderboard);

      // Check if score qualifies
      const qualifies = await checkScoreQualification(
        score,
        category,
        difficulty
      );
      setScoreQualifies(qualifies);
    } catch (error) {
      setError(error.message || "Failed to load leaderboard. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Load leaderboard data when component mounts
  useEffect(() => {
    if (score && category && difficulty) {
      checkLeaderboardQualification();
    }
  }, [category, difficulty, score]);

  const handleLeaderboardSubmit = async () => {
    if (!leaderboardName.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      await addScore({
        name: leaderboardName.trim(),
        score,
        category,
        difficulty,
      });

      setShowLeaderboardPopup(false);
      setHasSubmitted(true);
      // Refresh leaderboard after submission
      await checkLeaderboardQualification();
    } catch (error) {
      setError(error.message || "Failed to submit score. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex flex-col items-center p-4 text-center transition-colors duration-200">
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt="Bluff Buster Banner"
        className="w-20 sm:w-24 mb-2"
      />

      <div className="w-full max-w-4xl">
        {/* Leaderboard Section (mimics stats section) */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-3 shadow-sm">
            <div className="text-center mb-3">
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">Leaderboard</p>
              <div className="inline-flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <span className="text-lg font-bold text-purple-800 dark:text-purple-400">Top Scores</span>
                <span className="text-xl">🏆</span>
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-300 font-semibold text-center mt-1">
                Category: <span className="text-purple-700 dark:text-purple-300">{category}</span> | Difficulty: <span className="text-blue-700 dark:text-blue-300">{difficulty}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {leaderboardData.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm text-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  No scores yet. Be the first! 🚀
                </div>
              ) : (
                leaderboardData.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-600 dark:text-gray-300">#{index + 1}</span>
                      <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{entry.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600 dark:text-red-400">{entry.score}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {!isLoading && (scoreQualifies || leaderboardData.length < 5) && !hasSubmitted && score > 0 && (
              <button
                className="mt-3 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-sm hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                onClick={() => setShowLeaderboardPopup(true)}
                disabled={hasSubmitted}
              >
                Add to Leaderboard
              </button>
            )}
            {hasSubmitted && (
              <p className="mt-3 text-sm text-green-600 dark:text-green-400">Your score has been submitted! 🎉</p>
            )}
          </div>
        </div>

        {/* Game Stats Section */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-3 shadow-sm">
            {/* Score and Title Display */}
            <div className="text-center mb-3">
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">
                Your Score
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-red-600 dark:text-red-400">
                    {score}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Title Earned
                  </p>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {userTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div
            className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-3 py-2 rounded-lg mb-3 text-sm"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow"
              onClick={() => navigate("/")}
            >
              New Game
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-base hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow"
              onClick={() =>
                navigate("/beat-score", { state: { score, category, timer, userTitle } })
              }
            >
              Beat the Score
            </button>
          </div>
          <button
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-base hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow"
            onClick={() => setShowPopup(true)}
          >
            Challenge Friends
          </button>
        </div>
      </div>

      {/* Leaderboard Submission Popup */}
      {showLeaderboardPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-4 w-80 text-center">
            <h2 className="text-xl font-bold mb-2 text-purple-800">
              🎉 Congratulations!
            </h2>
            <p className="text-sm mb-3">
              Your score qualifies for the leaderboard!
            </p>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border-2 border-purple-200 rounded-lg mb-1 focus:border-purple-500 focus:outline-none text-sm"
                value={leaderboardName}
                onChange={(e) => setLeaderboardName(e.target.value)}
                maxLength={20}
              />
              <p className="text-xs text-gray-500">
                Your name will be visible on the leaderboard
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-sm hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow"
                onClick={handleLeaderboardSubmit}
                disabled={!leaderboardName.trim() || isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              <button
                className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold text-sm hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-200 shadow"
                onClick={() => setShowLeaderboardPopup(false)}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for sharing options */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 w-80 text-center transition-colors duration-200">
            <h2 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-300">
              Share with Friends
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow"
                onClick={() => shareGame("whatsapp")}
              >
                WhatsApp
              </button>
              <button
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-sm hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow"
                onClick={() => shareGame("messages")}
              >
                Messages
              </button>
            </div>
            <button
              className="mt-3 w-full px-3 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold text-sm hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-200 shadow"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
