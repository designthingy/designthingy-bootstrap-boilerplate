module.exports = function () {
    'use strict';

    // Linting JS files.
    this.config('eslint', {
        options: {
            configFile: './.eslintrc.js',
            formate: 'text',
            outputFile: '<%= path.test.root %>/eslint.txt',
            fix: true
        },
        target: ['<%= path.src.root %>/js/**/*']
    });

    // Linting SCSS files.
    this.config('stylelint', {
        options: {
            configFile: './.stylelintrc',
            formatter: 'string',
            ignoreDisables: false,
            failOnError: true,
            outputFile: '<%= path.test.root %>/stylelint.txt',
            reportNeedlessDisables: false,
            syntax: 'scss',
            fix: true
        },
        src: '<%= path.src.root %>/scss/**/*'
    });
};
