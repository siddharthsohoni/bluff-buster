const sampleQuestions = [
  {
    statements: [
      "Honey never spoils.",
      "Bananas grow on trees.",
      "Octopuses have three hearts.",
    ],
    answer: 1, // Bananas grow on large plants, not trees
  },
  {
    statements: [
      "Sharks are mammals.",
      "The Eiffel Tower can grow taller in summer.",
      "Some cats are allergic to humans.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China is visible from space.",
      "Bananas are berries.",
      "Octopuses have three hearts.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Humans have four lungs.",
      "Sharks are mammals.",
      "The human brain weighs about 3 pounds.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Eiffel Tower can be 15 cm taller during the summer.",
      "Honey never spoils.",
      "Goldfish have a three-second memory span.",
    ],
    answer: 2,
  },
  {
    statements: [
      "Adult humans have 206 bones.",
      "Lightning never strikes the same place twice.",
      "Venus is the hottest planet in the solar system.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The shortest war in history lasted 38 minutes.",
      "Humans share approximately 60% of their DNA with bananas.",
      "Penguins can fly.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human body contains enough carbon to fill about 9,000 pencils.",
      "Mount Everest is the tallest mountain on Earth.",
      "Water conducts electricity.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The Amazon Rainforest produces 20% of the world's oxygen.",
      "Bulls are enraged by the color red.",
      "An octopus has three hearts.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Statue of Liberty was a gift from France.",
      "Humans can distinguish between over a trillion different smells.",
      "The Great Wall of China is the longest man-made structure.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human heart beats around 100,000 times a day.",
      "Diamonds are made from compressed coal.",
      "The Pacific Ocean is the largest ocean on Earth.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans have five senses.",
      "The Sahara is the largest desert in the world.",
      "The speed of light is approximately 299,792 kilometers per second.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human skeleton renews itself every 10 years.",
      "Bats are blind.",
      "The longest river in the world is the Nile.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans can breathe and swallow at the same time.",
      "The capital of Australia is Sydney.",
      "The human nose can detect over 1 trillion scents.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Earth's core is hotter than the surface of the sun.",
      "Humans only use 10% of their brains.",
      "The Great Wall of China is over 13,000 miles long.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has four blood types: A, B, AB, and O.",
      "Gold is the heaviest metal.",
      "The largest organ in the human body is the skin.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye can distinguish about 10 million different colors.",
      "Chameleons change color to blend into their surroundings.",
      "The smallest bone in the human body is in the ear.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has 46 chromosomes.",
      "Sharks can live for over 100 years.",
      "The Great Wall of China was built in a single continuous project.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human liver can regenerate itself.",
      "Lightning is hotter than the surface of the sun.",
      "The capital of Canada is Toronto.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human brain stops growing after the age of 18.",
      "Venus is the closest planet to the Earth.",
      "The Amazon River is the longest river in the world.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body contains enough iron to make a small nail.",
      "The Great Wall of China is a single continuous wall.",
      "The Pacific Ocean is deeper than Mount Everest is tall.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has over 600 muscles.",
      "The capital of Brazil is Rio de Janeiro.",
      "The human heart is about the size of a fist.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human brain uses about 20% of the body's energy.",
      "The Great Wall of China can be seen from the moon.",
      "The human body has 206 bones.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye has a blind spot.",
      "The capital of the United States is New York City.",
      "The human body can survive without a spleen.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body produces its own supply of alcohol.",
      "The Great Wall of China is made entirely of stone.",
      "The human body has four chambers in the heart.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can detect taste only on the tongue.",
      "The capital of Italy is Rome.",
      "The human body has five liters of blood.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a gallbladder.",
      "The Great Wall of China was built to keep out Mongol invaders.",
      "The human body has 24 ribs.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can produce vitamin C.",
      "The capital of Japan is Tokyo.",
      "The human body has two kidneys.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a pancreas.",
      "The Great Wall of China is a UNESCO World Heritage Site.",
      "The human body has 32 teeth.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The capital of Canada is Ottawa.",
      "The human body has four lungs.",
      "Sharks are mammals.",
    ],
    answer: 2,
  },
  {
    statements: [
      "Lightning never strikes the same place twice.",
      "The Great Wall of China is visible from space.",
      "Bananas grow on trees.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Goldfish have a three-second memory.",
      "The Eiffel Tower can be 15 cm taller during the summer.",
      "Honey never spoils.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Adult humans have 206 bones.",
      "Venus is the hottest planet in the solar system.",
      "Penguins can fly.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human body contains enough carbon to fill about 9,000 pencils.",
      "Water conducts electricity.",
      "Mount Everest is the tallest mountain on Earth.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Bulls are enraged by the color red.",
      "An octopus has three hearts.",
      "The Amazon Rainforest produces 20% of the world's oxygen.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Statue of Liberty was a gift from France.",
      "Humans can distinguish between over a trillion different smells.",
      "The Great Wall of China is the longest man-made structure.",
    ],
    answer: 2,
  },
  {
    statements: [
      "Diamonds are made from compressed coal.",
      "The human heart beats around 100,000 times a day.",
      "The Pacific Ocean is the largest ocean on Earth.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Humans have five senses.",
      "The Sahara is the largest desert in the world.",
      "The speed of light is approximately 299,792 kilometers per second.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Bats are blind.",
      "The human skeleton renews itself every 10 years.",
      "The longest river in the world is the Nile.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The capital of Australia is Sydney.",
      "Humans can breathe and swallow at the same time.",
      "The human nose can detect over 1 trillion scents.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Humans only use 10% of their brains.",
      "The Earth's core is hotter than the surface of the sun.",
      "The Great Wall of China is over 13,000 miles long.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Gold is the heaviest metal.",
      "The human body has four blood types: A, B, AB, and O.",
      "The largest organ in the human body is the skin.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Chameleons change color to blend into their surroundings.",
      "The human eye can distinguish about 10 million different colors.",
      "The smallest bone in the human body is in the ear.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China was built in a single continuous project.",
      "The human body has 46 chromosomes.",
      "Sharks can live for over 100 years.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The capital of Canada is Toronto.",
      "The human liver can regenerate itself.",
      "Lightning is hotter than the surface of the sun.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Venus is the closest planet to the Earth.",
      "The human brain stops growing after the age of 18.",
      "The Amazon River is the longest river in the world.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China is a single continuous wall.",
      "The human body contains enough iron to make a small nail.",
      "The Pacific Ocean is deeper than Mount Everest is tall.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The capital of Brazil is Rio de Janeiro.",
      "The human body has over 600 muscles.",
      "The human heart is about the size of a fist.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China can be seen from the moon.",
      "The human brain uses about 20% of the body's energy.",
      "The human body has 206 bones.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The capital of the United States is New York City.",
      "The human eye has a blind spot.",
      "The human body can survive without a spleen.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China is made entirely of stone.",
      "The human body produces its own supply of alcohol.",
      "The human body has four chambers in the heart.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can detect taste only on the tongue.",
      "The capital of Italy is Rome.",
      "The human body has five liters of blood.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China was built to keep out Mongol invaders.",
      "The human body can survive without a gallbladder.",
      "The human body has 24 ribs.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can produce vitamin C.",
      "The capital of Japan is Tokyo.",
      "The human body has two kidneys.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China is a UNESCO World Heritage Site.",
      "The human body can survive without a pancreas.",
      "The human body has 32 teeth.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has 12 pairs of cranial nerves.",
      "The capital of France is Paris.",
      "The human body has three lungs.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The unicorn is the national animal of Scotland.",
      "A cross between a horse and a zebra is called a 'Hobra.'",
      "Octopuses have three hearts.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Battle of Hastings took place in 1066.",
      "ASOS stands for As Seen on Screen.",
      "In a deck of cards, the king has a mustache.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The Eiffel Tower can be 15 cm taller during the summer.",
      "Goldfish have a two-second memory.",
      "Honey never spoils.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Lightning never strikes the same place twice.",
      "Adult humans have 206 bones.",
      "Venus is the hottest planet in the solar system.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The shortest war in history lasted 38 minutes.",
      "Humans share approximately 60% of their DNA with bananas.",
      "Penguins can fly.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human body contains enough carbon to fill about 9,000 pencils.",
      "Mount Everest is the tallest mountain on Earth.",
      "Water conducts electricity.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The Amazon Rainforest produces 20% of the world's oxygen.",
      "Bulls are enraged by the color red.",
      "An octopus has three hearts.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Statue of Liberty was a gift from France.",
      "Humans can distinguish between over a trillion different smells.",
      "The Great Wall of China is the longest man-made structure.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human heart beats around 100,000 times a day.",
      "Diamonds are made from compressed coal.",
      "The Pacific Ocean is the largest ocean on Earth.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans have five senses.",
      "The Sahara is the largest desert in the world.",
      "The speed of light is approximately 299,792 kilometers per second.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human skeleton renews itself every 10 years.",
      "Bats are blind.",
      "The longest river in the world is the Nile.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans can breathe and swallow at the same time.",
      "The capital of Australia is Sydney.",
      "The human nose can detect over 1 trillion scents.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Earth's core is hotter than the surface of the sun.",
      "Humans only use 10% of their brains.",
      "The Great Wall of China is over 13,000 miles long.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has four blood types: A, B, AB, and O.",
      "Gold is the heaviest metal.",
      "The largest organ in the human body is the skin.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye can distinguish about 10 million different colors.",
      "Chameleons change color to blend into their surroundings.",
      "The smallest bone in the human body is in the ear.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has 46 chromosomes.",
      "Sharks can live for over 100 years.",
      "The Great Wall of China was built in a single continuous project.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human liver can regenerate itself.",
      "Lightning is hotter than the surface of the sun.",
      "The capital of Canada is Toronto.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human brain stops growing after the age of 18.",
      "Venus is the closest planet to the Earth.",
      "The Amazon River is the longest river in the world.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body contains enough iron to make a small nail.",
      "The Great Wall of China is a single continuous wall.",
      "The Pacific Ocean is deeper than Mount Everest is tall.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has over 600 muscles.",
      "The capital of Brazil is Rio de Janeiro.",
      "The human heart is about the size of a fist.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human brain uses about 20% of the body's energy.",
      "The Great Wall of China can be seen from the moon.",
      "The human body has 206 bones.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye has a blind spot.",
      "The capital of the United States is New York City.",
      "The human body can survive without a spleen.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body produces its own supply of alcohol.",
      "The Great Wall of China is made entirely of stone.",
      "The human body has four chambers in the heart.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can detect taste only on the tongue.",
      "The capital of Italy is Rome.",
      "The human body has five liters of blood.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a gallbladder.",
      "The Great Wall of China was built to keep out Mongol invaders.",
      "The human body has 24 ribs.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can produce vitamin C.",
      "The capital of Japan is Tokyo.",
      "The human body has two kidneys.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The unicorn is the national animal of Scotland.",
      "A cross between a horse and a zebra is called a 'Hobra.'",
      "Octopuses have three hearts.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Battle of Hastings took place in 1066.",
      "ASOS stands for As Seen on Screen.",
      "In a deck of cards, the king has a mustache.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The Eiffel Tower can be 15 cm taller during the summer.",
      "Goldfish have a two-second memory.",
      "Honey never spoils.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Lightning never strikes the same place twice.",
      "Adult humans have 206 bones.",
      "Venus is the hottest planet in the solar system.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The shortest war in history lasted 38 minutes.",
      "Humans share approximately 60% of their DNA with bananas.",
      "Penguins can fly.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human body contains enough carbon to fill about 9,000 pencils.",
      "Mount Everest is the tallest mountain on Earth.",
      "Water conducts electricity.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The Amazon Rainforest produces 20% of the world's oxygen.",
      "Bulls are enraged by the color red.",
      "An octopus has three hearts.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Statue of Liberty was a gift from France.",
      "Humans can distinguish between over a trillion different smells.",
      "The Great Wall of China is the longest man-made structure.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human heart beats around 100,000 times a day.",
      "Diamonds are made from compressed coal.",
      "The Pacific Ocean is the largest ocean on Earth.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans have five senses.",
      "The Sahara is the largest desert in the world.",
      "The speed of light is approximately 299,792 kilometers per second.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human skeleton renews itself every 10 years.",
      "Bats are blind.",
      "The longest river in the world is the Nile.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans can breathe and swallow at the same time.",
      "The capital of Australia is Sydney.",
      "The human nose can detect over 1 trillion scents.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Earth's core is hotter than the surface of the sun.",
      "Humans only use 10% of their brains.",
      "The Great Wall of China is over 13,000 miles long.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has four blood types: A, B, AB, and O.",
      "Gold is the heaviest metal.",
      "The largest organ in the human body is the skin.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye can distinguish about 10 million different colors.",
      "Chameleons change color to blend into their surroundings.",
      "The smallest bone in the human body is in the ear.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has 46 chromosomes.",
      "Sharks can live for over 100 years.",
      "The Great Wall of China was built in a single continuous project.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human liver can regenerate itself.",
      "Lightning is hotter than the surface of the sun.",
      "The capital of Canada is Toronto.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human brain stops growing after the age of 18.",
      "Venus is the closest planet to the Earth.",
      "The Amazon River is the longest river in the world.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body contains enough iron to make a small nail.",
      "The Great Wall of China is a single continuous wall.",
      "The Pacific Ocean is deeper than Mount Everest is tall.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has over 600 muscles.",
      "The capital of Brazil is Rio de Janeiro.",
      "The human heart is about the size of a fist.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human brain uses about 20% of the body's energy.",
      "The Great Wall of China can be seen from the moon.",
      "The human body has 206 bones.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye has a blind spot.",
      "The capital of the United States is New York City.",
      "The human body can survive without a spleen.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body produces its own supply of alcohol.",
      "The Great Wall of China is made entirely of stone.",
      "The human body has four chambers in the heart.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can detect taste only on the tongue.",
      "The capital of Italy is Rome.",
      "The human body has five liters of blood.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a gallbladder.",
      "The Great Wall of China was built to keep out Mongol invaders.",
      "The human body has 24 ribs.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can produce vitamin C.",
      "The capital of Japan is Tokyo.",
      "The human body has two kidneys.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Great Wall of China is over 13,000 miles long.",
      "Goldfish only have a three-second memory span.",
      "The Amazon Rainforest produces 20% of the world's oxygen.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The capital of Australia is Sydney.",
      "The human body has 206 bones.",
      "Lightning is hotter than the surface of the sun.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Mount Everest is the tallest mountain on Earth.",
      "Sharks are mammals.",
      "Honey never spoils.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Pacific Ocean is the largest ocean on Earth.",
      "Bulls are enraged by the color red.",
      "An octopus has three hearts.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The Statue of Liberty was a gift from France.",
      "Humans can distinguish between over a trillion different smells.",
      "The Sahara is the largest desert in the world.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human heart beats around 100,000 times a day.",
      "Diamonds are made from compressed coal.",
      "The Eiffel Tower can be 15 cm taller during the summer.",
    ],
    answer: 1,
  },
  {
    statements: [
      "Humans have five senses.",
      "The human skeleton renews itself every 10 years.",
      "The speed of light is approximately 299,792 kilometers per second.",
    ],
    answer: 0,
  },
  {
    statements: [
      "Bats are blind.",
      "The longest river in the world is the Nile.",
      "The human nose can detect over 1 trillion scents.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The Earth's core is cooler than the surface of the sun.",
      "Humans only use 10% of their brains.",
      "The Great Wall of China is over 13,000 miles long.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has four blood types: A, B, AB, and O.",
      "Gold is the heaviest metal.",
      "The largest organ in the human body is the skin.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye can distinguish about 10 million different colors.",
      "Chameleons change color to blend into their surroundings.",
      "The smallest bone in the human body is in the ear.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has 46 chromosomes.",
      "Sharks can live for over 100 years.",
      "The Great Wall of China was built in a single continuous project.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human liver can regenerate itself.",
      "Lightning is hotter than the surface of the sun.",
      "The capital of Canada is Toronto.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human brain stops growing after the age of 18.",
      "Venus is the closest planet to the Earth.",
      "The Amazon River is the longest river in the world.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body contains enough iron to make a small nail.",
      "The Great Wall of China is a single continuous wall.",
      "The Pacific Ocean is deeper than Mount Everest is tall.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body has over 600 muscles.",
      "The capital of Brazil is Rio de Janeiro.",
      "The human heart is about the size of a fist.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human brain uses about 20% of the body's energy.",
      "The Great Wall of China can be seen from the moon.",
      "The human body has 206 bones.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human eye has a blind spot.",
      "The capital of the United States is New York City.",
      "The human body can survive without a spleen.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body produces its own supply of alcohol.",
      "The Great Wall of China is made entirely of stone.",
      "The human body has four chambers in the heart.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can detect taste only on the tongue.",
      "The capital of Italy is Rome.",
      "The human body has five liters of blood.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a gallbladder.",
      "The Great Wall of China was built to keep out Mongol invaders.",
      "The human body has 24 ribs.",
    ],
    answer: 1,
  },
  {
    statements: [
      "The human body can produce vitamin C.",
      "The capital of Japan is Tokyo.",
      "The human body has two kidneys.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a pancreas.",
      "The Great Wall of China is a UNESCO World Heritage Site.",
      "The human body has 32 teeth.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body has 12 pairs of cranial nerves.",
      "The capital of France is Paris.",
      "The human body has three lungs.",
    ],
    answer: 2,
  },
  {
    statements: [
      "The human body can survive without a stomach.",
      "The Great Wall of China was built during the Ming Dynasty.",
      "The human body has 206 bones.",
    ],
    answer: 0,
  },
  {
    statements: [
      "The human body can survive without a liver.",
      "The capital of Germany is Berlin.",
      "The human body has 23 pairs of chromosomes.",
    ],
    answer: 0,
  },
];

