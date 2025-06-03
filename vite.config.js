import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/bluff-buster/' : '/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom'
          ],
          // Split Firebase into its own chunk
          'firebase': [
            'firebase/app',
            'firebase/firestore',
            'firebase/auth',
            'firebase/analytics'
          ],
          // Split data chunks
          'data': [
            './src/data/categories.js',
            './src/data/titles.js',
            './src/data/scienceQuestions.js',
            './src/data/techQuestions.js',
            './src/data/astronomyQuestions.js',
            './src/data/bollywoodPopCultureQuestions.js',
            './src/data/bollywoodMoviesQuestions.js',
            './src/data/bollywoodTVShowsQuestions.js',
            './src/data/hollywoodMoviesQuestions.js',
            './src/data/hollywoodPopCultureQuestions.js',
            './src/data/hollywoodTVShowsQuestions.js',
            './src/data/historyQuestions.js',
            './src/data/geographyQuestions.js',
            './src/data/animalQuestions.js',
            './src/data/foodAndCultureQuestions.js'
          ]
        }
      }
    }
  },
  resolve: {
    alias: {
      // Add any necessary aliases here
    }
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/firestore', 'firebase/auth', 'firebase/analytics']
  }
})
