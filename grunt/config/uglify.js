module.exports = { // Minify js files.
    main: {
        options: {
            sourceMap: true
        },
        files: {
            'build/assets/js/main.min.js': 'build/assets/js/main.js'
        }
    }
};