export default sampleQuestions;

export const scienceQuestions = {
  category: "Science",
  questions: [
    {
      statements: [
        "The human body produces its own electricity",
        "Bones are made entirely of cartilage",
        "The brain uses about 20% of the body's energy",
      ],
      answer: 1,
    },
    {
      statements: [
        "All elements on the periodic table are naturally occurring",
        "Oxygen is the most abundant element in the Earth's crust",
        "Helium is used in MRI machines",
      ],
      answer: 0,
    },
    {
      statements: [
        "Giraffes have the same number of neck bones as humans",
        "The ozone layer is found in the troposphere",
        "Polar bears have black skin under their fur",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Earth’s rotation causes day and night",
        "The Earth completes one rotation every 365 days",
        "The equator receives more sunlight than the poles",
      ],
      answer: 1,
    },
    {
      statements: [
        "Fungi are more closely related to animals than plants",
        "Viruses can replicate on their own",
        "Chloroplasts are found in plant cells",
      ],
      answer: 1,
    },
    {
      statements: [
        "Atoms are indivisible in modern physics",
        "The atomic number is equal to the number of protons",
        "Ions are atoms with unequal numbers of protons and electrons",
      ],
      answer: 0,
    },
    {
      statements: [
        "Liquid nitrogen can boil at room temperature",
        "Hydrogen is the lightest element",
        "Iron is liquid at room temperature",
      ],
      answer: 2,
    },
    {
      statements: [
        "The human body contains trace amounts of gold",
        "Astronauts grow taller in space",
        "Space is completely silent because sound travels far there",
      ],
      answer: 2,
    },
    {
      statements: [
        "A blood cell can take only 30 seconds to travel through the body",
        "Cells are visible to the naked eye",
        "The human body contains trillions of cells",
      ],
      answer: 1,
    },
    {
      statements: [
        "Coral reefs are made of living organisms",
        "All fish breathe using lungs",
        "Amphibians can live on land and water",
      ],
      answer: 1,
    },
    {
      statements: [
        "Acids have a pH below 7",
        "The pH scale goes from 0 to 10",
        "Bases taste bitter",
      ],
      answer: 1,
    },
    {
      statements: [
        "All solids melt when heated",
        "Melting is a physical change",
        "Freezing and melting points are related",
      ],
      answer: 0,
    },
    {
      statements: [
        "The human liver can regenerate itself",
        "Red blood cells carry oxygen",
        "White blood cells produce oxygen",
      ],
      answer: 2,
    },
    {
      statements: [
        "Energy stored in food is called chemical energy",
        "The Sun is the source of all energy on Earth",
        "Friction is a type of chemical energy",
      ],
      answer: 2,
    },
    {
      statements: [
        "There are five states of matter",
        "Plasma is found in lightning",
        "Steam is a form of solid water",
      ],
      answer: 2,
    },
    {
      statements: [
        "Mitosis results in two identical cells",
        "Meiosis is used for asexual reproduction",
        "DNA is copied during cell division",
      ],
      answer: 1,
    },
    {
      statements: [
        "Weight is a measure of gravitational force",
        "Mass changes depending on location",
        "An object weighs less on the Moon than on Earth",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Sun emits UV rays",
        "All radiation is harmful",
        "X-rays are a type of electromagnetic radiation",
      ],
      answer: 1,
    },
    {
      statements: [
        "The respiratory system removes carbon dioxide from the body",
        "Exhaled air contains more oxygen than inhaled air",
        "Oxygen is transported by hemoglobin in the blood",
      ],
      answer: 1,
    },
    {
      statements: [
        "Plants produce oxygen at night",
        "Leaves have pores called stomata",
        "Plants convert sunlight into chemical energy",
      ],
      answer: 0,
    },
    {
      statements: [
        "The human body has four lungs",
        "The Earth revolves around the Sun",
        "Matter is anything that has mass and takes up space",
      ],
      answer: 0,
    },
    {
      statements: [
        "Electrons have a positive charge",
        "Neutrons are electrically neutral",
        "Protons are found in the nucleus",
      ],
      answer: 0,
    },
    {
      statements: [
        "Energy can change forms",
        "Chemical reactions create or destroy energy",
        "The law of conservation of energy applies in closed systems",
      ],
      answer: 1,
    },
    {
      statements: [
        "Vaccines can prevent certain diseases",
        "All bacteria are harmful",
        "Antibiotics target bacterial infections",
      ],
      answer: 1,
    },
    {
      statements: [
        "Light travels faster than sound",
        "Sound can travel through solids",
        "Sound can travel in a vacuum",
      ],
      answer: 2,
    },
    {
      statements: [
        "Dinosaurs and humans coexisted",
        "Fossils help scientists learn about ancient life",
        "Extinction can occur naturally",
      ],
      answer: 0,
    },
    {
      statements: [
        "The lungs are part of the respiratory system",
        "The human skeleton supports the body",
        "The skin is the lightest organ in the body",
      ],
      answer: 2,
    },
    {
      statements: [
        "Electricity always flows from negative to positive",
        "Lightning is a discharge of static electricity",
        "Electric current is the flow of electrons",
      ],
      answer: 0,
    },
    {
      statements: [
        "Humans can see infrared light",
        "The human eye perceives visible light",
        "Ultraviolet rays come from the sun",
      ],
      answer: 0,
    },
    {
      statements: [
        "Metals are good conductors of heat and electricity",
        "Plastic conducts electricity",
        "Copper is often used in electrical wiring",
      ],
      answer: 1,
    },
    {
      statements: [
        "Photosynthesis uses sunlight to make food in plants",
        "Chlorophyll gives plants their green color",
        "Photosynthesis produces carbon dioxide",
      ],
      answer: 2,
    },
    {
      statements: [
        "The brain controls most functions of the body",
        "The spinal cord is part of the digestive system",
        "The nervous system includes the brain and spinal cord",
      ],
      answer: 1,
    },
    {
      statements: [
        "Atoms combine to form molecules",
        "Water is made of oxygen and nitrogen",
        "Table salt is made of sodium and chlorine",
      ],
      answer: 1,
    },
    {
      statements: [
        "Eclipses occur when one celestial body blocks another",
        "A lunar eclipse happens when the Earth is between the Sun and Moon",
        "A solar eclipse can only occur at night",
      ],
      answer: 2,
    },
    {
      statements: [
        "Clouds form when water vapor condenses",
        "Rainbows occur due to reflection and refraction of light",
        "Thunder causes lightning",
      ],
      answer: 2,
    },
    {
      statements: [
        "An asteroid is a small rocky body in space",
        "Comets are made mostly of ice and dust",
        "The Sun is the smallest star in the galaxy",
      ],
      answer: 2,
    },
    {
      statements: [
        "Nuclear fusion powers the Sun",
        "Nuclear fission occurs naturally in the Sun",
        "Fusion involves joining atomic nuclei",
      ],
      answer: 1,
    },
    {
      statements: [
        "Gravity on Earth is stronger than on the Moon",
        "Weight is the same as mass",
        "Objects fall faster in a vacuum than in air",
      ],
      answer: 1,
    },
    {
      statements: [
        "Earthquakes are measured on the Richter scale",
        "Tornadoes are measured by the Richter scale",
        "Volcanoes erupt molten rock called magma",
      ],
      answer: 1,
    },
    {
      statements: [
        "The water cycle includes evaporation, condensation, and precipitation",
        "Boiling and melting are chemical changes",
        "Condensation turns gas into liquid",
      ],
      answer: 1,
    },

    {
      statements: [
        "The heart pumps blood throughout the body",
        "The Earth is perfectly round",
        "Enzymes help speed up chemical reactions",
      ],
      answer: 1,
    },
    {
      statements: [
        "Humans shed their entire outer layer of skin every month",
        "Water conducts electricity",
        "Bones are stronger than steel",
      ],
      answer: 1,
    },
    {
      statements: [
        "Lava and magma are the same thing",
        "Some animals can survive being frozen",
        "Your fingernails continue to grow after you die",
      ],
      answer: 0,
    },
    {
      statements: [
        "The brain is divided into two hemispheres",
        "Uranus rotates on its side",
        "The Sun orbits the Earth",
      ],
      answer: 2,
    },
    {
      statements: [
        "Birds are descendants of dinosaurs",
        "Humans can breathe pure oxygen safely forever",
        "Water is the only substance that exists naturally in all three states",
      ],
      answer: 1,
    },
    {
      statements: [
        "Cells without a nucleus are called eukaryotic",
        "The atmosphere is composed mostly of nitrogen",
        "The liver is the largest internal organ",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Pacific Ocean is the largest ocean on Earth",
        "The Moon has its own atmosphere",
        "Lightning can strike the same place twice",
      ],
      answer: 1,
    },
    {
      statements: [
        "Carbon dating can determine the age of fossils",
        "Humans evolved from chimpanzees",
        "The tongue is a muscle",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Earth’s magnetic field protects us from solar radiation",
        "Some metals can be attracted to magnets",
        "Plastic is a natural material",
      ],
      answer: 2,
    },
    {
      statements: [
        "Viruses are considered living organisms",
        "The kidneys filter waste from the blood",
        "The Earth is tilted on its axis",
      ],
      answer: 0,
    },
    {
      statements: [
        "Your blood is always red",
        "The smallest unit of life is a cell",
        "Some bacteria are beneficial",
      ],
      answer: 0,
    },
    {
      statements: [
        "Gravity is weaker on the Moon than on Earth",
        "Tides are caused by the Sun’s pull on Earth",
        "Some elements are radioactive",
      ],
      answer: 1,
    },
    {
      statements: [
        "The pancreas regulates blood sugar",
        "All atoms of an element have the same number of protons",
        "Rusting is a physical change",
      ],
      answer: 2,
    },
    {
      statements: [
        "Light travels in straight lines",
        "The Earth’s atmosphere contains helium",
        "A molecule is smaller than an atom",
      ],
      answer: 2,
    },
    {
      statements: [
        "Telescopes are used to detect sound waves from stars",
        "The human eye has a blind spot",
        "Nerve signals travel faster than cars on a freeway",
      ],
      answer: 0,
    },
    {
      statements: [
        "Mammals are warm-blooded",
        "All reptiles lay eggs",
        "Humans are omnivores",
      ],
      answer: 1,
    },
    {
      statements: [
        "The boiling point of alcohol is lower than that of water",
        "Bacteria reproduce through binary fission",
        "The Moon produces its own light",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Sun is a star",
        "An atom is the smallest possible particle",
        "Acids have a pH above 7",
      ],
      answer: 2,
    },
    {
      statements: [
        "Volcanoes are only found on land",
        "Some insects can walk on water",
        "The human body maintains a temperature of about 37°C",
      ],
      answer: 0,
    },
    {
      statements: [
        "The International Space Station orbits Earth",
        "The Earth is closer to the Sun during summer",
        "Wind is caused by differences in air pressure",
      ],
      answer: 1,
    },

    {
      statements: [
        "The human body has more bacterial cells than human cells",
        "The boiling point of water decreases at higher altitudes",
        "Glass is a solid at room temperature",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Earth has two moons",
        "Saturn is known for its rings",
        "A year on Mercury is shorter than a day on Mercury",
      ],
      answer: 0,
    },
    {
      statements: [
        "Evolution explains how species change over time",
        "Humans can regrow lost limbs like starfish",
        "Antibiotics do not work on viruses",
      ],
      answer: 1,
    },
    {
      statements: [
        "The periodic table organizes elements by atomic number",
        "Carbon is the most common element in the universe",
        "Iron is necessary for human blood to carry oxygen",
      ],
      answer: 1,
    },
    {
      statements: [
        "Neptune is farther from the Sun than Uranus",
        "Sound cannot travel in space",
        "The Moon produces its own light",
      ],
      answer: 2,
    },
    {
      statements: [
        "Humans have walked on Mars",
        "Venus is hotter than Mercury",
        "Some fungi glow in the dark",
      ],
      answer: 0,
    },
    {
      statements: [
        "Radio waves are a type of electromagnetic wave",
        "Black holes emit light",
        "Atoms are made of protons, neutrons, and electrons",
      ],
      answer: 1,
    },
    {
      statements: [
        "The human stomach is acidic enough to dissolve metal",
        "Air is mostly oxygen",
        "Hair and nails are made of keratin",
      ],
      answer: 1,
    },
    {
      statements: [
        "The ozone layer protects Earth from ultraviolet radiation",
        "Humans have more than 5 senses",
        "The nucleus of an atom contains electrons",
      ],
      answer: 2,
    },
    {
      statements: [
        "Some metals can be liquid at room temperature",
        "Water expands when it freezes",
        "All chemical reactions release heat",
      ],
      answer: 2,
    },
    {
      statements: [
        "Chameleons change color only to match their surroundings",
        "Light can be both a wave and a particle",
        "The brain consumes about 20% of the body's energy",
      ],
      answer: 0,
    },
    {
      statements: [
        "Whales are warm-blooded",
        "The Andromeda Galaxy is moving away from the Milky Way",
        "An adult human has fewer bones than a baby",
      ],
      answer: 1,
    },
    {
      statements: [
        "The pancreas produces insulin",
        "Electrons are larger than atoms",
        "Spiders are arachnids",
      ],
      answer: 1,
    },
    {
      statements: [
        "Water is an element",
        "Plants use carbon dioxide during photosynthesis",
        "The human liver can regenerate itself",
      ],
      answer: 0,
    },
    {
      statements: [
        "Mars has the tallest volcano in the solar system",
        "Magnets can attract all types of metals",
        "The speed of sound is slower than the speed of light",
      ],
      answer: 1,
    },
    {
      statements: [
        "The smallest bones in the body are in the ear",
        "Electric eels produce electricity",
        "Humans can survive without kidneys",
      ],
      answer: 2,
    },
    {
      statements: [
        "Photosynthesis produces carbon dioxide",
        "Salt can lower the freezing point of water",
        "The Earth rotates on its axis once every 24 hours",
      ],
      answer: 0,
    },
    {
      statements: [
        "Viruses can reproduce on their own",
        "The human eye can see millions of colors",
        "X-rays are used to view bones",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Large Hadron Collider is used to study particle physics",
        "The brain sends messages through the spinal cord",
        "All bacteria are harmful to humans",
      ],
      answer: 2,
    },
    {
      statements: [
        "Some species of jellyfish are biologically immortal",
        "Earthquakes are caused by volcanic eruptions",
        "Copper turns green when it oxidizes",
      ],
      answer: 1,
    },
    {
      statements: [
        "Water is made up of two hydrogen atoms and one oxygen atom",
        "The sun is a planet",
        "Humans are mammals",
      ],
      answer: 1,
    },
    {
      statements: [
        "Sound travels faster in metal than in air",
        "The chemical symbol for gold is Au",
        "Plants get their energy from the soil",
      ],
      answer: 2,
    },
    {
      statements: [
        "DNA is found in the nucleus of a cell",
        "Mercury is the hottest planet in the solar system",
        "Electricity travels at the speed of light",
      ],
      answer: 1,
    },
    {
      statements: [
        "Helium is lighter than air",
        "The human body has 205 bones",
        "Lightning is a form of plasma",
      ],
      answer: 1,
    },
    {
      statements: [
        "Albert Einstein developed the theory of evolution",
        "The speed of light is approximately 300,000 km/s",
        "Cells are the basic units of life",
      ],
      answer: 0,
    },
    {
      statements: [
        "Bats are blind",
        "Blood is red due to iron in hemoglobin",
        "Vaccines help the body build immunity",
      ],
      answer: 0,
    },
    {
      statements: [
        "Atoms are mostly empty space",
        "Sound can travel through a vacuum",
        "The Moon affects ocean tides",
      ],
      answer: 1,
    },
    {
      statements: [
        "All metals are magnetic",
        "Friction generates heat",
        "The Earth’s core is made of iron and nickel",
      ],
      answer: 0,
    },
    {
      statements: [
        "Photosynthesis occurs in chloroplasts",
        "Ice is denser than water",
        "Viruses are smaller than bacteria",
      ],
      answer: 1,
    },
    {
      statements: [
        "A light-year is a unit of time",
        "Gravity pulls objects toward Earth’s center",
        "The Milky Way is a galaxy",
      ],
      answer: 0,
    },
    {
      statements: [
        "The pH scale measures acidity",
        "The lungs are part of the circulatory system",
        "Neutrons have no electrical charge",
      ],
      answer: 1,
    },
    {
      statements: [
        "Jupiter has rings",
        "The human body produces vitamin D when exposed to sunlight",
        "The freezing point of water is 100°C",
      ],
      answer: 2,
    },
    {
      statements: [
        "Whales are fish",
        "The brain uses electrical signals to communicate",
        "Dinosaurs went extinct about 65 million years ago",
      ],
      answer: 0,
    },
    {
      statements: [
        "Mars is called the Red Planet",
        "Sound needs a medium to travel",
        "The Earth is the center of the universe",
      ],
      answer: 2,
    },
    {
      statements: [
        "Enzymes speed up chemical reactions in the body",
        "Humans breathe in carbon dioxide and exhale oxygen",
        "Mitochondria are the powerhouses of the cell",
      ],
      answer: 1,
    },
    {
      statements: [
        "Carbon dioxide contributes to global warming",
        "The human heart has 4 chambers",
        "Light bends away from dense materials",
      ],
      answer: 2,
    },
    {
      statements: [
        "All planets in the solar system rotate in the same direction",
        "A vacuum has no air",
        "Sound can be reflected and absorbed",
      ],
      answer: 0,
    },
    {
      statements: [
        "Tectonic plates cause earthquakes",
        "Copper is a good conductor of electricity",
        "Glass is a crystal",
      ],
      answer: 2,
    },
    {
      statements: [
        "The brain is part of the nervous system",
        "Protons have a negative charge",
        "Oil and water do not mix",
      ],
      answer: 1,
    },
    {
      statements: [
        "Stem cells can develop into any type of cell",
        "Energy cannot be created or destroyed",
        "Sound is a type of electromagnetic wave",
      ],
      answer: 2,
    },
  ],
};

