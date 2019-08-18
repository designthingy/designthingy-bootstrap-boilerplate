module.exports = function () {
    'use strict';

    // Compiles SCSS.
    this.config('sass', {
        options: {
            implementation: require('node-sass'),
            sourceMap: true
        },
        theming: {
            files: [{
                expand: true,
                cwd: '<%= path.build.assets %>/scss',
                src: 'bootstrap-override.scss',
                rename: function () {
                    return '<%= path.build.vendors %>/bootstrap/dist/css/bootstrap.css';
                }
            }]
        },
        main: {
            files: [{
                expand: true,
                cwd: '<%= path.build.assets %>/scss',
                src: 'style.scss',
                rename: function () {
                    return '<%= path.build.assets %>/css/style.css';
                }
            }]
        }
    });

    // Autoprefixes and minify the stylesheet.
    this.config('postcss', {
        theming: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')()
                ]
            },
            files: [{
                expand: true,
                cwd: '<%= path.build.vendors %>/bootstrap/dist/css',
                src: 'bootstrap.css',
                dest: '<%= path.build.vendors %>/bootstrap/dist/css'
            }]
        },
        main: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')()
                ]
            },
            files: [{
                expand: true,
                cwd: '<%= path.build.assets %>/css',
                src: 'style.css',
                dest: '<%= path.build.assets %>/css'
            }]
        },
        theming_nano: {
            options: {
                map: true,
                processors: [
                    require('cssnano')()
                ]
            },
            files: {
                '<%= path.build.vendors %>/bootstrap/dist/css/bootstrap.min.css': '<%= path.build.vendors %>/bootstrap/dist/css/bootstrap.css'
            }
        },
        main_nano: {
            options: {
                map: true,
                processors: [
                    require('cssnano')()
                ]
            },
            files: {
                '<%= path.build.assets %>/css/style.min.css': '<%= path.build.assets %>/css/style.css'
            }
        }
    });
};
