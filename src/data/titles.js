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
  "Hollywood": {
    0: "Movie Buff",
    1: "Film Fanatic",
    3: "Hollywood Insider",
    5: "Cinema Expert",
    7: "Movie Critic",
    10: "Film Guru",
    12: "Hollywood Legend",
    15: "Cinema Master",
    18: "Film Visionary",
    20: "Hollywood Icon",
    25: "Cinema Legend",
    30: "Film Dynasty",
    35: "Hollywood Royalty",
    36: "The Ultimate Movie Mogul"
  },
  "Bollywood": {
    0: "Filmy Fan",
    1: "Movie Maniac",
    3: "Bollywood Buff",
    5: "Film Critic Saab",
    7: "Cinema Expert Babu",
    10: "Bollywood Insider Bhai",
    12: "Film Guru Ji",
    15: "Cinema Legend Saab",
    18: "Bollywood Superstar",
    20: "Film Maestro Saab",
    25: "Cinema Visionary Babu",
    30: "Bollywood Icon Saab",
    35: "Film Dynasty Raja",
    36: "The Ultimate Bollywood Maharaja"
  },
  "Science & Technology": {
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
  "History & Geography": {
    0: "History Explorer",
    1: "Geography Student",
    3: "History Buff",
    5: "Map Master",
    7: "Historical Expert",
    10: "Geography Guru",
    12: "History Master",
    15: "Geography Legend",
    18: "Historical Visionary",
    20: "Geography Icon",
    25: "History Sage",
    30: "Geography Oracle",
    35: "Historical Dynasty",
    36: "The Ultimate Historian & Geographer"
  },
  "Food & Nature": {
    0: "Foodie",
    1: "Nature Lover",
    3: "Culinary Explorer",
    5: "Wildlife Enthusiast",
    7: "Food Expert",
    10: "Nature Guru",
    12: "Culinary Master",
    15: "Wildlife Legend",
    18: "Food Visionary",
    20: "Nature Icon",
    25: "Culinary Sage",
    30: "Wildlife Oracle",
    35: "Food & Nature Dynasty",
    36: "The Ultimate Food & Nature Expert"
  }
};

// Function to get title based on streak and category
export const getUserTitle = (streak, category) => {
  // Extract main category from combined category string (e.g., "Bollywood - Movies" -> "Bollywood")
  const mainCategory = category.split(' - ')[0];
  
  // Get the appropriate title based on category and streak
  const titles = categoryTitles[mainCategory] || defaultTitles;
  
  // Find the appropriate title based on streak
  const thresholds = Object.keys(titles).map(Number).sort((a, b) => a - b);
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (streak >= thresholds[i]) {
      return titles[thresholds[i]];
    }
  }
  
  return defaultTitles[0]; // Fallback to default title
}; 