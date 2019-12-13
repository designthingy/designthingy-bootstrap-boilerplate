module.exports = { // Linting JS files.
    options: {
        configFile: './.eslintrc.js',
        formate: 'text',
        outputFile: 'text/eslint.txt',
        fix: true
    },
    target: ['src/js/**/*']
};
