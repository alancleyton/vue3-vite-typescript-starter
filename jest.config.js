module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\js$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!**/node_modules/**',
    '!src/main.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(js|ts)$',
};
