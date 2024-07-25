module.exports = {
  theme: {
    extend: {
      height: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
};
