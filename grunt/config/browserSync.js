module.exports = { // Reloads the browser.
    dist: {
        bsFiles: {
            src: [
                'build/**/*'
            ]
        },
        options: {
            watchTask: true,
            server: 'build'
        }
    }
};
