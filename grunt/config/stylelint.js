module.exports = { // Linting JS files.
    options: {
        configFile: './.stylelintrc',
        formatter: 'string',
        ignoreDisables: false,
        failOnError: true,
        outputFile: 'test/stylelint.txt',
        reportNeedlessDisables: false,
        syntax: 'scss',
        fix: true
    },
    src: 'src/scss/**/*'
};
