import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { categories } from "../data/categories";
import bannerImage from "../assets/banner.jpg";

export default function CategoryGame() {
  const { mainCategorySlug, subcategorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const timerDuration = location.state?.timer || 15;
  const mainCategory = location.state?.mainCategory || (mainCategorySlug ? mainCategorySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : "");
  const subcategory = location.state?.subcategory || (subcategorySlug ? subcategorySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : "");

  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(timerDuration);
  const [current, setCurrent] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gamePhase, setGamePhase] = useState("countdown");
  const [countdown, setCountdown] = useState(3);
  const [shouldAdvance, setShouldAdvance] = useState(false);

  // Helper to dynamically import the correct question pool
  async function getQuestionPool(main, sub) {
    const cat = categories.find(c => c.name.toLowerCase() === main.toLowerCase());
    if (!cat) return null;
    const subcat = cat.subcategories.find(s => s.name.toLowerCase() === sub.toLowerCase());
    if (!subcat) return null;
    // Dynamic import
    const poolModule = await import(`../data/${subcat.file}.js`);
    // The pool is the default export
    return poolModule.default;
  }

  // Initialize questions based on main/subcategory
  useEffect(() => {
    let isMounted = true;
    async function loadQuestions() {
      const pool = await getQuestionPool(mainCategory, subcategory);
      if (!pool) {
        navigate('/');
        return;
      }
      // Helper to get N unique random items from an array, excluding used
      function getUniqueRandom(arr, n, usedSet) {
        const available = arr.filter(item => !usedSet.has(item));
        const shuffled = available.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, n);
      }
      // Generate questions: 2 true, 1 bluff, no repeats in game
      const numQuestions = Math.min(10, Math.floor(Math.min(pool.trueStatements.length / 2, pool.bluffs.length)));
      const usedTrue = new Set();
      const usedBluff = new Set();
      const generatedQuestions = [];
      for (let i = 0; i < numQuestions; i++) {
        const trueStmts = getUniqueRandom(pool.trueStatements, 2, usedTrue);
        trueStmts.forEach(s => usedTrue.add(s));
        const bluff = getUniqueRandom(pool.bluffs, 1, usedBluff)[0];
        usedBluff.add(bluff);
        // Shuffle the 3 statements and track the answer
        const statements = [...trueStmts, bluff].sort(() => Math.random() - 0.5);
        const answer = statements.indexOf(bluff);
        generatedQuestions.push({ statements, answer });
      }
      if (isMounted) setQuestions(generatedQuestions);
    }
    loadQuestions();
    return () => { isMounted = false; };
  }, [mainCategory, subcategory, navigate]);

  // Countdown logic
  useEffect(() => {
    if (gamePhase === "countdown") {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setGamePhase("game");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gamePhase]);

  // Timer logic
  useEffect(() => {
    if (gamePhase === "game") {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gamePhase, current]);

  // Effect to handle question advancement
  useEffect(() => {
    if (shouldAdvance) {
      setSelected(null);
      setCurrent(prev => prev + 1);
      setTimer(timerDuration);
      setShouldAdvance(false);
    }
  }, [shouldAdvance, timerDuration]);

  const handleTimeout = () => {
    navigate('/game-over', { 
      state: { 
        streak, 
        category: `${mainCategory} - ${subcategory}`,
        timer: timerDuration
      } 
    });
  };

  const handleSelect = (index) => {
    setSelected(index);
    const correctAnswer = questions[current].answer;
    if (index === correctAnswer) {
      setStreak((prev) => prev + 1);
      if (current + 1 < questions.length) {
        setTimeout(() => {
          setSelected(null);
          setCurrent(prev => prev + 1);
          setTimer(timerDuration);
        }, 1000);
      } else {
        setTimeout(() => {
          navigate('/game-over', { 
            state: { 
              streak: streak + 1, 
              category: `${mainCategory} - ${subcategory}`,
              timer: timerDuration
            } 
          });
        }, 1000);
      }
    } else {
      setTimeout(() => {
        navigate('/answer', { 
          state: { 
            streak, 
            category: `${mainCategory} - ${subcategory}`,
            timer: timerDuration,
            correctAnswer: questions[current].statements[correctAnswer],
            explanation: questions[current].explanation || "That was the bluff!"
          } 
        });
      }, 1000);
    }
  };

  if (gamePhase === "countdown") {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
        <h1 className="text-6xl font-bold text-red-600">{countdown}</h1>
        <p className="text-lg mt-4 text-gray-900 dark:text-gray-100">Get ready!</p>
      </div>
    );
  }

  if (!questions || questions.length === 0 || !questions[current]) {
    return (
      <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
        <h1 className="text-2xl font-bold text-red-600">No questions available!</h1>
      </div>
    );
  }

  const { statements } = questions[current];

  return (
    <div className="h-auto sm:min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      {/* Reduced Banner Image */}
      <img src={bannerImage} alt="Bluff Buster Banner" className="w-24 sm:w-32 mb-2" />

      <h1 className="text-3xl sm:text-2xl font-bold mb-2 text-red-600">
        Spot the Bluff!
      </h1>
      {/* Timer */}
      <div className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Time Left: {timer}s</div>
      <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Streak: {streak}</div>
      {/* Question and Answer Buttons */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md text-xl transition-colors duration-200">
        {statements.map((s, i) => (
          <button
            key={`${current}-${i}`}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
            className={`block w-full text-center p-4 sm:p-5 mb-2 rounded-lg border transition-all duration-300 ${
              selected === i
                ? i === questions[current].answer
                  ? "border-green-500 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "border-red-500 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                : "border-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
} 