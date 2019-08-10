module.exports = function (grunt) {
    'use strict';
    // Configure Package
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: { // Copy third party libraries from /node_modules into /vendors.
            jquery: {
                files: [{
                    expand: true,
                    cwd: './node_modules/jquery/dist',
                    src: [
                        'jquery*',
                        '!jquery.slim*'
                    ],
                    dest: './build/assets/vendors/jquery/dist'
                }]
            },
            easing: {
                files: [{
                    expand: true,
                    cwd: './node_modules/jquery.easing',
                    src: [
                        'jquery.easing*',
                        '!jquery.easing.compatibility.js'
                    ],
                    dest: './build/assets/vendors/jquery/dist'
                }]
            },
            popper: {
                files: [{
                    expand: true,
                    cwd: './node_modules/popper.js/dist/umd',
                    src: [
                        '*',
                        '!*.flow',
                        '!popper-utils*'
                    ],
                    dest: './build/assets/vendors/bootstrap/dist/js'
                }]
            },
            bootstrap: {
                files: [{
                    expand: true,
                    cwd: './node_modules/bootstrap',
                    src: [
                        'scss/**/*',
                        'dist/**/*',
                        '!dist/css/bootstrap-grid*',
                        '!dist/css/bootstrap-reboot*',
                        '!dist/js/bootstrap.bundle*'
                    ],
                    dest: './build/assets/vendors/bootstrap'
                }]
            },
            svg4everybody: {
                files: [{
                    expand: true,
                    cwd: './node_modules/svg4everybody/dist',
                    src: [
                        '*',
                        '!*.legacy.*'

                    ],
                    dest: './build/assets/vendors/svg4everybody/dist'
                }]
            },
            build_html: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: [
                        '**/*.html'

                    ],
                    dest: './build'
                }]
            },
            build_scss: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: [
                        '**/*.scss'
                    ],
                    dest: './build/assets'
                }]
            },
            build_js: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: [
                        '**/*.js'
                    ],
                    dest: './build/assets'
                }]
            }
        },
        sass: { // Compiles SCSS.
            options: {
                implementation: require('node-sass'),
                sourceMap: true
            },
            theming: {
                files: [{
                    expand: true,
                    cwd: './build/assets/scss',
                    src: 'bootstrap-override.scss',
                    rename: function () {
                        return './build/assets/vendors/bootstrap/dist/css/bootstrap.css';
                    }
                }]
            },
            main: {
                files: [{
                    expand: true,
                    cwd: './build/assets/scss',
                    src: 'style.scss',
                    rename: function () {
                        return './build/assets/css/style.css';
                    }
                }]
            }
        },
        babel: { // Babel - transpiler for js.
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './src/js',
                    src: 'main.js',
                    dest: './build/assets/js'
                }]
            }
        },
        uglify: { // Minify js files.
            main: {
                options: {
                    sourceMap: true
                },
                files: {
                    './build/assets/js/main.min.js': './build/assets/js/main.js'
                }
            }
        },
        postcss: { // Autoprefixes and minify the stylesheet.
            theming: {
                options: {
                    map: false,
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                files: [{
                    expand: true,
                    cwd: './build/assets/vendors/bootstrap/dist/css',
                    src: 'bootstrap.css',
                    dest: './build/assets/vendors/bootstrap/dist/css'
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
                    cwd: './build/assets/css',
                    src: 'style.css',
                    dest: './build/assets/css'
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
                    './build/assets/vendors/bootstrap/dist/css/bootstrap.min.css': './build/assets/vendors/bootstrap/dist/css/bootstrap.css'
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
                    './build/assets/css/style.min.css': './build/assets/css/style.css'
                }
            }
        },
        clean: { // Remove unwanted files.
            build: [
                './build/assets/**/*.map',
                './build/**/scss/'
            ],
            rm_build: [
                './build'
            ]
        },
        svgmin: { // Minify SVG.
            dist: {
                files: [{
                    expand: true,
                    cwd: './build/assets/svg',
                    src: ['*.svg'],
                    dest: './build/assets/svg'
                }]
            },
            options: {
                plugins: [
                    {removeViewBox: false}, // don't remove the viewbox attribute from the SVG
                    {removeEmptyAttrs: false} // don't remove Empty Attributes from the SVG
                ]
            }
        },
        svgstore: { // Create SVG sprite.
            dist: {
                files: {
                    './build/assets/svg/svg-sprite.svg': ['./build/assets/svg/*.svg', '!./build/assets/svg/svg-sprite.svg']
                }
            },
            options: {
                cleanup: true
            }
        },
        eslint: { // Linting JS files.
            options: {
                configFile: './.eslintrc.js',
                formate: 'text',
                outputFile: './test/eslint.txt',
                fix: true
            },
            target: ['./src/js/**/*']
        },
        stylelint: { // Linting SCSS files.
            options: {
                configFile: './.stylelintrc',
                formatter: 'string',
                ignoreDisables: false,
                failOnError: true,
                outputFile: './test/stylelint.txt',
                reportNeedlessDisables: false,
                syntax: 'scss',
                fix: true
            },
            src: './src/scss/**/*'
        },
        watch: { // Watch for file changes and runs specific tasks.
            theming: {
                files: ['./src/scss/bootstrap-override.scss'],
                tasks: ['copy:build_scss', 'sass:theming', 'postcss:theming', 'postcss:theming_nano']
            },
            main: {
                files: ['./src/**/*.scss', '!./src/scss/bootstrap-override.scss'],
                tasks: ['copy:build_scss', 'sass:main', 'postcss:main', 'postcss:main_nano']
            },
            js: {
                files: './src/js/*',
                tasks: ['copy:build_js', 'babel', 'uglify']
            },
            html: {
                files: './src/**/*.html',
                tasks: ['copy:build_html']
            }
        },
        browserSync: { // Reloads the browser.
            dist: {
                bsFiles: {
                    src: [
                        './build/**/*'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './build'
                }
            }
        }
    });
    // Load Packages From NPM Repository.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svgmin');

    // Register Tasks.
    grunt.registerTask('vendor', ['copy:jquery', 'copy:easing', 'copy:popper', 'copy:bootstrap', 'copy:svg4everybody']);
    grunt.registerTask('theming', ['sass:theming', 'postcss:theming', 'postcss:theming_nano']);
    grunt.registerTask('vendors', ['vendor', 'theming']);
    grunt.registerTask('svg', ['svgmin', 'svgstore']);
    grunt.registerTask('test', ['eslint', 'stylelint']);
    grunt.registerTask('prev', ['browserSync', 'watch']);
    grunt.registerTask('dev', ['clean:rm_build', 'copy:build_html', 'copy:build_scss', 'copy:build_js', 'vendor', 'sass', 'postcss', 'babel', 'uglify']);
    grunt.registerTask('build', ['dev', 'clean:build']);
    grunt.registerTask('default', ['dev', 'prev']);
};