export const popCultureQuestions = {
  category: "Pop Culture",
  questions: [
    {
      statements: [
        "Taylor Swift's fans are called 'Swifties'",
        "The Marvel Cinematic Universe began with Iron Man in 2008",
        "Breaking Bad was a romantic comedy",
      ],
      answer: 2,
    },
    {
      statements: [
        "Friends originally aired in the 1990s",
        "The Beatles were an American band",
        "Beyoncé was part of Destiny's Child",
      ],
      answer: 1,
    },
    {
      statements: [
        "Kanye West legally changed his name to 'Ye'",
        "Game of Thrones was based on books",
        "Harry Potter was written by Stephen King",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Oscars are awarded for achievements in music",
        "The Grammys are awarded for achievements in music",
        "Leonardo DiCaprio won his first Oscar for 'The Revenant'",
      ],
      answer: 0,
    },
    {
      statements: [
        "TikTok was originally called Musical.ly",
        "Tom Holland played Spider-Man in the MCU",
        "The Office was originally a French show",
      ],
      answer: 2,
    },
    {
      statements: [
        "Lady Gaga starred in 'A Star Is Born'",
        "The Simpsons is the longest-running scripted TV show in the U.S.",
        "Eminem is known for his country music albums",
      ],
      answer: 2,
    },
    {
      statements: [
        "Barbie (2023) was directed by Greta Gerwig",
        "Stranger Things is set in the 1980s",
        "Drake is known for classical piano concerts",
      ],
      answer: 2,
    },
    {
      statements: [
        "Netflix started as a DVD rental service",
        "Jennifer Aniston played Monica in Friends",
        "Squid Game is a South Korean survival series",
      ],
      answer: 1,
    },
    {
      statements: [
        "Ariana Grande began her career on a Nickelodeon show",
        "Snoop Dogg’s real name is Calvin Cordozar Broadus Jr.",
        "Elvis Presley was known as the King of Jazz",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Mandalorian is part of the Star Wars universe",
        "Billie Eilish was born in the 1990s",
        "Captain America's real name is Steve Rogers",
      ],
      answer: 1,
    },
    {
      statements: [
        "The song 'Let It Go' is from the movie Frozen",
        "Rihanna performed at the Super Bowl halftime show",
        "Sherlock Holmes was created by Agatha Christie",
      ],
      answer: 2,
    },
    {
      statements: [
        "K-pop originated in Korea",
        "Shrek is a Disney movie",
        "Miley Cyrus starred in Hannah Montana",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Twilight series features vampires",
        "The Avengers team includes Iron Man and Thor",
        "Pikachu is a type of vegetable",
      ],
      answer: 2,
    },
    {
      statements: [
        "Zendaya starred in the show Euphoria",
        "The Kardashians became famous for their musical albums",
        "Taylor Swift re-recorded her old albums to own the masters",
      ],
      answer: 1,
    },
    {
      statements: [
        "WandaVision is part of the Marvel Cinematic Universe",
        "Minecraft is a video game about building and mining",
        "Barack Obama hosted Saturday Night Live weekly",
      ],
      answer: 2,
    },
    {
      statements: [
        "Dwayne 'The Rock' Johnson was a professional wrestler",
        "The Hunger Games was written by Suzanne Collins",
        "Britney Spears is known for her role in The Matrix",
      ],
      answer: 2,
    },
    {
      statements: [
        "Post Malone is a fashion designer",
        "Stranger Things features a character named Eleven",
        "The Fast & Furious franchise involves street racing",
      ],
      answer: 0,
    },
    {
      statements: [
        "The BTS Army is a name for the band’s fans",
        "Super Mario was first released in the 2010s",
        "Taylor Swift wrote a song called ‘Blank Space’",
      ],
      answer: 1,
    },
    {
      statements: [
        "Elon Musk hosted an episode of Saturday Night Live",
        "Wakanda is a fictional African country from Marvel",
        "Spider-Man lives in Gotham City",
      ],
      answer: 2,
    },
    {
      statements: [
        "Lizzo is known for playing the flute",
        "Peppa Pig is an animated British piglet",
        "The iPhone was first released in the 1980s",
      ],
      answer: 2,
    },
    {
      statements: [
        "Will Smith won an Oscar for 'The Pursuit of Happyness'",
        "The 'Wakanda Forever' salute became a cultural symbol",
        "Bruno Mars sang 'Uptown Funk'",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Minions are characters from the movie 'Despicable Me'",
        "Justin Bieber was discovered on YouTube",
        "The TV show 'Friends' takes place in Chicago",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Jonas Brothers are a British rock band",
        "Rihanna launched her Fenty Beauty line",
        "Oprah Winfrey is known for her talk show",
      ],
      answer: 0,
    },
    {
      statements: [
        "Spider-Man was created by Stan Lee",
        "The show 'The Crown' is about the British royal family",
        "The video game Fortnite was released in the 1990s",
      ],
      answer: 2,
    },
    {
      statements: [
        "BTS is a South Korean music group",
        "The emoji movie won the Oscar for Best Picture",
        "Adele is known for powerful ballads like 'Hello'",
      ],
      answer: 1,
    },
    {
      statements: [
        "‘Baby Yoda’ is officially called Grogu",
        "The show 'Loki' is part of the Marvel Cinematic Universe",
        "Bill Gates is the founder of Facebook",
      ],
      answer: 2,
    },
    {
      statements: [
        "Millie Bobby Brown plays Eleven in Stranger Things",
        "The show 'Breaking Bad' is set in New Mexico",
        "Black Panther was played by Michael B. Jordan",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Grammy Awards are for excellence in video games",
        "The Emmy Awards are for television",
        "The Academy Awards are also known as the Oscars",
      ],
      answer: 0,
    },
    {
      statements: [
        "Kylie Jenner founded a cosmetics brand",
        "The song 'Despacito' became a global hit",
        "The movie 'Titanic' was released in 2008",
      ],
      answer: 2,
    },
    {
      statements: [
        "Ed Sheeran is British",
        "Tom Hanks voiced Buzz Lightyear in Toy Story",
        "Billie Eilish won multiple Grammys at a young age",
      ],
      answer: 1,
    },
    {
      statements: [
        "Shakira is originally from Colombia",
        "Katy Perry’s real name is Katheryn Hudson",
        "The 'Ice Bucket Challenge' raised awareness for cancer",
      ],
      answer: 2,
    },
    {
      statements: [
        "The character Jon Snow appears in The Witcher",
        "Disney owns Marvel and Star Wars",
        "Euphoria stars Zendaya in the lead role",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Twilight saga stars Kristen Stewart and Robert Pattinson",
        "Post Malone has face tattoos",
        "The show 'Brooklyn Nine-Nine' is set in Los Angeles",
      ],
      answer: 2,
    },
    {
      statements: [
        "Olivia Rodrigo rose to fame with the song 'drivers license'",
        "The Fast and Furious series has fewer than 5 movies",
        "Lana Del Rey is known for her cinematic pop style",
      ],
      answer: 1,
    },
    {
      statements: [
        "Keanu Reeves stars in The Matrix and John Wick series",
        "The Weeknd performed at the 2021 Super Bowl halftime show",
        "Doja Cat’s real name is actually Doja Cat",
      ],
      answer: 2,
    },
    {
      statements: [
        "Megan Thee Stallion is known for rap music",
        "Taylor Swift won the Nobel Prize in Literature",
        "Dua Lipa is a Grammy-winning artist",
      ],
      answer: 1,
    },
    {
      statements: [
        "SpongeBob SquarePants lives in a pineapple under the sea",
        "Netflix’s logo is a rainbow",
        "The 'Mandalorian' is part of the Star Wars universe",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Simpsons predicted several real-life events",
        "YouTube was founded in 2005",
        "Selena Gomez starred in The Big Bang Theory",
      ],
      answer: 2,
    },
    {
      statements: [
        "Taylor Swift has released albums titled 'Red' and 'Lover'",
        "The Harlem Shake was a viral internet trend",
        "Chris Hemsworth plays Batman",
      ],
      answer: 2,
    },
    {
      statements: [
        "The song 'Happy' was sung by Pharrell Williams",
        "Marvel’s Thanos uses a device called the Infinity Blade",
        "The TV show 'Lost' takes place on a mysterious island",
      ],
      answer: 1,
    },
    {
      statements: [
        "The show 'Friends' featured a coffee shop called Central Perk",
        "Taylor Swift played Hermione in the Harry Potter movies",
        "Kanye West released an album called 'Graduation'",
      ],
      answer: 1,
    },
    {
      statements: [
        "Tom Holland and Zendaya co-starred in Spider-Man films",
        "The song 'WAP' was by Billie Eilish",
        "Dwayne Johnson is also known as The Rock",
      ],
      answer: 1,
    },
    {
      statements: [
        "Bridgerton is a period drama on Netflix",
        "The character 'Baby Groot' is from Star Wars",
        "Ariana Grande starred in the show Victorious",
      ],
      answer: 1,
    },
    {
      statements: [
        "Marvel's Thor is based on Norse mythology",
        "The viral dance 'Renegade' came from TikTok",
        "Batman is part of the Marvel Universe",
      ],
      answer: 2,
    },
    {
      statements: [
        "K-pop refers to Korean pop music",
        "Shrek’s best friend is a dragon",
        "Frozen’s main character is named Elsa",
      ],
      answer: 1,
    },
    {
      statements: [
        "The song 'Blinding Lights' was released by The Weeknd",
        "Selena Gomez is a judge on Shark Tank",
        "The character Eleven has powers in Stranger Things",
      ],
      answer: 1,
    },
    {
      statements: [
        "Lorde is a New Zealand singer",
        "The show 'Succession' is about a wealthy media family",
        "Harry Styles was in the band Backstreet Boys",
      ],
      answer: 2,
    },
    {
      statements: [
        "Netflix’s logo is red and black",
        "The Kardashians are known for their tech startups",
        "Beyoncé was in a group before her solo career",
      ],
      answer: 1,
    },
    {
      statements: [
        "Rihanna performed the song 'Umbrella'",
        "Will Smith played the Genie in the live-action Aladdin",
        "Michael Jackson is still actively touring",
      ],
      answer: 2,
    },
    {
      statements: [
        "Miley Cyrus released a song called 'Party in the USA'",
        "The show 'The Witcher' stars Henry Cavill",
        "The iPod was introduced before the Walkman",
      ],
      answer: 2,
    },
    {
      statements: [
        "The show 'Glee' was about a high school football team",
        "Emma Watson played Belle in Disney's live-action Beauty and the Beast",
        "The movie 'Encanto' features a magical family",
      ],
      answer: 0,
    },
    {
      statements: [
        "Drake started as an actor on the show Degrassi",
        "Black Widow is a Marvel superhero",
        "The show 'The Office' is set in Texas",
      ],
      answer: 2,
    },
    {
      statements: [
        "Doja Cat is known for the hit song 'Say So'",
        "Lana Del Rey played Daenerys in Game of Thrones",
        "The Super Bowl halftime show features major artists every year",
      ],
      answer: 1,
    },
    {
      statements: [
        "The movie 'Dune' is based on a novel",
        "Pikachu is from the Pokémon series",
        "Moana is a character in the Marvel universe",
      ],
      answer: 2,
    },
    {
      statements: [
        "Shawn Mendes is from Canada",
        "Lady Gaga’s real name is Taylor Alison Swift",
        "The song 'Old Town Road' was a viral hit by Lil Nas X",
      ],
      answer: 1,
    },
    {
      statements: [
        "Stranger Things takes place in a fictional town called Hawkins",
        "Captain Marvel is from the DC universe",
        "Netflix original series often drop all episodes at once",
      ],
      answer: 1,
    },
    {
      statements: [
        "The song 'Happy Birthday' is in the public domain",
        "The movie 'Coco' is inspired by Mexican traditions",
        "Ed Sheeran’s first major album was titled 'Red'",
      ],
      answer: 2,
    },
    {
      statements: [
        "Zendaya won an Emmy for Euphoria",
        "Elvis Presley is known as the King of Rock and Roll",
        "Peppa Pig is voiced by Ryan Reynolds",
      ],
      answer: 2,
    },
    {
      statements: [
        "Nicki Minaj is known for her rap career",
        "The show 'The Boys' is about a group of firefighters",
        "The phrase 'Winter is Coming' is from Game of Thrones",
      ],
      answer: 1,
    },
    {
      statements: [
        "The character Olaf appears in Frozen",
        "Marvel’s Iron Man was played by Robert Downey Jr.",
        "The Twilight books were written by J.K. Rowling",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Mandalorian wears a suit made of Vibranium",
        "The show 'Friends' features six main characters",
        "Adele is known for emotional ballads like 'Someone Like You'",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Harry Potter film series has 8 movies",
        "Captain America's shield is made of adamantium",
        "Barbie (2023) stars Margot Robbie and Ryan Gosling",
      ],
      answer: 1,
    },
    {
      statements: [
        "Netflix created the show 'Stranger Things'",
        "Robert Pattinson played Batman in a 2022 film",
        "The Hunger Games series is set in Middle-earth",
      ],
      answer: 2,
    },
    {
      statements: [
        "SpongeBob’s best friend is Patrick Star",
        "The Twilight Saga features werewolves and vampires",
        "The band Imagine Dragons was formed in the 1980s",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Kardashians rose to fame through a reality show",
        "The Beatles were active during the 2000s",
        "Selena Gomez voiced a character in the 'Hotel Transylvania' series",
      ],
      answer: 1,
    },
    {
      statements: [
        "Doja Cat is known for the song 'Say So'",
        "The iPhone was first released in 2007",
        "Loki is the god of thunder",
      ],
      answer: 2,
    },
    {
      statements: [
        "Frozen was released before Toy Story",
        "The Game of Thrones finale aired in 2019",
        "K-pop band BLACKPINK has four members",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Minions speak fluent French",
        "The Joker is Batman’s arch-nemesis",
        "Miley Cyrus is the daughter of Billy Ray Cyrus",
      ],
      answer: 0,
    },
    {
      statements: [
        "Benedict Cumberbatch plays Doctor Strange",
        "The movie 'Inside Out' is about emotions",
        "Bill Nye is a famous chef",
      ],
      answer: 2,
    },
    {
      statements: [
        "Dua Lipa is a pop singer",
        "The Grammy Awards are given for achievements in fashion",
        "Harry Potter’s pet owl is named Hedwig",
      ],
      answer: 1,
    },
    {
      statements: [
        "Michael Jordan starred in the original 'Space Jam'",
        "The song 'Shake It Off' was released by Katy Perry",
        "The show 'Riverdale' is based on Archie Comics",
      ],
      answer: 1,
    },
    {
      statements: [
        "Chris Pratt voices Mario in the 2023 'Super Mario Bros' movie",
        "The Fast & Furious franchise is focused on baking competitions",
        "Ariana Grande was on the show 'Sam & Cat'",
      ],
      answer: 1,
    },
    {
      statements: [
        "Rihanna is from Barbados",
        "The original Toy Story came out in the 1990s",
        "The Office is a serious drama with no comedy",
      ],
      answer: 2,
    },
    {
      statements: [
        "Jennifer Lopez starred in the movie 'Selena'",
        "Eminem’s real name is Marshall Mathers",
        "The show 'Stranger Things' is set in space",
      ],
      answer: 2,
    },
    {
      statements: [
        "The movie 'Encanto' features the magical Madrigal family",
        "Katy Perry wore a meat dress to the VMAs",
        "Bruno is a character in the song 'We Don’t Talk About Bruno'",
      ],
      answer: 1,
    },
    {
      statements: [
        "Lady Gaga starred in the movie 'Joker'",
        "The Weeknd is known for his stage visuals and lighting",
        "The series 'Loki' deals with time travel",
      ],
      answer: 0,
    },
    {
      statements: [
        "Minecraft is a survival and building video game",
        "Beyoncé was part of a group called Fifth Harmony",
        "The Marvel character Vision can phase through walls",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Matrix stars Keanu Reeves as Neo",
        "Barbie has been a popular toy brand since the 1950s",
        "The iCarly reboot aired in the 1990s",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Mandalorian is part of the Star Trek universe",
        "Wanda Maximoff is also known as Scarlet Witch",
        "The song 'Bad Guy' is by Billie Eilish",
      ],
      answer: 0,
    },
    {
      statements: [
        "The movie 'Avengers: Endgame' was released after 'Infinity War'",
        "Shrek lives in a swamp",
        "Elsa's sister in Frozen is named Moana",
      ],
      answer: 2,
    },
    {
      statements: [
        "Hogwarts is a school for magic in the Harry Potter series",
        "Thanos collects the Chaos Emeralds in the Avengers films",
        "Elsa sings 'Let It Go' in Frozen",
      ],
      answer: 1,
    },
    {
      statements: [
        "The song 'Roar' was released by Katy Perry",
        "Barack Obama hosted a cooking show with Gordon Ramsay",
        "The Beatles released the album 'Abbey Road'",
      ],
      answer: 1,
    },
    {
      statements: [
        "Chris Hemsworth plays Thor in the MCU",
        "The TikTok logo features a music note",
        "The character Dobby appears in Star Wars",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Twilight movies feature a love triangle",
        "The Simpsons live in the city of Springfield",
        "The character Buzz Lightyear is from LEGO Movie",
      ],
      answer: 2,
    },
    {
      statements: [
        "Stranger Things features a parallel dimension called the Upside Down",
        "Moana has a pet pig named Pua",
        "Captain Jack Sparrow is from the Lord of the Rings trilogy",
      ],
      answer: 2,
    },
    {
      statements: [
        "The music group BTS is from South Korea",
        "Marvel’s Deadpool is known for breaking the fourth wall",
        "The Lion King takes place in the Amazon Rainforest",
      ],
      answer: 2,
    },
    {
      statements: [
        "Olaf is a snowman who loves warm hugs",
        "Netflix’s 'Wednesday' is based on the Addams Family",
        "Gandalf is a villain in the Harry Potter movies",
      ],
      answer: 2,
    },
    {
      statements: [
        "Selena Gomez voiced Mavis in 'Hotel Transylvania'",
        "Shawn Mendes is from Australia",
        "The show 'The Boys' is about corrupt superheroes",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Joker is often portrayed as Batman’s enemy",
        "Black Panther is the ruler of Wakanda",
        "The Minions only speak Japanese",
      ],
      answer: 2,
    },
    {
      statements: [
        "Zendaya won an Emmy for her role in Euphoria",
        "The YouTuber MrBeast is known for gaming only",
        "Eminem is considered one of the greatest rappers",
      ],
      answer: 1,
    },
    {
      statements: [
        "Pikachu is an electric-type Pokémon",
        "Marvel’s Vision is powered by the Mind Stone",
        "The show 'Grey’s Anatomy' is set in a law firm",
      ],
      answer: 2,
    },
    {
      statements: [
        "Dua Lipa is known for 'Levitating'",
        "Loki is Thor’s brother",
        "Minecraft is a horror game about survival zombies",
      ],
      answer: 2,
    },
    {
      statements: [
        "Justin Timberlake was part of *NSYNC",
        "The Hunger Games character Katniss uses a bow and arrow",
        "Barney the Dinosaur is known for his angry personality",
      ],
      answer: 2,
    },
    {
      statements: [
        "The series 'Black Mirror' explores future technology",
        "Netflix’s logo is green",
        "The phrase 'This is the way' is from The Mandalorian",
      ],
      answer: 1,
    },
    {
      statements: [
        "Harry Styles transitioned from One Direction to a solo career",
        "Lana Del Rey’s music is upbeat dance pop",
        "The Office (US) stars Steve Carell as Michael Scott",
      ],
      answer: 1,
    },
    {
      statements: [
        "The movie 'Soul' is by Pixar",
        "The 'Charli D’Amelio Dance' refers to the Waltz",
        "Tom Hiddleston plays Loki",
      ],
      answer: 1,
    },
    {
      statements: [
        "Squid Game includes deadly versions of children’s games",
        "The Flash is part of the Marvel Cinematic Universe",
        "The iCarly reboot aired in the 2020s",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Barbie movie includes a character named Ken",
        "Pharrell Williams is known for the song 'Happy'",
        "The character Woody in Toy Story is a superhero",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Addams Family includes a character named Wednesday",
        "Netflix created a live-action version of One Piece",
        "Captain Marvel’s real name is Hermione Granger",
      ],
      answer: 2,
    },
    {
      statements: [
        "Bluey is an Australian animated kids’ show",
        "Timothée Chalamet starred in the movie 'Dune'",
        "The Powerpuff Girls were created by Marvel Studios",
      ],
      answer: 2,
    },
  ],
};

