module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
    'App.tsx',
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/graphql/**',
    '!src/theme/**',
  ],
};
