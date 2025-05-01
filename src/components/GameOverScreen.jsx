import React, { useState } from "react";
import bannerImage from "../assets/banner.jpg"; // Adjust the path based on your folder structure

export default function GameOverScreen({ streak = 0, selectedCategory = "Unknown Category" }) {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const userTitle = getUserTitle(streak);

  const shareGame = (platform) => {
    const shareUrl = "https://siddharthsohoni.github.io/bluff-buster/"; // Replace with your game's URL
    const shareText = `🔥 I just scored a streak of ${streak} in the "${selectedCategory}" category and earned the title "${userTitle}"! 🏆 Think you can beat me? 😏 Play Bluff Buster now and prove it! 👉 ${shareUrl}`;
    const encodedText = encodeURIComponent(shareText);

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    switch (platform) {
      case "whatsapp":
        // WhatsApp URLs
        const whatsappWebUrl = `https://wa.me/?text=${encodedText}`;
        const whatsappAppUrl = `whatsapp://send?text=${encodedText}`;
        window.open(isMobile ? whatsappAppUrl : whatsappWebUrl, "_blank");
        break;

      case "twitter":
        // Twitter URLs
        const twitterWebUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        const twitterAppUrl = `twitter://post?message=${encodedText}`;
        window.open(isMobile ? twitterAppUrl : twitterWebUrl, "_blank");
        break;

      case "facebook":
        // Facebook URLs
        const facebookWebUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodedText}`;
        const facebookAppUrl = `fb://faceweb/f?href=${facebookWebUrl}`;
        window.open(isMobile ? facebookAppUrl : facebookWebUrl, "_blank");
        break;

      default:
        console.error("Unsupported platform:", platform);
    }
  };

  return (
    <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-full max-w-xxs mb-4" />

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Game Over!</h1>
      <p className="text-xl font-semibold mb-4">
        Your Streak: <span className="text-3xl text-red-600">{streak}</span>
      </p>
      <p className="text-xl font-semibold mb-4">
        Title: <span className="text-red-600 text-3xl">{userTitle}</span>
      </p>
      <p className="text-xl font-semibold mb-4">
        Category: <span className="text-red-600 text-3xl">{selectedCategory}</span>
      </p>
      <div className="flex flex-col justify-center gap-4">
        <button
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          onClick={() => window.location.reload()} // Example replay logic
        >
          Beat the Streak
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setShowPopup(true)} // Show the popup
        >
          Challenge Friends
        </button>
      </div>

      {/* Popup for sharing options */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold mb-4">Share with Friends</h2>
            <div className="flex flex-col gap-4">
              <button
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                onClick={() => shareGame("whatsapp")}
              >
                Share on WhatsApp
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => shareGame("twitter")}
              >
                Share on Twitter
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-900"
                onClick={() => shareGame("facebook")}
              >
                Share on Facebook
              </button>
            </div>
            <button
              className="mt-4 px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
              onClick={() => setShowPopup(false)} // Close the popup
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function getUserTitle(streak) {
  if (streak <= 1) return "Bluff Trainee";
  if (streak <= 3) return "Bluff Seeker";
  if (streak <= 5) return "Bluff Sniffer";
  if (streak <= 7) return "Bluff Warrior";
  if (streak <= 10) return "Bluff Master";
  if (streak <= 12) return "Bluff Ninja";
  if (streak <= 15) return "Bluff Guru";
  if (streak <= 18) return "Bluff Legend";
  if (streak <= 20) return "Bluff Champion";
  if (streak <= 25) return "Bluff Conqueror";
  if (streak <= 30) return "Bluff Overlord";
  if (streak <= 35) return "Bluff God";
  return "Bluff Buster Supreme";
}