module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src"
    ],
    moduleDirectories: [
        "src",
        "node_modules",
    ],
    moduleFileExtensions: ['js', 'ts'],
};
