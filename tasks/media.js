module.exports = function () {
    'use strict';

    // Minify Images.
    this.config('imagemin', {
        options: {
            cache: false
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= path.build.assets %>/images',
                src: ['**/*.{png,jpg,gif}'],
                dest: '<%= path.build.assets %>/images'
            }]
        }
    });

    // Minify SVG.
    this.config('svgmin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= path.build.assets %>/svg',
                src: ['*.svg'],
                dest: '<%= path.build.assets %>/svg'
            }]
        },
        options: {
            plugins: [
                {removeViewBox: false}, // don't remove the viewbox attribute from the SVG
                {removeEmptyAttrs: false} // don't remove Empty Attributes from the SVG
            ]
        }
    });

    // Create SVG sprite.
    this.config('svgstore', {
        dist: {
            files: {
                '<%= path.build.assets %>/svg/svg-sprite.svg': ['<%= path.build.assets %>/svg/*.svg', '!<%= path.build.assets %>/svg/svg-sprite.svg']
            }
        },
        options: {
            cleanup: true
        }
    });
};
