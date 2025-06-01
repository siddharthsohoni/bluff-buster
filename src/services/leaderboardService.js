import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  addDoc, 
  serverTimestamp 
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
    const today = getTodayDate();
    const sevenDaysAgo = getSevenDaysAgo();
    
    // Create base query for the last 7 days
    let q = query(
      collection(db, 'leaderboard'),
      where('date', '>=', sevenDaysAgo),
      where('date', '<=', today),
      orderBy('date', 'desc'),
      orderBy('streak', 'desc'),
      limit(5)
    );

    // Add category filter if provided
    if (category) {
      q = query(q, where('category', '==', category));
    }

    // Add difficulty filter if provided
    if (difficulty) {
      q = query(q, where('difficulty', '==', difficulty));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error;
  }
};

// Add a new score to the leaderboard
export const addScore = async (scoreData) => {
  try {
    const { name, streak, category, difficulty } = scoreData;
    const today = getTodayDate();

    const score = {
      name,
      streak,
      category,
      difficulty,
      date: today,
      timestamp: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'leaderboard'), score);
    return { id: docRef.id, ...score };
  } catch (error) {
    console.error('Error adding score:', error);
    throw error;
  }
};

// Check if a score qualifies for the leaderboard
export const checkScoreQualification = async (streak, category = null, difficulty = null) => {
  try {
    // First check if streak is at least 1
    if (streak < 1) {
      console.log('Score too low: Must have at least 1 streak');
      return false;
    }

    const leaderboard = await getLeaderboard(category, difficulty);
    console.log('Current leaderboard:', leaderboard);
    console.log('User streak:', streak);
    
    // If there are fewer than 5 entries, the score qualifies
    if (leaderboard.length < 5) {
      console.log('Less than 5 entries, score qualifies');
      return true;
    }

    // If there are 5 entries, qualify if score is higher than lowest score
    const lowestScore = leaderboard[leaderboard.length - 1].streak;
    console.log('Lowest score in leaderboard:', lowestScore);
    const qualifies = streak > lowestScore;
    console.log('Qualifies:', qualifies);
    return qualifies;
  } catch (error) {
    console.error('Error checking score qualification:', error);
    throw error;
  }
}; 