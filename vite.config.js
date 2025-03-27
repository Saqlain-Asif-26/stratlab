import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/stratlab/', // Correct base path for GitHub Pages
  publicDir: 'public', // Ensures public assets are processed correctly
});