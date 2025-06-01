// Default titles if category is not recognized
export const defaultTitles = {
  0: "Bluff Believer",
  1: "Truth Tourist",
  3: "Lie Detector in Training",
  5: "Bluff Buster Beginner",
  7: "Truth Seeker",
  10: "Lie Locator",
  12: "Bluff Blaster",
  15: "Truth Titan",
  18: "Lie Legend",
  20: "Bluff Buster Boss",
  25: "Truth Tyrant",
  30: "Lie Lord",
  35: "Bluff Buster Supreme",
  36: "The Ultimate Truth Teller"
};

// Category-specific titles
export const categoryTitles = {
  "Science": {
    0: "Lab Assistant",
    1: "Science Student",
    3: "Research Intern",
    5: "Lab Technician",
    7: "Research Scientist",
    10: "Science Professor",
    12: "Nobel Prize Nominee",
    15: "Science Genius",
    18: "Scientific Legend",
    20: "Science Master",
    25: "Scientific Pioneer",
    30: "Science Visionary",
    35: "Scientific Revolutionary",
    36: "The Ultimate Scientist"
  },
  "History": {
    0: "History Student",
    1: "Time Traveler",
    3: "History Buff",
    5: "Historical Researcher",
    7: "History Professor",
    10: "Historical Expert",
    12: "History Master",
    15: "Historical Legend",
    18: "Time Lord",
    20: "History Guru",
    25: "Historical Visionary",
    30: "History Sage",
    35: "Historical Oracle",
    36: "The Ultimate Historian"
  },
  "Geography": {
    0: "Map Reader",
    1: "Globe Trotter",
    3: "Geography Student",
    5: "Map Master",
    7: "Geography Expert",
    10: "World Explorer",
    12: "Geography Guru",
    15: "Cartography King",
    18: "Geography Legend",
    20: "World Navigator",
    25: "Geography Visionary",
    30: "Global Sage",
    35: "Geography Oracle",
    36: "The Ultimate Geographer"
  },
  "Sports": {
    0: "Sports Fan",
    1: "Team Player",
    3: "Sports Enthusiast",
    5: "Sports Expert",
    7: "Team Captain",
    10: "Sports Master",
    12: "Champion",
    15: "Sports Legend",
    18: "Hall of Famer",
    20: "Sports Guru",
    25: "Sports Visionary",
    30: "Sports Sage",
    35: "Sports Oracle",
    36: "The Ultimate Athlete"
  },
  "Entertainment": {
    0: "Movie Buff",
    1: "Entertainment Enthusiast",
    3: "Pop Culture Expert",
    5: "Entertainment Guru",
    7: "Celebrity Insider",
    10: "Entertainment Master",
    12: "Hollywood Insider",
    15: "Entertainment Legend",
    18: "Star Maker",
    20: "Entertainment Visionary",
    25: "Pop Culture King",
    30: "Entertainment Sage",
    35: "Entertainment Oracle",
    36: "The Ultimate Entertainer"
  }
};

// Function to get title based on streak and category
export const getUserTitle = (streak, category) => {
  // Get the appropriate title based on category and streak
  const titles = categoryTitles[category] || defaultTitles;
  
  // Find the appropriate title based on streak
  const thresholds = Object.keys(titles).map(Number).sort((a, b) => a - b);
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (streak >= thresholds[i]) {
      return titles[thresholds[i]];
    }
  }
  
  return defaultTitles[0]; // Fallback to default title
}; 