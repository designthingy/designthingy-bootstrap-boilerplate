module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('vendors', ['copy:jquery', 'jquery_plugins', 'copy:popper', 'copy:bootstrap', 'copy:bs_file_input', 'copy:svg4everybody', 'copy:fontawesome']);
};
