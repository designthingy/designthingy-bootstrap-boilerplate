module.exports = { // Process html files at build time.
    dist: {
        files: [{
            expand: true,
            cwd: 'build',
            src: '**/*.html',
            dest: 'build'
        }]
    },
};
