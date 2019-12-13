module.exports = { // Autoprefixes and minify the stylesheet.
    theming: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')()
            ]
        },
        files: [{
            expand: true,
            cwd: 'build/assets/vendors/bootstrap/dist/css',
            src: 'bootstrap.css',
            dest: 'build/assets/vendors/bootstrap/dist/css'
        }]
    },
    main: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')()
            ]
        },
        files: [{
            expand: true,
            cwd: 'build/assets/css',
            src: 'style.css',
            dest: 'build/assets/css'
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
            'build/assets/vendors/bootstrap/dist/css/bootstrap.min.css': 'build/assets/vendors/bootstrap/dist/css/bootstrap.css'
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
            'build/assets/css/style.min.css': 'build/assets/css/style.css'
        }
    }
};
