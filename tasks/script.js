module.exports = function () {
    'use strict';

    // Babel - transpiler for js.
    this.config('babel', {
        options: {
            sourceMap: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= path.src.root %>/js',
                src: 'main.js',
                dest: '<%= path.build.assets %>/js'
            }]
        }
    });

    // Minify js files.
    this.config('uglify', {
        main: {
            options: {
                sourceMap: true
            },
            files: {
                '<%= path.build.assets %>/js/main.min.js': '<%= path.build.assets %>/js/main.js',
                '<%= path.build.assets %>/js/theme-ext.min.js': '<%= path.build.assets %>/js/theme-ext.js'
            }
        }
    });
};
