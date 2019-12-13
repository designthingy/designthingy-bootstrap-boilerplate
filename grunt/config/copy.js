module.exports = {
    // Copy third party libraries from /node_modules into /build/vendors
    // And copy project static files from /src into /build
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
            dest: 'build/assets/vendors/fontawesome'
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
            dest: 'build/assets/vendors/jquery/dist'
        }]
    },
    jquery_datepicker: {
        files: [{
            expand: true,
            cwd: './node_modules/jquery-ui/ui/widgets',
            src: [
                'datepicker.js'
            ],
            dest: 'build/assets/vendors/jquery/dist'
        }]
    },
    jquery_timepicker: {
        files: [{
            expand: true,
            cwd: './node_modules/jquery-timepicker',
            src: [
                'jquery.timepicker.*'
            ],
            dest: 'build/assets/vendors/jquery/dist'
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
            dest: 'build/assets/vendors/jquery/dist'
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
            dest: 'build/assets/vendors/bootstrap/dist/js'
        }]
    },
    bs_file_input: {
        files: [{
            expand: true,
            cwd: './node_modules/bs-custom-file-input/dist',
            src: ['*'],
            dest: 'build/assets/vendors/bootstrap/dist/js'
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
            dest: 'build/assets/vendors/bootstrap'
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
            dest: 'build/assets/vendors/svg4everybody/dist'
        }]
    },
    build_static: {
        files: [{
            expand: true,
            cwd: 'src',
            src: [
                '**/*.{png,jpg,gif,css}',
                'fonts/**/*'
            ],
            dest: 'build/assets'
        }]
    },
    build_js: {
        files: [{
            expand: true,
            cwd: 'src',
            src: [
                '**/*.js'
            ],
            dest: 'build'
        }]
    },
    build_html: {
        files: [{
            expand: true,
            cwd: 'src',
            src: [
                '**/*.html'
            ],
            dest: 'build'
        }]
    },
    build_scss: {
        files: [{
            expand: true,
            cwd: 'src',
            src: [
                '**/*.scss'
            ],
            dest: 'build/assets'
        }]
    }
};
