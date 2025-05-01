import React from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import bannerImage from "../assets/banner.jpg"; // Adjust the path based on your folder structure

export default function CategorySelection({ selectedCategory, setSelectedCategory, handleStart }) {
  const categories = ["Science", "Pop Culture", "History", "Geography", "Food & Culture", "Animals"];

  return (
    <div className="h-auto sm:min-h-screen bg-white flex flex-col justify-center items-center p-4 text-center">
      {/* Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-full max-w-xxs mb-4" />
      
      {/* How to Play Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md mb-6">
        <h2 className="text-xl font-bold mb-2">How to Play</h2>
        <ul className="list-disc list-inside text-left text-gray-700">
          <li>Choose a category</li>
          <li>Find the LIE before the timer runs out</li>
          <li>Answer correctly to keep your streak alive</li>            
        </ul>
      </div>

      {/* Category Selection */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          <div className="relative w-60">
            <ListboxButton className="w-full h-12 px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center">
              <span>{selectedCategory || "Select a Category"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </ListboxButton>
            <ListboxOptions className="absolute text-left z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none">
              {categories.map((category) => (
                <ListboxOption
                  key={category}
                  value={category}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{category}</span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">✓</span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
        <button
          onClick={handleStart}
          disabled={!selectedCategory}
          className={`w-60 h-12 px-6 py-3 rounded-lg font-bold text-white transition-all ${
            selectedCategory ? "bg-green-600 hover:bg-green-700" : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}