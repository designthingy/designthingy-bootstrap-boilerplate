module.exports = { // Minify Images.
    options: {
        cache: false
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'build/assets/images',
            src: ['**/*.{tif,png,jpg,gif}'],
            dest: 'build/assets/images'
        }]
    }
};
