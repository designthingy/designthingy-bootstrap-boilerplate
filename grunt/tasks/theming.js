module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('theming', ['sass:theming', 'postcss:theming', 'postcss:theming_nano']);
};
