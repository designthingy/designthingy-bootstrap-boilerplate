module.exports = { // Compiles SCSS.
    options: {
        implementation: require('node-sass'),
        sourceMap: true
    },
    theming: {
        files: [{
            expand: true,
            cwd: 'build/assets/scss',
            src: 'bootstrap-override.scss',
            rename: function () {
                return 'build/assets/vendors/bootstrap/dist/css/bootstrap.css';
            }
        }]
    },
    main: {
        files: [{
            expand: true,
            cwd: 'build/assets/scss',
            src: 'style.scss',
            rename: function () {
                return 'build/assets/css/style.css';
            }
        }]
    }
};
