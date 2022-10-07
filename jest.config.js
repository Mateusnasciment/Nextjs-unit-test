module.exports = {
    testPathIginorePatterns : ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    bail: 1 ,
    clearMocks : true,
    colletCoverage: true,
    collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
    coverageReporters: ['lcov', 'text'],
};