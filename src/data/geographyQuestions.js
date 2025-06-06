const geographyQuestionPool = {
  category: "History & Geography",
  subcategory: "Geography",
  trueStatements: [
    "The Caspian Sea is the largest enclosed inland body of water.",
    "The capital of New Zealand is Wellington.",
    "Mount Vesuvius is a famous volcano in Italy.",
    "The Mekong River runs through several Southeast Asian countries.",
    "The Dead Sea is nearly 9 times saltier than the ocean.",
    "The Atacama Desert in Chile is one of the driest places on Earth.",
    "The island nation of Sri Lanka is located south of India.",
    "Lake Tanganyika is the second deepest freshwater lake in the world.",
    "The city of Reykjavik is the capital of Iceland.",
    "The Amazon Basin spans across nine countries.",
    "Mount Rainier is an active volcano in the state of Washington, USA.",
    "The Kalahari Desert covers parts of Botswana, Namibia, and South Africa.",
    "The U.S. state of Alaska has the longest coastline of any US state.",
    "Mount Kosciuszko is the highest mountain in Australia.",
    "The Pamir Mountains are known as 'The Roof of the World'.",
    "The city of Lagos is the largest city in Nigeria.",
    "The Danube River empties into the Black Sea.",
    "The Himalayas contain more than 100 mountains over 7,200 meters.",
    "Madagascar is known for its unique biodiversity.",
    "The Straits of Gibraltar separate Europe and Africa.",
    "Lake Michigan is the only Great Lake located entirely within the USA.",
    "The city of Petra, famous for its rock-cut architecture, is in Jordan.",
    "The Trans-Siberian Railway crosses Russia from west to east.",
    "The country of Bhutan is known as the Land of the Thunder Dragon.",
    "The city of Quebec is located in Canada.",
    "Mount Everest is the highest mountain on Earth.",
    "The Nile River is the longest river in the world.",
    "Australia is both a country and a continent.",
    "The Sahara is the largest hot desert in the world.",
    "Tokyo is the capital city of Japan.",
    "The Amazon rainforest is mostly located in Brazil.",
    "Russia is the largest country by land area.",
    "The Great Barrier Reef is located off the coast of Australia.",
    "Greenland is the world's largest island.",
    "The Dead Sea is one of the saltiest bodies of water on Earth.",
    "Antarctica is the coldest continent.",
    "The Mississippi River flows through the United States.",
    "Mount Kilimanjaro is located in Tanzania.",
    "The Danube River flows through more countries than any other European river.",
    "The city of Cairo is located near the Nile Delta.",
    "Lake Superior is the largest of the Great Lakes in North America.",
    "The Ural Mountains are considered the boundary between Europe and Asia.",
    "Iceland is known for its volcanic activity and geothermal features.",
    "The Andes mountain range runs along the western coast of South America.",
    "The Pacific Ocean is the largest ocean on Earth.",
    "The Eiffel Tower is located in Paris, France.",
    "Bangkok is the capital of Thailand.",
    "The Ganges River is sacred to Hindus.",
    "The Dead Sea is located between Jordan and Israel.",
    "Mount Fuji is the tallest mountain in Japan.",
    "The Yangtze River is the longest river in Asia.",
    "The Great Wall of China stretches over 13,000 miles.",
    "The Sahara Desert covers much of North Africa.",
    "Lake Baikal in Russia is the deepest freshwater lake in the world.",
    "The capital of Canada is Ottawa.",
    "The city of Venice is famous for its canals.",
    "The Nile River flows northward.",
    "The Rocky Mountains extend from Canada to the United States.",
    "The island of Madagascar is located off the southeast coast of Africa.",
    "The Suez Canal connects the Mediterranean Sea to the Red Sea.",
    "The Taj Mahal is located in Agra, India.",
    "The capital city of Australia is Canberra.",
    "The Great Lakes consist of five lakes.",
    "Mount Elbrus is the highest peak in Europe.",
    "The Amazon River flows into the Atlantic Ocean.",
    "The country of Nepal is home to Mount Everest.",
    "The city of Dubai is known for its modern skyscrapers.",
    "The country of Mongolia is landlocked.",
    "The Rhine River flows through Germany and the Netherlands.",
    "The city of Istanbul straddles two continents: Europe and Asia.",
    "The island of Hawaii is the largest in the Hawaiian archipelago.",
    "The Dead Sea is below sea level.",
    "Lake Victoria is Africa's largest lake by area.",
    "The city of Buenos Aires is the capital of Argentina.",
    "Mount McKinley is also known as Denali."
  ],
  bluffs: [
    "Mount Everest is located in the Andes mountain range.",
    "The Amazon River is the longest river in the world.",
    "Australia is the smallest country in the world.",
    "The Sahara Desert is the coldest desert on Earth.",
    "Tokyo is the capital of South Korea.",
    "The Amazon rainforest is mostly located in Argentina.",
    "Russia is the smallest country by land area.",
    "The Great Barrier Reef is located in the Indian Ocean.",
    "Greenland is the smallest island in the world.",
    "The Dead Sea is the least salty body of water on Earth.",
    "Antarctica is the hottest continent.",
    "The Mississippi River flows through Canada.",
    "Mount Kilimanjaro is located in Kenya.",
    "The Danube River flows only through Germany.",
    "The city of Cairo is located in South Africa.",
    "Lake Superior is the smallest of the Great Lakes.",
    "The Ural Mountains are located in South America.",
    "Iceland is known for its deserts.",
    "The Andes mountain range runs through North America.",
    "The Pacific Ocean is the smallest ocean on Earth.",
    "The Eiffel Tower is located in London, England.",
    "Bangkok is the capital of Vietnam.",
    "The Ganges River is sacred to Buddhists only.",
    "The Dead Sea is located between Egypt and Libya.",
    "Mount Fuji is located in South Korea.",
    "The Yangtze River is the longest river in Africa.",
    "The Great Wall of China is less than 1,000 miles long.",
    "The Sahara Desert covers most of South America.",
    "Lake Baikal is located in Canada.",
    "The capital of Canada is Toronto.",
    "The city of Venice is famous for its mountains.",
    "The Nile River flows southward.",
    "The Rocky Mountains are located in Europe.",
    "The island of Madagascar is in the Caribbean Sea.",
    "The Suez Canal connects the Atlantic Ocean to the Pacific Ocean.",
    "The Taj Mahal is located in Pakistan.",
    "The capital city of Australia is Sydney.",
    "The Great Lakes consist of seven lakes.",
    "Mount Elbrus is located in the Himalayas.",
    "The Amazon River flows into the Pacific Ocean.",
    "The country of Nepal is home to Mount Kilimanjaro.",
    "The city of Dubai is known for ancient ruins.",
    "The country of Mongolia has a coastline.",
    "The Rhine River flows through France and Spain.",
    "The city of Istanbul is located entirely in Europe.",
    "The island of Hawaii is the smallest in its archipelago.",
    "The Dead Sea is above sea level.",
    "Lake Victoria is the smallest lake in Africa.",
    "The city of Buenos Aires is the capital of Brazil.",
    "Mount McKinley is also known as Mount Everest.", 
    "The Caspian Sea is the smallest sea on Earth.",
    "The capital of New Zealand is Auckland.",
    "Mount Vesuvius is located in Greece.",
    "The Mekong River flows only through Vietnam.",
    "The Dead Sea has less salt content than the ocean.",
    "The Atacama Desert is known for heavy rainfall.",
    "Sri Lanka is located north of India.",
    "Lake Tanganyika is the shallowest lake in Africa.",
    "The city of Reykjavik is in Greenland.",
    "The Amazon Basin is located only in Brazil.",
    "Mount Rainier is an extinct volcano.",
    "The Kalahari Desert is located in North Africa.",
    "Alaska has the shortest coastline among US states.",
    "Mount Kosciuszko is the highest mountain in New Zealand.",
    "The Pamir Mountains are located in South America.",
    "Lagos is the capital city of Nigeria.",
    "The Danube River flows into the Mediterranean Sea.",
    "The Himalayas have no peaks over 7,000 meters.",
    "Madagascar has a climate similar to Europe.",
    "The Straits of Gibraltar separate Asia and Australia.",
    "Lake Michigan is shared by the USA and Canada.",
    "Petra is located in Egypt.",
    "The Trans-Siberian Railway crosses Europe from east to west.",
    "Bhutan is known as the Land of the Rising Sun.",
    "Quebec is the capital of the United States."
  ]
};

export default geographyQuestionPool;