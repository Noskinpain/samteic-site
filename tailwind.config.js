/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Fira Code',
          'Fira Mono',
          'Roboto Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        sans: [
          'Inter', // Primary sans-serif font
          'ui-sans-serif', // System UI
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
  
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': { writingMode: 'vertical-rl' },
        '.writing-mode-vertical-lr': { writingMode: 'vertical-lr' },
      });

      // Add custom selection style
      addUtilities({
        '::selection': {
          backgroundColor: '#64ffda',
          color: '#0a192f',
        },
      }, ['responsive']);
    },
  ],
};
