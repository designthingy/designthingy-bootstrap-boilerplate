module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('jquery_plugins', ['copy:jquery_datepicker', 'copy:jquery_timepicker', 'copy:easing']);
};
