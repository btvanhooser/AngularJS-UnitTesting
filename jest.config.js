/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    coverageDirectory: '.coverage',
    coveragePathIgnorePatterns: ['lib/*'],
    coverageReporters: ['text-summary', 'html']
};

module.exports = config;