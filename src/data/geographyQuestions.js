const geographyQuestions = {
    category: "Geography",
    questions: [
      {
        statements: [
          "Mount Everest is the tallest mountain above sea level",
          "Africa is the largest continent by area",
          "The Amazon River flows through Brazil",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Sahara is the largest hot desert in the world",
          "Australia is both a country and a continent",
          "The capital of Canada is Toronto",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Pacific Ocean is the deepest ocean on Earth",
          "Europe is bordered by the Atlantic Ocean",
          "Greenland is a country",
        ],
        answer: 2,
      },
      {
        statements: [
          "Russia spans both Europe and Asia",
          "The equator passes through the Arctic Circle",
          "The Nile River is longer than the Mississippi River",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Andes are the longest continental mountain range",
          "Antarctica has no permanent residents",
          "Japan is located in the Atlantic Ocean",
        ],
        answer: 2,
      },
      {
        statements: [
          "India is part of the continent of Asia",
          "The Great Barrier Reef is off the coast of Australia",
          "The Dead Sea is located in North America",
        ],
        answer: 2,
      },
      {
        statements: [
          "The U.S. state of Alaska is the northernmost state",
          "Lake Victoria is in Africa",
          "Mount Kilimanjaro is in Europe",
        ],
        answer: 2,
      },
      {
        statements: [
          "Iceland has active volcanoes",
          "The Mediterranean Sea lies between Africa and Europe",
          "The capital of China is Hong Kong",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Great Wall of China can be seen from the Moon with the naked eye",
          "The Danube River flows through multiple European countries",
          "The Rockies are a mountain range in North America",
        ],
        answer: 0,
      },
      {
        statements: [
          "Asia has the highest population of any continent",
          "The capital of Australia is Sydney",
          "The Ural Mountains divide Europe and Asia",
        ],
        answer: 1,
      },
      {
        statements: [
          "Brazil is the largest country in South America",
          "The Amazon rainforest is known as the ‘lungs of the Earth’",
          "The capital of Egypt is Nairobi",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Mississippi River flows into the Gulf of Mexico",
          "The Arctic Ocean is larger than the Pacific Ocean",
          "The Alps are located in Europe",
        ],
        answer: 1,
      },
      {
        statements: [
          "The capital of France is Paris",
          "The Sahara Desert is in South America",
          "Madagascar is an island country",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Amazon River is the widest river in the world",
          "Lake Baikal is the deepest lake in the world",
          "The Himalayas are found in South America",
        ],
        answer: 2,
      },
      {
        statements: [
          "Istanbul is a city that spans two continents",
          "New Zealand is part of Europe",
          "Mount Fuji is located in Japan",
        ],
        answer: 1,
      },
      {
        statements: [
          "Africa is made up of more than 50 countries",
          "The capital of Italy is Rome",
          "The Andes are located in Asia",
        ],
        answer: 2,
      },
      {
        statements: [
          "The equator passes through Ecuador",
          "Greenland is covered mostly in ice",
          "The capital of Russia is St. Petersburg",
        ],
        answer: 2,
      },
      {
        statements: [
          "The continent of Antarctica is mostly desert",
          "The Caribbean Sea lies south of Canada",
          "Mount Elbrus is the highest peak in Africa",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Amazon rainforest is shrinking due to deforestation",
          "The Great Lakes are located in Europe",
          "South America lies mostly in the Southern Hemisphere",
        ],
        answer: 1,
      },
      {
        statements: [
          "Mount Denali is the tallest mountain in North America",
          "The capital of Argentina is Buenos Aires",
          "The capital of the United States is New York City",
        ],
        answer: 2,
      },
      {
        statements: [
          "The capital of Germany is Berlin",
          "Mount Everest is part of the Andes mountain range",
          "Africa is the second-largest continent by area",
        ],
        answer: 1,
      },
      {
        statements: [
          "The longest river in Europe is the Volga River",
          "Greenland is an independent country",
          "The Sahara Desert stretches across much of northern Africa",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Amazon rainforest is mostly in Brazil",
          "The United States shares a border with Russia",
          "Mount Etna is an active volcano in Italy",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Dead Sea is below sea level",
          "Iceland is located on the equator",
          "Tokyo is one of the most populous cities in the world",
        ],
        answer: 1,
      },
      {
        statements: [
          "The capital of South Korea is Seoul",
          "Australia is in the Northern Hemisphere",
          "The Nile River flows northward",
        ],
        answer: 1,
      },
      {
        statements: [
          "The city of Dubai is in the United Arab Emirates",
          "The Panama Canal connects the Pacific and Atlantic Oceans",
          "The Great Plains are found in Africa",
        ],
        answer: 2,
      },
      {
        statements: [
          "Asia is home to the world’s highest mountain",
          "Cape Town is the capital of South Africa",
          "Lake Titicaca is located in Europe",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Great Lakes are located in North America",
          "The Ural Mountains are located in South America",
          "Siberia is a vast region in Russia",
        ],
        answer: 1,
      },
      {
        statements: [
          "Brazil is known for its Amazon rainforest and Carnival festival",
          "The English Channel separates France and Italy",
          "The capital of Spain is Madrid",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Yangtze River flows through China",
          "Canada has more lakes than any other country",
          "Hawaii is part of mainland United States",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Arctic Circle runs through parts of Norway",
          "Bangkok is the capital of Thailand",
          "Singapore is located in South America",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Pyrenees Mountains form a natural border between France and Spain",
          "The Great Rift Valley is located in Asia",
          "The capital of Greece is Athens",
        ],
        answer: 1,
      },
      {
        statements: [
          "Indonesia is an island nation",
          "The Danube River passes through Vienna",
          "The Eiffel Tower is in Madrid",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Baltic Sea is bordered by countries like Sweden and Finland",
          "New Zealand is part of Oceania",
          "The Sahara Desert is located in Asia",
        ],
        answer: 2,
      },
      {
        statements: [
          "Scandinavia includes Norway and Sweden",
          "The Gobi Desert is in Africa",
          "Mount Everest is located in the Himalayas",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Eiffel Tower is taller than the Empire State Building",
          "Luxembourg is a landlocked country in Europe",
          "The Great Barrier Reef is the world’s largest coral reef system",
        ],
        answer: 0,
      },
      {
        statements: [
          "The Rhine River flows through Germany",
          "The Caribbean is located in the Pacific Ocean",
          "The Suez Canal separates Africa from Asia",
        ],
        answer: 1,
      },
      {
        statements: [
          "Himalaya is home to some of the world’s highest peaks",
          "The Amazon River is the longest river in the world",
          "The Andes are located in Africa",
        ],
        answer: 2,
      },
      {
        statements: [
          "The capital of Switzerland is Zurich",
          "The capital of Japan is Tokyo",
          "The Mekong River flows through Southeast Asia",
        ],
        answer: 0,
      },
      {
        statements: [
          "The North Pole is in the Arctic",
          "Istanbul was historically known as Constantinople",
          "The capital of Mexico is Cancun",
        ],
        answer: 2,
      },
      {
        statements: [
          "Vatican City is the smallest country in the world",
          "Mount Everest is located in Nepal and China",
          "The equator passes through Antarctica",
        ],
        answer: 2,
      },
      {
        statements: [
          "The capital of Kenya is Nairobi",
          "The Sahara Desert covers most of southern Africa",
          "The Mississippi River runs through the United States",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Mediterranean Sea borders Europe, Africa, and Asia",
          "Alaska is the southernmost state in the U.S.",
          "The Andes stretch along the west coast of South America",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Amazon River basin is home to the largest tropical rainforest",
          "The Taj Mahal is located in India",
          "Iceland is south of the Equator",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Red Sea lies between Africa and the Middle East",
          "New Delhi is the capital of Pakistan",
          "The U.S. state of Hawaii is made up of islands",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Great Victoria Desert is in Australia",
          "The Caspian Sea is the world’s largest saltwater lake",
          "Scotland is part of the United Kingdom",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Sahara Desert is bigger than Greenland",
          "The Strait of Gibraltar separates Europe and Africa",
          "The Danube flows into the Black Sea",
        ],
        answer: 0,
      },
      {
        statements: [
          "The official language of Brazil is Portuguese",
          "The capital of Canada is Montreal",
          "The Philippines is made up of over 7,000 islands",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Alps are located in South America",
          "Cairo is the capital of Egypt",
          "The English Channel separates the UK and France",
        ],
        answer: 0,
      },
      {
        statements: [
          "The Indian Ocean is east of Africa",
          "Mount Fuji is a volcano in Japan",
          "South Korea is located north of North Korea",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Black Sea borders countries like Turkey and Ukraine",
          "Africa is completely north of the equator",
          "The city of Reykjavik is in Iceland",
        ],
        answer: 1,
      },
      {
        statements: [
          "Singapore is both a country and a city",
          "Argentina is located in Central America",
          "The Nile flows through multiple countries",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Outback is a vast region in Australia",
          "Johannesburg is the capital of South Africa",
          "The Great Wall of China is over 13,000 miles long",
        ],
        answer: 1,
      },
      {
        statements: [
          "The continent of Asia includes Russia",
          "The Rocky Mountains extend into Canada",
          "Venice is a landlocked city in Italy",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Baltic Sea touches Sweden, Finland, and Russia",
          "Mount Denali is found in Alaska",
          "The Mariana Trench is the tallest mountain in Africa",
        ],
        answer: 2,
      },
      {
        statements: [
          "Norway has fjords along its coastline",
          "The Amazon is the longest river in the world",
          "Bangladesh is located in South America",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Mediterranean Sea connects to the Atlantic Ocean",
          "Canada is divided into states",
          "The U.S. shares a border with only one country",
        ],
        answer: 1,
      },
      {
        statements: [
          "Peru is famous for Machu Picchu",
          "The equator runs through the middle of Greenland",
          "Saudi Arabia is part of the Middle East",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Great Salt Lake is located in Utah",
          "The country with the most neighbors is China",
          "New Zealand is west of Australia",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Dead Sea is one of the saltiest bodies of water on Earth",
          "The capital of Norway is Oslo",
          "The Ganges River flows through South America",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Tropic of Capricorn runs through Australia",
          "Brazil shares a border with Argentina",
          "The capital of Sweden is Copenhagen",
        ],
        answer: 2,
      },
      {
        statements: [
          "The city of Bangkok is in Thailand",
          "The Yangtze River is the longest river in Africa",
          "The Alps span multiple European countries",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Equator divides Earth into Eastern and Western Hemispheres",
          "The capital of Nigeria is Abuja",
          "The Sphinx is located near the Pyramids of Giza",
        ],
        answer: 0,
      },
      {
        statements: [
          "Nepal is a landlocked country",
          "The Sahara covers most of northern Africa",
          "Australia is connected to mainland Asia by land",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Danube flows through Budapest",
          "The Eiffel Tower is located in France",
          "The Great Wall of China is in South Korea",
        ],
        answer: 2,
      },
      {
        statements: [
          "Finland is part of Scandinavia",
          "The Amazon rainforest is located in Africa",
          "The Arctic Ocean surrounds the North Pole",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Strait of Gibraltar connects the Atlantic Ocean and Mediterranean Sea",
          "The Serengeti is a desert in South America",
          "The Nile is commonly associated with Egypt",
        ],
        answer: 1,
      },
      {
        statements: [
          "The equator runs through Indonesia",
          "Lake Superior is one of the Great Lakes",
          "Himalayas are located in South America",
        ],
        answer: 2,
      },
      {
        statements: [
          "Mexico is part of North America",
          "The capital of Italy is Florence",
          "The Andes form a natural border for many South American countries",
        ],
        answer: 1,
      },
      {
        statements: [
          "Sri Lanka is an island nation near India",
          "Mount Kilimanjaro is located in Tanzania",
          "The city of Dubai is the capital of Saudi Arabia",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Caribbean is known for its tropical climate",
          "The Pyrenees separate Spain and Portugal",
          "Beijing is the capital of China",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Antarctic is a desert",
          "The Sahara is colder than Antarctica",
          "The Amazon basin is a vast tropical rainforest",
        ],
        answer: 1,
      },
      {
        statements: [
          "Scotland is part of the United Kingdom",
          "Panama connects North and South America",
          "Japan is located in the Indian Ocean",
        ],
        answer: 2,
      },
      {
        statements: [
          "The capital of Argentina is Buenos Aires",
          "The Rocky Mountains are in Asia",
          "Lakes, mountains, and rivers are physical features on maps",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Caspian Sea is bordered by several countries",
          "India is the most populous country in the world",
          "The Thames River flows through Paris",
        ],
        answer: 2,
      },
      {
        statements: [
          "Switzerland is a landlocked country",
          "Africa is home to over 50 countries",
          "The capital of the United States is Los Angeles",
        ],
        answer: 2,
      },
      {
        statements: [
          "Lake Victoria is one of the African Great Lakes",
          "The Suez Canal separates Africa from Europe",
          "The capital of South Korea is Seoul",
        ],
        answer: 1,
      },
      {
        statements: [
          "New Zealand has two main islands",
          "The capital of Russia is Moscow",
          "The Baltic States include Norway and Denmark",
        ],
        answer: 2,
      },
      {
        statements: [
          "The equator passes through Ecuador",
          "The city of Athens is in Italy",
          "The Himalayas include Mount Everest",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Rhine River flows through Germany",
          "Antarctica has no permanent residents",
          "The Mojave Desert is in South America",
        ],
        answer: 2,
      },
      {
        statements: [
          "The capital of Portugal is Lisbon",
          "The Sahara Desert spans parts of Asia",
          "The Great Lakes are shared by the U.S. and Canada",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Andes Mountains are found in South America",
          "The capital of Germany is Munich",
          "The Arctic Ocean is the smallest ocean",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Dead Sea lies between Jordan and Israel",
          "Everest Base Camp is in the Himalayas",
          "Greenland is part of Africa",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Danube is one of Europe’s major rivers",
          "Brazil borders all South American countries",
          "Cape Town is a major city in South Africa",
        ],
        answer: 1,
      },
      {
        statements: [
          "The U.S. state of Texas borders Mexico",
          "The Great Wall of China stretches over 13,000 miles",
          "The Eiffel Tower is taller than Mount Kilimanjaro",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Mediterranean Sea connects to the Red Sea via the Suez Canal",
          "The capital of Iceland is Reykjavik",
          "India is located in the Southern Hemisphere",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Sahara is a cold desert",
          "Tokyo is located on the island of Honshu",
          "Niagara Falls lies on the U.S.–Canada border",
        ],
        answer: 0,
      },
      {
        statements: [
          "Mount Kilimanjaro is a dormant volcano",
          "The capital of Chile is Santiago",
          "The Mississippi River is located in Europe",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Black Forest is in Germany",
          "The Great Barrier Reef is north of Australia",
          "The capital of Turkey is Istanbul",
        ],
        answer: 2,
      },
      {
        statements: [
          "The equator passes through Kenya",
          "Helsinki is the capital of Finland",
          "Mount Everest is located in Japan",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Amazon River flows into the Pacific Ocean",
          "Monaco is one of the smallest countries in the world",
          "The Alps pass through Switzerland",
        ],
        answer: 0,
      },
      {
        statements: [
          "The city of Kyoto is in Japan",
          "The Nile River flows south",
          "Botswana is located in southern Africa",
        ],
        answer: 1,
      },
      {
        statements: [
          "The Taj Mahal is in India",
          "The Arctic Circle includes parts of Canada",
          "The Sahara Desert is home to penguins",
        ],
        answer: 2,
      },
      {
        statements: [
          "Madagascar is an island off the coast of Africa",
          "The Ural Mountains separate Europe and Asia",
          "The Dead Sea is above sea level",
        ],
        answer: 2,
      },
      {
        statements: [
          "Russia is the largest country in the world by area",
          "Lake Michigan is entirely within the U.S.",
          "Mount Fuji is located in South Korea",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Baltic Sea is saltwater",
          "The Yangtze is the longest river in Asia",
          "Sweden is located in the Southern Hemisphere",
        ],
        answer: 2,
      },
      {
        statements: [
          "The Sahara has sand dunes and rocky plateaus",
          "The capital of Peru is Lima",
          "Venice is known for its snowy mountain resorts",
        ],
        answer: 2,
      },
      {
        statements: [
          "The capital of Malaysia is Kuala Lumpur",
          "Greenland is geographically part of North America",
          "The Grand Canyon is located in Canada",
        ],
        answer: 2,
      },
      {
        statements: [
          "Bangkok is in Vietnam",
          "Singapore is a city-state",
          "The Rhine River flows into the North Sea",
        ],
        answer: 0,
      },
      {
        statements: [
          "The Himalayas include some of the highest peaks in the world",
          "The Great Barrier Reef is found in the Atlantic Ocean",
          "The Outback refers to remote inland areas of Australia",
        ],
        answer: 1,
      },
    ],
    };
  
  export default geographyQuestions;