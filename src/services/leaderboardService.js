import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  addDoc, 
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Get date 7 days ago in YYYY-MM-DD format
const getSevenDaysAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split('T')[0];
};

// Get leaderboard entries for the last 7 days
export const getLeaderboard = async (category = null, difficulty = null) => {
  try {
    // Create dates for the last 7 days
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of today
    
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0); // Start of 7 days ago

    const leaderboardRef = collection(db, 'leaderboard');
    let q = query(
      leaderboardRef,
      where('date', '>=', sevenDaysAgo),
      where('date', '<=', today),
      orderBy('score', 'desc'),
      orderBy('date', 'desc')
    );

    if (category) {
      q = query(q, where('category', '==', category));
    }

    if (difficulty) {
      q = query(q, where('difficulty', '==', difficulty));
    }

    q = query(q, limit(5));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return results;
  } catch (error) {
    throw new Error(`Failed to fetch leaderboard: ${error.message}`);
  }
};

// Add a new score to the leaderboard
export const addScore = async (scoreData) => {
  try {
    const scoreEntry = {
      ...scoreData,
      date: new Date(),
      timestamp: Timestamp.now(),
    };

    const leaderboardRef = collection(db, 'leaderboard');
    const docRef = await addDoc(leaderboardRef, scoreEntry);
    return docRef.id;
  } catch (error) {
    throw new Error(`Failed to add score: ${error.message}`);
  }
};

// Check if a score qualifies for the leaderboard
export const checkScoreQualification = async (score, category = null, difficulty = null) => {
  try {
    if (!score || score < 1) {
      return false;
    }

    const leaderboard = await getLeaderboard(category, difficulty);

    // If there are fewer than 5 entries, the score qualifies
    if (leaderboard.length < 5) {
      return true;
    }

    // If there are 5 entries, qualify if score is higher than lowest score
    const lowestScore = Math.min(...leaderboard.map((entry) => entry.score));
    return score > lowestScore;
  } catch (error) {
    throw new Error(`Failed to check score qualification: ${error.message}`);
  }
}; 