module.exports = function (grunt) {
    'use strict';
    // Track time
    require('time-grunt')(grunt);
    // Configure Package
    const configs = require('load-grunt-configs')(grunt, {
        pkg: grunt.file.readJSON('package.json'),
        path: { // Project paths.
            tasks: {
                root: 'tasks'
            },
            src: {
                root: 'src'
            },
            build: {
                root: 'build',
                assets: '<%= path.build.root %>/assets',
                vendors: '<%= path.build.assets %>/vendors'
            },
            test: {
                root: 'test'
            }
        },
        clean: { // Remove unwanted files.
            build: [
                '<%= path.build.assets %>/**/*.map',
                '<%= path.build.root %>/**/scss/'
            ],
            rm_build: [
                '<%= path.build.root %>'
            ]
        },
        config: {
            src: '<%= path.tasks.root %>/*.js'
        }
    });

    // Assign configs.
    grunt.initConfig(configs);

    // Load Tasks.
    require('jit-grunt')(grunt);
    grunt.loadTasks(grunt.config('path.tasks.root'));

    // Register Tasks.
    grunt.registerTask('jquery_plugins', ['copy:jquery_datepicker', 'copy:jquery_timepicker']);
    grunt.registerTask('vendor', ['copy:jquery', 'jquery_plugins', 'copy:easing', 'copy:popper', 'copy:bootstrap', 'copy:bs_file_input', 'copy:svg4everybody', 'copy:fontawesome']);
    grunt.registerTask('theming', ['sass:theming', 'postcss:theming', 'postcss:theming_nano']);
    grunt.registerTask('vendors', ['vendor', 'theming']);
    grunt.registerTask('image', 'imagemin');
    grunt.registerTask('svg', ['svgmin', 'svgstore']);
    grunt.registerTask('test', ['eslint', 'stylelint']);
    grunt.registerTask('prev', ['browserSync', 'watch']);
    grunt.registerTask('dev', ['copy', 'sass', 'postcss', 'babel', 'uglify']);
    grunt.registerTask('build', ['clean:rm_build', 'dev', 'image', 'clean:build']);
    grunt.registerTask('default', ['dev', 'prev']);
};
