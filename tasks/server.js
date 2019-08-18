module.exports = function () {
    'use strict';

    this.config.merge({

        // Watch for file changes and runs specific tasks.
        watch: {
            theming: {
                files: ['<%= path.src.root %>/scss/bootstrap-override.scss'],
                tasks: ['copy:build_scss', 'sass:theming', 'postcss:theming', 'postcss:theming_nano']
            },
            main: {
                files: ['<%= path.src.root %>/**/*.scss', '!<%= path.src.root %>/scss/bootstrap-override.scss'],
                tasks: ['copy:build_scss', 'sass:main', 'postcss:main', 'postcss:main_nano']
            },
            js: {
                files: '<%= path.src.root %>/js/*',
                tasks: ['copy:build_js', 'babel', 'uglify']
            },
            html: {
                files: '<%= path.src.root %>/**/*.html',
                tasks: ['copy:build_html']
            }
        },

        // Reloads the browser.
        browserSync: {
            dist: {
                bsFiles: {
                    src: [
                        '<%= path.build.root %>/**/*'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '<%= path.build.root %>'
                }
            }
        }
    });
};
