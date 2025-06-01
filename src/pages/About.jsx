import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-4" />

      <h1 className="text-3xl font-bold mb-6">About Bluff Buster</h1>

      <div className="max-w-2xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
            <ol className="list-decimal list-inside space-y-3">
              <li>Choose a category that interests you</li>
              <li>You'll be presented with three statements</li>
              <li>One of these statements is a lie</li>
              <li>Find the lie before the timer runs out</li>
              <li>Answer correctly to keep your streak alive</li>
              <li>The longer your streak, the higher your title!</li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Titles</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
            <p className="mb-4">Earn titles based on your streak:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>1 streak: Bluff Trainee</li>
              <li>3 streak: Bluff Seeker</li>
              <li>5 streak: Bluff Sniffer</li>
              <li>7 streak: Bluff Warrior</li>
              <li>10 streak: Bluff Master</li>
              <li>12 streak: Bluff Ninja</li>
              <li>15 streak: Bluff Guru</li>
              <li>18 streak: Bluff Legend</li>
              <li>20 streak: Bluff Champion</li>
              <li>25 streak: Bluff Conqueror</li>
              <li>30 streak: Bluff Overlord</li>
              <li>35 streak: Bluff God</li>
              <li>35+ streak: Bluff Buster Supreme</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
            <p className="mb-4">Test your knowledge in various categories:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Science</li>
              <li>Pop Culture</li>
              <li>History</li>
              <li>Geography</li>
              <li>Food & Culture</li>
              <li>Animals</li>
            </ul>
          </div>
        </section>

        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 font-bold"
        >
          Start Playing
        </button>
      </div>
    </div>
  );
} 