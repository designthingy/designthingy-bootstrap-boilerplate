module.exports = { // Create SVG sprite.
    dist: {
        files: {
            'build/assets/svg/svg-sprite.svg': ['build/assets/svg/*.svg', '!build/assets/svg/svg-sprite.svg']
        }
    },
    options: {
        cleanup: true
    }
};
