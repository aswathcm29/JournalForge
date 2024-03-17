// jest.config.js
module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/__tests__/',
      '/coverage/',
    ],
  };
  