module.exports = function (grunt) {
    'use strict';
    // Track time
    require('time-grunt')(grunt);

    // Path.
    var path = require('path');

    // Configure Package.
    require('load-grunt-config')(grunt, {
        packageJsonPath: grunt.file.readJSON('package.json'),
        init: true,
        configPath: path.join(process.cwd(), 'grunt/config'),
        jitGrunt: true
    });

    // Load Tasks.
    require('jit-grunt')(grunt);
    grunt.loadTasks(path.join(process.cwd(), 'grunt/tasks'));
};
