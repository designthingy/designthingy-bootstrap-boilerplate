module.exports = function () {
    'use strict';
    // Copy third party libraries from /node_modules into /build/vendors
    // And copy project static files from /src into /build
    this.config('copy', {
        fontawesome: {
            files: [{
                expand: true,
                cwd: 'node_modules/@fortawesome/fontawesome-free',
                src: [
                    'css/*',
                    '!js/*',
                    '!sprites/*',
                    '!svgs/*',
                    'webfonts/*'
                ],
                dest: '<%= path.build.vendors %>/fontawesome'
            }]
        },
        jquery: {
            files: [{
                expand: true,
                cwd: './node_modules/jquery/dist',
                src: [
                    'jquery*',
                    '!jquery.slim*'
                ],
                dest: '<%= path.build.vendors %>/jquery/dist'
            }]
        },
        jquery_datepicker: {
            files: [{
                expand: true,
                cwd: './node_modules/jquery-ui/ui/widgets',
                src: [
                    'datepicker.js'
                ],
                dest: '<%= path.build.vendors %>/jquery/dist'
            }]
        },
        jquery_timepicker: {
            files: [{
                expand: true,
                cwd: './node_modules/jquery-timepicker',
                src: [
                    'jquery.timepicker.*'
                ],
                dest: '<%= path.build.vendors %>/jquery/dist'
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
                dest: '<%= path.build.vendors %>/jquery/dist'
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
                dest: '<%= path.build.vendors %>/bootstrap/dist/js'
            }]
        },
        bs_file_input: {
            files: [{
                expand: true,
                cwd: './node_modules/bs-custom-file-input/dist',
                src: ['*'],
                dest: '<%= path.build.vendors %>/bootstrap/dist/js'
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
                dest: '<%= path.build.vendors %>/bootstrap'
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
                dest: '<%= path.build.vendors %>/svg4everybody/dist'
            }]
        },
        build_static: {
            files: [{
                expand: true,
                cwd: '<%= path.src.root %>',
                src: [
                    '**/*.{png,jpg,gif,js,css}',
                    'fonts/**/*'
                ],
                dest: '<%= path.build.assets %>'
            }]
        },
        build_static_html: {
            files: [{
                expand: true,
                cwd: '<%= path.src.root %>',
                src: [
                    '**/*.html'
                ],
                dest: '<%= path.build.root %>'
            }]
        },
        build_scss: {
            files: [{
                expand: true,
                cwd: '<%= path.src.root %>',
                src: [
                    '**/*.scss'
                ],
                dest: '<%= path.build.assets %>'
            }]
        }
    });
};
