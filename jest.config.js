module.exports = {
  testEnvironment: 'node',
  coverageDirectory: './coverage/',
  setupTestFrameworkScriptFile: './test/utils/setup',
  testPathIgnorePatterns: ['test/fixtures/.*/.*?/'],
  moduleFileExtensions: ['js', 'mjs', 'json'],
  transform: {} // Required to disable babel transform
}