export const historyQuestions = {
  category: "History",
  questions: [
    {
      statements: [
        "The Great Wall of China was built to keep out invaders",
        "World War I began in 1939",
        "Julius Caesar was assassinated in ancient Rome",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Declaration of Independence was signed in 1776",
        "Abraham Lincoln was the first U.S. president",
        "The Civil War in the U.S. was partly about slavery",
      ],
      answer: 1,
    },
    {
      statements: [
        "The French Revolution began in the late 1700s",
        "Napoleon was defeated at the Battle of Waterloo",
        "The Renaissance started after the invention of the telephone",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Titanic sank in 1912",
        "World War II ended in 1945",
        "The Internet was created during the Roman Empire",
      ],
      answer: 2,
    },
    {
      statements: [
        "Martin Luther King Jr. gave his 'I Have a Dream' speech in 1963",
        "The Berlin Wall fell in 1989",
        "The Cold War involved direct battles between the U.S. and USSR",
      ],
      answer: 2,
    },
    {
      statements: [
        "Christopher Columbus sailed to the Americas in 1492",
        "The Wright brothers invented the telephone",
        "The first human landed on the Moon in 1969",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Roman Empire once ruled much of Europe",
        "The pyramids of Egypt were built in the 20th century",
        "The Magna Carta was signed in 1215",
      ],
      answer: 1,
    },
    {
      statements: [
        "Albert Einstein developed the theory of relativity",
        "The Great Depression began in the 1920s",
        "Queen Victoria ruled the United States",
      ],
      answer: 2,
    },
    {
      statements: [
        "Vikings were skilled sailors from Scandinavia",
        "The American Civil War ended in 1776",
        "The Boston Tea Party was a protest against British taxation",
      ],
      answer: 1,
    },
    {
      statements: [
        "Nelson Mandela was imprisoned for 27 years",
        "Ancient Egyptians used hieroglyphics for writing",
        "The Renaissance took place before Ancient Greece",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Soviet Union was formed after World War II",
        "George Washington was the first President of the United States",
        "Leonardo da Vinci painted the Mona Lisa",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Vietnam War ended in 1975",
        "The Industrial Revolution began in the 1700s",
        "Alexander the Great ruled the Roman Empire",
      ],
      answer: 2,
    },
    {
      statements: [
        "Genghis Khan founded the Mongol Empire",
        "The United Nations was created after World War II",
        "The Black Death occurred during the 21st century",
      ],
      answer: 2,
    },
    {
      statements: [
        "Women in the U.S. gained the right to vote in 1920",
        "The Eiffel Tower is in London",
        "The Cold War was a political and ideological conflict",
      ],
      answer: 1,
    },
    {
      statements: [
        "Joan of Arc was a French military leader",
        "The Mayans lived in ancient Egypt",
        "The Apollo 11 mission landed on the Moon",
      ],
      answer: 1,
    },
    {
      statements: [
        "The U.S. bought Alaska from Russia",
        "Cleopatra was the last pharaoh of ancient Egypt",
        "The Berlin Wall was built to keep East Germans out of France",
      ],
      answer: 2,
    },
    {
      statements: [
        "The invention of the printing press is credited to Gutenberg",
        "The Cuban Missile Crisis happened in the 1960s",
        "The Colosseum is located in Greece",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Stone Age came before the Iron Age",
        "The American Revolutionary War was fought in the 1900s",
        "The Olympic Games began in ancient Greece",
      ],
      answer: 1,
    },
    {
      statements: [
        "King Tutankhamun was an Egyptian pharaoh",
        "World War II included battles in Europe and the Pacific",
        "The Great Fire of London happened in New York City",
      ],
      answer: 2,
    },
    {
      statements: [
        "The U.S. Constitution was signed in Philadelphia",
        "The sinking of the Lusitania led directly to World War II",
        "The Roaring Twenties were a period of economic growth in the 1920s",
      ],
      answer: 1,
    },
    {
      statements: [
        "The first Olympic Games were held in ancient Greece",
        "JFK was assassinated in 1963",
        "The telephone was invented by Thomas Edison",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Roman numeral for 10 is X",
        "The Great Fire of London happened in 1666",
        "The Colosseum was built in Egypt",
      ],
      answer: 2,
    },
    {
      statements: [
        "The American Civil Rights Movement peaked in the 1960s",
        "The Berlin Wall separated North and South Korea",
        "The Treaty of Versailles ended World War I",
      ],
      answer: 1,
    },
    {
      statements: [
        "Marie Curie won Nobel Prizes in both Physics and Chemistry",
        "The Great Depression ended World War II",
        "The Aztecs lived in what is now Mexico",
      ],
      answer: 1,
    },
    {
      statements: [
        "Winston Churchill was the Prime Minister of the UK during WWII",
        "The Boston Massacre happened during the American Civil War",
        "The Cold War lasted for several decades",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Great Wall of China is visible from space",
        "The French Revolution began in 1789",
        "The Reformation was started by Martin Luther",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Space Race was part of the Cold War",
        "The Wright brothers were known for aviation",
        "The Renaissance started in Canada",
      ],
      answer: 2,
    },
    {
      statements: [
        "Julius Caesar was a Roman emperor",
        "The Black Death killed millions in Europe",
        "The Great Chicago Fire happened in the 1800s",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Soviet Union launched the first satellite into space",
        "Abraham Lincoln wrote the Gettysburg Address",
        "The Battle of Hastings took place in the 1900s",
      ],
      answer: 2,
    },
    {
      statements: [
        "Pearl Harbor was attacked in 1941",
        "The Roman Empire split into East and West",
        "The Declaration of Independence was written during the Civil War",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Inca Empire was located in South America",
        "Anne Frank wrote her diary during the Cold War",
        "George Washington led the Continental Army",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Taj Mahal was built in India",
        "The Great Depression began in 1929",
        "The Internet was invented in the 18th century",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Louisiana Purchase doubled the size of the U.S.",
        "Adolf Hitler was the leader of France during WWII",
        "The Civil Rights Act passed in 1964",
      ],
      answer: 1,
    },
    {
      statements: [
        "The first World War began after the assassination of Archduke Franz Ferdinand",
        "The Soviet Union collapsed in 1991",
        "The pyramids of Giza were built after the discovery of electricity",
      ],
      answer: 2,
    },
    {
      statements: [
        "Queen Elizabeth I was the daughter of Henry VIII",
        "Neil Armstrong was the first person on Mars",
        "The Boston Tea Party was a protest against British taxes",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Enlightenment emphasized reason and individualism",
        "Alexander Hamilton appears on the $100 bill",
        "The U.S. fought in the Korean War in the 1950s",
      ],
      answer: 1,
    },
    {
      statements: [
        "Rosa Parks refused to give up her bus seat in Montgomery",
        "The Berlin Airlift occurred during the Cold War",
        "Napoleon was American",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Apollo 13 mission landed successfully on the Moon",
        "The Statue of Liberty was a gift from France",
        "The Mayflower brought Pilgrims to North America",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Great Famine in Ireland occurred in the 19th century",
        "The first printing press was invented in China",
        "The Iron Curtain was a term used during the Cold War",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Rosetta Stone helped decode Egyptian hieroglyphs",
        "World War II started when Germany invaded Poland",
        "The Great Wall of China was built during the Cold War",
      ],
      answer: 2,
    },
    {
      statements: [
        "The United Nations was founded after World War II",
        "The Great Depression began in the 1820s",
        "Cleopatra was a ruler of ancient Egypt",
      ],
      answer: 1,
    },
    {
      statements: [
        "The American Revolutionary War ended in 1783",
        "The Rosetta Stone helped historians understand Egyptian writing",
        "Genghis Khan ruled the Ottoman Empire",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Magna Carta limited the power of English kings",
        "The Renaissance was a cultural movement in the 15th and 16th centuries",
        "The Eiffel Tower was built during the Roman Empire",
      ],
      answer: 2,
    },
    {
      statements: [
        "The atomic bomb was dropped on Hiroshima in 1945",
        "The Battle of Gettysburg was a major WWII battle",
        "The Berlin Wall separated East and West Berlin",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Roman Empire was ruled by emperors",
        "The Silk Road was an ancient trade route",
        "The Internet was invented during the Middle Ages",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Wright brothers flew the first airplane in 1903",
        "Martin Luther nailed his 95 Theses in 1517",
        "Napoleon ruled over the Soviet Union",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Cold War ended in the early 1990s",
        "The Titanic was a military battleship",
        "Ancient Rome had a Senate and Republic before becoming an empire",
      ],
      answer: 1,
    },
    {
      statements: [
        "The U.S. Constitution was ratified in 1787",
        "Vikings discovered the Americas before Columbus",
        "Marco Polo was an ancient Egyptian explorer",
      ],
      answer: 2,
    },
    {
      statements: [
        "The French Revolution inspired other democratic movements",
        "The Inquisition was a series of art exhibitions",
        "The Parthenon is located in Athens, Greece",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Great Fire of Rome occurred under Emperor Nero",
        "The Statue of Liberty was a gift from Spain",
        "Mount Vesuvius destroyed the city of Pompeii",
      ],
      answer: 1,
    },
    {
      statements: [
        "The League of Nations existed before the United Nations",
        "The Boston Tea Party was led by the Sons of Liberty",
        "Albert Einstein developed the theory of gravity",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Zulu Kingdom was in southern Africa",
        "Queen Elizabeth II began her reign in the 1800s",
        "The Taj Mahal was built by the Mughal emperor Shah Jahan",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Battle of Thermopylae was fought by the Spartans",
        "Ben Franklin was one of the U.S. Founding Fathers",
        "The Cold War featured nuclear battles between the U.S. and USSR",
      ],
      answer: 2,
    },
    {
      statements: [
        "Joan of Arc led French troops during the Hundred Years’ War",
        "The American colonies fought against France in the Revolutionary War",
        "The Colosseum in Rome was used for gladiator games",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Soviet Union launched the Sputnik satellite",
        "The Emancipation Proclamation ended slavery worldwide",
        "The Boston Massacre happened before the American Revolution",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Black Plague significantly reduced Europe's population",
        "King Louis XIV of France was known as the Sun King",
        "The printing press was used to make stone tablets",
      ],
      answer: 2,
    },
    {
      statements: [
        "The United States dropped nuclear bombs during World War II",
        "The first humans appeared during the Industrial Revolution",
        "The Renaissance produced great works of art and science",
      ],
      answer: 1,
    },
    {
      statements: [
        "Florence Nightingale is considered the founder of modern nursing",
        "The Roman Colosseum was used as a parliament",
        "The Great Wall of China took centuries to build",
      ],
      answer: 1,
    },
    {
      statements: [
        "Galileo supported the idea that Earth revolves around the Sun",
        "The Treaty of Versailles was signed after World War I",
        "Moses was a general in the American Revolution",
      ],
      answer: 2,
    },
    {
      statements: [
        "The ancient Olympics were held to honor Zeus",
        "The 19th Amendment granted women the right to vote in the U.S.",
        "Julius Caesar was a Greek philosopher",
      ],
      answer: 2,
    },
    {
      statements: [
        "World War I began in 1914",
        "The Mayan civilization was based in South America",
        "The United States joined WWII after the attack on Pearl Harbor",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Empire State Building was completed during the Great Depression",
        "The Bolshevik Revolution happened in Russia",
        "The Magna Carta was signed in the United States",
      ],
      answer: 2,
    },
    {
      statements: [
        "Nelson Mandela became president of South Africa after apartheid",
        "Christopher Columbus discovered the moon",
        "The Wright brothers made the first powered flight",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Suez Canal connects the Atlantic and Pacific Oceans",
        "The Eiffel Tower was built in the 19th century",
        "The Great Depression affected countries worldwide",
      ],
      answer: 0,
    },
    {
      statements: [
        "Abraham Lincoln delivered the Gettysburg Address",
        "The Allies won World War II",
        "The Berlin Wall was built to keep Americans out of Germany",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Declaration of Independence was signed in 1776",
        "The Roman Empire fell in 476 AD",
        "The Cold War ended in 1820",
      ],
      answer: 2,
    },
    {
      statements: [
        "George Orwell wrote '1984'",
        "The ancient city of Troy is a fictional place",
        "The League of Nations was created after WWI",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Titanic struck an iceberg in the Atlantic Ocean",
        "The Apollo missions were led by NASA",
        "The Great Fire of London happened in Paris",
      ],
      answer: 2,
    },
    {
      statements: [
        "King Tutankhamun's tomb was discovered in the 20th century",
        "The U.S. bought Louisiana from France",
        "The Crusades were led by Mongol warriors",
      ],
      answer: 2,
    },
    {
      statements: [
        "Benito Mussolini led Italy during WWII",
        "The United Nations replaced the League of Legends",
        "World War II ended with the surrender of Japan",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Vietnam War lasted over a decade",
        "Pablo Picasso was a famous Spanish general",
        "The Bastille was a prison stormed during the French Revolution",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Cold War was fought between NATO and the Warsaw Pact",
        "The Aztecs built large pyramids in what is now Mexico City",
        "The Boston Tea Party was a celebration of a British king’s birthday",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Hindenburg disaster involved a crashing airship",
        "Queen Elizabeth I ruled during the Elizabethan Era",
        "The Great Wall of China was built in a single year",
      ],
      answer: 2,
    },
    {
      statements: [
        "The American Civil War ended in 1865",
        "Mahatma Gandhi led India’s fight for independence",
        "The Battle of Waterloo was fought in Australia",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Parthenon is located in Rome",
        "The Reign of Terror was part of the French Revolution",
        "Sputnik was the first artificial satellite launched into space",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Middle Ages came after the Renaissance",
        "Martin Luther King Jr. promoted nonviolent protest",
        "The Great Chicago Fire occurred in the 1800s",
      ],
      answer: 0,
    },
    {
      statements: [
        "The Berlin Wall divided East and West Berlin",
        "The Treaty of Paris ended the American Revolutionary War",
        "Henry Ford invented the lightbulb",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Cuban Missile Crisis involved the U.S. and the USSR",
        "The Statue of Liberty was a gift from France",
        "The Trojan War happened during the Industrial Revolution",
      ],
      answer: 2,
    },
    {
      statements: [
        "Mount Rushmore features the faces of four U.S. presidents",
        "World War II ended before World War I began",
        "The Renaissance began in Italy",
      ],
      answer: 1,
    },
    {
      statements: [
        "Leonardo da Vinci painted the Mona Lisa",
        "The Berlin Airlift was during the Cold War",
        "The Rosetta Stone was written in Latin only",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Black Death occurred in the 14th century",
        "The Roman numeral 'L' stands for 50",
        "The U.S. entered World War I in 1941",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Berlin Wall was constructed in the 1960s",
        "The Great Depression began with a stock market crash in 1929",
        "Alexander the Great conquered North America",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Renaissance began in Florence, Italy",
        "The U.S. Civil Rights Act was signed in 1964",
        "The Aztecs ruled the territory now known as Canada",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Huns were led by Attila",
        "The Cold War featured the Cuban Missile Crisis",
        "The Emancipation Proclamation was issued by Thomas Jefferson",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Rosetta Stone was key to deciphering hieroglyphics",
        "The Great Pyramid of Giza was built in the 20th century",
        "World War II ended in 1945",
      ],
      answer: 1,
    },
    {
      statements: [
        "Ancient Athens is known as the birthplace of democracy",
        "The Boston Tea Party occurred after the Revolutionary War",
        "Cleopatra was known for her alliance with Julius Caesar",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Great Fire of Rome happened under Nero’s rule",
        "The Inca Empire was based in the Andes Mountains",
        "The Eiffel Tower was a gift from the U.S. to France",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Treaty of Versailles helped end World War I",
        "Ben Franklin was a U.S. President",
        "The Great Wall of China is thousands of miles long",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Titanic was considered unsinkable",
        "Joan of Arc was burned at the stake",
        "The Internet was invented in the 1800s",
      ],
      answer: 2,
    },
    {
      statements: [
        "Ancient Romans spoke Latin",
        "The 19th Amendment gave women in the U.S. the right to vote",
        "Albert Einstein discovered penicillin",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Great Depression began after World War I",
        "The Vietnam War was part of the Cold War conflict",
        "The Leaning Tower of Pisa was built in the 2000s",
      ],
      answer: 2,
    },
    {
      statements: [
        "The U.S. Constitution was written in the 18th century",
        "Julius Caesar was stabbed by his friends in the Senate",
        "The American Revolution was fought against Canada",
      ],
      answer: 2,
    },
    {
      statements: [
        "Marie Antoinette was queen during the French Revolution",
        "The first successful airplane flight was in 2003",
        "The Berlin Airlift supplied food to West Berlin",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Korean War ended in a peace treaty",
        "Abraham Lincoln was the 16th U.S. President",
        "Sparta and Athens were rival city-states",
      ],
      answer: 0,
    },
    {
      statements: [
        "The first Olympic Games were held in ancient Greece",
        "The Roman Empire fell in 1492",
        "The Cold War was a global power struggle between the U.S. and the Soviet Union",
      ],
      answer: 1,
    },
    {
      statements: [
        "The Louisiana Purchase happened under President Jefferson",
        "The Great Chicago Fire destroyed much of the city in 1871",
        "Leonardo da Vinci sculpted the statue of David",
      ],
      answer: 2,
    },
    {
      statements: [
        "Rosa Parks is known for refusing to give up her seat on a bus",
        "The Declaration of Independence was signed after the Constitution",
        "The Colosseum is located in Rome",
      ],
      answer: 1,
    },
    {
      statements: [
        "World War II began in 1939",
        "The U.S. dropped the atomic bomb on Germany",
        "Martin Luther started the Protestant Reformation",
      ],
      answer: 1,
    },
    {
      statements: [
        "The moon landing occurred during the Space Race",
        "Nelson Mandela was a key figure in South African apartheid",
        "The Great Wall of China was built during the Ice Age",
      ],
      answer: 2,
    },
    {
      statements: [
        "The Wright brothers flew the first airplane in North Carolina",
        "World War I was also called 'The War to End All Wars'",
        "The Rosetta Stone was discovered in Australia",
      ],
      answer: 2,
    },
  ],
};

export const geographyQuestions = {
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
