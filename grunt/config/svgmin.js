module.exports = { // Minify SVG.
    dist: {
        files: [{
            expand: true,
            cwd: 'src/svg',
            src: ['*.svg'],
            dest: 'build/assets/svg'
        }]
    },
    options: {
        plugins: [
            {removeViewBox: false}, // don't remove the viewbox attribute from the SVG
            {removeEmptyAttrs: false} // don't remove Empty Attributes from the SVG
        ]
    }
};
