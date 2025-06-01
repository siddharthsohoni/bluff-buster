# Bluff Buster

Bluff Buster is a fun, fast-paced web game where you try to spot the bluff among three statements! Challenge yourself, climb the leaderboard, and dare your friends to beat your streak.

## Features
- Multiple categories (Science, Pop Culture, History, Geography, Food & Culture, Animals)
- Three difficulty levels (Easy, Medium, Hard)
- Streak-based scoring and fun user titles
- Leaderboard with score submission
- Challenge friends with shareable links
- Day/Night (Dark) mode toggle
- Mobile-friendly and responsive design

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/siddharthsohoni/bluff-buster.git
cd bluff-buster
npm install
```

### Running Locally
```bash
npm run dev
```
Visit [http://localhost:5173/bluff-buster/](http://localhost:5173/bluff-buster/) in your browser.

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Dark Mode
- Toggle day/night mode using the button in the top-right corner.
- All screens and cards support dark mode.

## Deployment
- The app is configured for deployment to GitHub Pages or any static host under the `/bluff-buster/` subdirectory.
- If deploying elsewhere, update the `base` in `vite.config.js` as needed.

## Project Structure
- `src/pages/` — Main app screens (Home, Difficulty, Category, Game, GameOver, etc.)
- `src/data/` — Question and title data
- `src/context/ThemeContext.jsx` — Dark mode context
- `src/components/ThemeToggle.jsx` — Theme toggle button
- `src/config/firebase.js` — Firebase config (if using leaderboard)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
