module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('default', ['clean:rm_build', 'copy', 'sass', 'postcss', 'babel', 'uglify', 'image', 'svg']);
};
