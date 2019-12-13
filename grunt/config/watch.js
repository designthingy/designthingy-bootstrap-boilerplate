module.exports = { // Watch for file changes and runs specific tasks.
    theming: {
        files: ['src/scss/bootstrap-override.scss', 'src/scss/_variables.scss'],
        tasks: ['copy:build_scss', 'sass:theming', 'postcss:theming', 'postcss:theming_nano']
    },
    main: {
        files: ['src/**/*.scss', '!src/scss/bootstrap-override.scss'],
        tasks: ['copy:build_scss', 'sass:main', 'postcss:main', 'postcss:main_nano']
    },
    js: {
        files: 'src/js/*',
        tasks: ['copy:build_js', 'babel', 'uglify']
    },
    html: {
        files: 'src/**/*.html',
        tasks: ['copy:build_html']
    }
};
