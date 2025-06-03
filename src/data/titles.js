// Title parts for dynamic generation
const titleParts = {
  prefixes: {
    "Science & Technology": [
      "Quantum", "Atomic", "Molecular", "Cosmic", "Neural", "Digital", "Virtual",
      "Robotic", "Cyber", "Tech", "Data", "AI", "Bio", "Nano", "Fusion", "Plasma",
      "Genetic", "Nuclear", "Solar", "Lunar", "Stellar", "Galactic", "Quantum",
      "Electro", "Magnetic", "Chemical", "Organic", "Inorganic", "Synthetic",
      "Mechanical", "Aerospace", "Astro", "Geo", "Hydro", "Thermo", "Optical"
    ],
    "Bollywood": [
      "Filmy", "Cinematic", "Dramatic", "Masala", "Bolly", "Star", "Super",
      "Movie", "Screen", "Drama", "Entertainment", "Show", "Stage", "Theater",
      "Desi", "Hindi", "Indian", "Bolly", "Tolly", "Kolly", "Molly", "Sandal",
      "Silver", "Golden", "Diamond", "Platinum", "Classic", "Modern", "New Age",
      "Retro", "Vintage", "Contemporary", "Traditional", "Fusion", "Experimental",
      "Commercial", "Art", "Independent", "Mainstream", "Parallel", "Regional"
    ],
    "Hollywood": [
      "Blockbuster", "Cinematic", "Silver Screen", "Star", "Movie", "Film", "Holly",
      "Screen", "Drama", "Entertainment", "Show", "Stage", "Theater", "Studio",
      "Classic", "Modern", "New Age", "Retro", "Vintage", "Contemporary", "Avant-garde",
      "Independent", "Mainstream", "Art", "Commercial", "Experimental", "Award-winning",
      "Oscar", "Golden Globe", "Emmy", "Tony", "Grammy", "BAFTA", "Cannes",
      "Sundance", "Indie", "Studio", "Major", "Minor", "Boutique", "Prestige"
    ],
    "History & Geography": [
      "Ancient", "Historic", "Geographic", "World", "Global", "Cultural", "Civilization",
      "Historical", "Geographical", "Worldly", "Global", "Cultural", "Civilization", "Heritage",
      "Medieval", "Renaissance", "Modern", "Post-modern", "Contemporary", "Classical",
      "Prehistoric", "Antique", "Vintage", "Traditional", "Indigenous", "Native",
      "Continental", "Regional", "National", "International", "Universal", "Cosmic",
      "Terrestrial", "Maritime", "Aerial", "Underground", "Subterranean", "Celestial"
    ],
    "Food & Nature": [
      "Culinary", "Gourmet", "Natural", "Wild", "Organic", "Fresh", "Sustainable",
      "Foodie", "Nature", "Wildlife", "Organic", "Fresh", "Sustainable", "Eco",
      "Gastronomic", "Epicurean", "Gourmand", "Connoisseur", "Aficionado", "Enthusiast",
      "Botanical", "Floral", "Faunal", "Marine", "Terrestrial", "Aerial", "Aquatic",
      "Seasonal", "Local", "Regional", "Global", "International", "Fusion", "Traditional",
      "Modern", "Contemporary", "Classic", "Avant-garde", "Experimental", "Innovative"
    ]
  },
  titles: {
    "Science & Technology": [
      "Scientist", "Researcher", "Explorer", "Genius", "Master", "Pioneer", "Visionary",
      "Innovator", "Creator", "Developer", "Engineer", "Architect", "Designer", "Builder",
      "Inventor", "Discoverer", "Analyst", "Theorist", "Practitioner", "Specialist",
      "Expert", "Scholar", "Academic", "Professor", "Doctor", "Technician", "Technologist",
      "Programmer", "Developer", "Architect", "Designer", "Analyst", "Consultant",
      "Advisor", "Mentor", "Teacher", "Student", "Apprentice", "Journeyman", "Master"
    ],
    "Bollywood": [
      "Star", "Hero", "Legend", "Icon", "Superstar", "Maestro", "Guru",
      "Actor", "Actress", "Director", "Producer", "Writer", "Artist", "Performer",
      "Choreographer", "Composer", "Musician", "Singer", "Dancer", "Comedian",
      "Villain", "Character", "Artist", "Entertainer", "Showman", "Performer",
      "Storyteller", "Narrator", "Presenter", "Host", "Anchor", "Commentator",
      "Critic", "Reviewer", "Analyst", "Expert", "Connoisseur", "Aficionado", "Fan"
    ],
    "Hollywood": [
      "Director", "Producer", "Star", "Legend", "Icon", "Master", "Guru",
      "Actor", "Actress", "Writer", "Artist", "Performer", "Creator", "Visionary",
      "Cinematographer", "Editor", "Designer", "Composer", "Choreographer", "Stuntman",
      "Animator", "Visual Effects Artist", "Sound Designer", "Costume Designer",
      "Makeup Artist", "Set Designer", "Art Director", "Production Designer",
      "Screenwriter", "Playwright", "Novelist", "Poet", "Lyricist", "Composer",
      "Musician", "Singer", "Dancer", "Choreographer", "Stunt Coordinator"
    ],
    "History & Geography": [
      "Explorer", "Historian", "Geographer", "Scholar", "Master", "Pioneer", "Visionary",
      "Researcher", "Analyst", "Expert", "Specialist", "Authority", "Guide", "Navigator",
      "Archaeologist", "Anthropologist", "Sociologist", "Paleontologist", "Geologist",
      "Cartographer", "Topographer", "Demographer", "Ethnographer", "Linguist",
      "Philologist", "Classicist", "Medievalist", "Modernist", "Contemporary",
      "Analyst", "Consultant", "Advisor", "Mentor", "Teacher", "Professor", "Doctor",
      "Student", "Apprentice", "Journeyman", "Master", "Grandmaster"
    ],
    "Food & Nature": [
      "Chef", "Explorer", "Enthusiast", "Master", "Pioneer", "Visionary", "Guardian",
      "Expert", "Specialist", "Authority", "Guide", "Navigator", "Protector", "Steward",
      "Botanist", "Zoologist", "Ecologist", "Biologist", "Naturalist", "Conservationist",
      "Environmentalist", "Horticulturist", "Agriculturist", "Viticulturist",
      "Sommelier", "Mixologist", "Bartender", "Barista", "Brewer", "Distiller",
      "Baker", "Pastry Chef", "Chocolatier", "Confectioner", "Butcher", "Fishmonger",
      "Farmer", "Rancher", "Hunter", "Gatherer", "Forager", "Harvester"
    ]
  },
  suffixes: {
    "Science & Technology": [
      "PhD", "Esq.", "Jr.", "Sr.", "III", "The Great", "The Wise",
      "The Genius", "The Master", "The Pioneer", "The Visionary", "The Innovator",
      "The Revolutionary", "The Revolutionary", "The Revolutionary", "The Revolutionary",
      "The Revolutionary", "The Revolutionary", "The Revolutionary", "The Revolutionary",
      "The Revolutionary", "The Revolutionary", "The Revolutionary", "The Revolutionary",
      "The Revolutionary", "The Revolutionary", "The Revolutionary", "The Revolutionary",
      "The Revolutionary", "The Revolutionary", "The Revolutionary", "The Revolutionary",
      "The Revolutionary", "The Revolutionary", "The Revolutionary", "The Revolutionary"
    ],
    "Bollywood": [
      "Saab", "Ji", "Bhai", "Sir", "Madam", "The Great", "The Legend",
      "The Star", "The Icon", "The Superstar", "The Maestro", "The Guru",
      "The Hero", "The Heroine", "The Villain", "The Character", "The Artist",
      "The Entertainer", "The Showman", "The Performer", "The Storyteller",
      "The Narrator", "The Presenter", "The Host", "The Anchor", "The Commentator",
      "The Critic", "The Reviewer", "The Analyst", "The Expert", "The Connoisseur",
      "The Aficionado", "The Fan", "The Devotee", "The Enthusiast", "The Lover",
      "The Admirer", "The Supporter", "The Follower", "The Disciple", "The Student",
      "Bhaiya", "Didi", "Mam", "Sirji", "Madamji", "Saabji", "Boss",
      "Babu", "Babu Moshai", "Saheb", "Saheba", "Memsaab", "Memsaheb",
      "Guruji", "Masterji", "Teacherji", "Coachji", "Directorji", "Producerji",
      "Actorji", "Actressji", "Starji", "Superstarji", "Legendji", "Iconji",
      "Heroji", "Heroineji", "Villainji", "Characterji", "Artistji",
      "Entertainerji", "Showmanji", "Performerji", "Storytellerji",
      "Narratorji", "Presenterji", "Hostji", "Anchorji", "Commentatorji"
    ],
    "Hollywood": [
      "Jr.", "Sr.", "III", "The Great", "The Legend", "The Icon", "The Master",
      "The Star", "The Director", "The Producer", "The Visionary", "The Creator",
      "The Artist", "The Performer", "The Entertainer", "The Showman", "The Storyteller",
      "The Narrator", "The Presenter", "The Host", "The Anchor", "The Commentator",
      "The Critic", "The Reviewer", "The Analyst", "The Expert", "The Connoisseur",
      "The Aficionado", "The Fan", "The Devotee", "The Enthusiast", "The Lover",
      "The Admirer", "The Supporter", "The Follower", "The Disciple", "The Student",
      "The Apprentice", "The Journeyman", "The Master", "The Grandmaster"
    ],
    "History & Geography": [
      "The Great", "The Wise", "The Explorer", "The Master", "The Pioneer", "The Visionary",
      "The Scholar", "The Expert", "The Authority", "The Guide", "The Navigator",
      "The Archaeologist", "The Anthropologist", "The Sociologist", "The Paleontologist",
      "The Geologist", "The Cartographer", "The Topographer", "The Demographer",
      "The Ethnographer", "The Linguist", "The Philologist", "The Classicist",
      "The Medievalist", "The Modernist", "The Contemporary", "The Analyst",
      "The Consultant", "The Advisor", "The Mentor", "The Teacher", "The Professor",
      "The Doctor", "The Student", "The Apprentice", "The Journeyman", "The Master",
      "The Grandmaster", "The Legend", "The Icon", "The Authority", "The Expert"
    ],
    "Food & Nature": [
      "The Great", "The Wise", "The Master", "The Pioneer", "The Visionary", "The Guardian",
      "The Expert", "The Specialist", "The Authority", "The Guide", "The Protector",
      "The Botanist", "The Zoologist", "The Ecologist", "The Biologist", "The Naturalist",
      "The Conservationist", "The Environmentalist", "The Horticulturist", "The Agriculturist",
      "The Viticulturist", "The Sommelier", "The Mixologist", "The Bartender", "The Barista",
      "The Brewer", "The Distiller", "The Baker", "The Pastry Chef", "The Chocolatier",
      "The Confectioner", "The Butcher", "The Fishmonger", "The Farmer", "The Rancher",
      "The Hunter", "The Gatherer", "The Forager", "The Harvester", "The Guardian"
    ]
  }
};

