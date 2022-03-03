module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  maxWorkers: '50%',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '#/(.*)': '<rootDir>/tests/$1',
  },
  preset: 'ts-jest',
  rootDir: '.',
  setupFiles: [
    '<rootDir>/tests/setup.ts',
  ],
};