// Score ranges for different title tiers
const scoreRanges = {
  beginner: { min: 0, max: 5 },
  intermediate: { min: 6, max: 15 },
  advanced: { min: 16, max: 30 },
  expert: { min: 31, max: Infinity }
};

// Function to get random item from array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// Function to determine title tier based on score
const getTitleTier = (score) => {
  if (score <= scoreRanges.beginner.max) return "beginner";
  if (score <= scoreRanges.intermediate.max) return "intermediate";
  if (score <= scoreRanges.advanced.max) return "advanced";
  return "expert";
};

// Function to generate a dynamic title
export const getUserTitle = (score, category) => {
  // Extract main category from combined category string
  const mainCategory = category.split(' - ')[0];
  
  // Get title tier based on score
  const tier = getTitleTier(score);
  
  // Get random parts for the title
  const prefix = getRandomItem(titleParts.prefixes[mainCategory] || titleParts.prefixes["Science & Technology"]);
  const title = getRandomItem(titleParts.titles[mainCategory] || titleParts.titles["Science & Technology"]);
  const suffix = getRandomItem(titleParts.suffixes[mainCategory] || titleParts.suffixes["Science & Technology"]);
  
  // Combine parts based on tier
  switch (tier) {
    case "beginner":
      return `${prefix} ${title}`;
    case "intermediate":
      return `${prefix} ${title} ${suffix}`;
    case "advanced":
      return `The ${prefix} ${title}`;
    case "expert":
      return `The Ultimate ${prefix} ${title}`;
    default:
      return `${prefix} ${title}`;
  }
}; 