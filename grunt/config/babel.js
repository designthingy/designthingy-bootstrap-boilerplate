module.exports = { // Babel - transpiler for js.
    options: {
        sourceMap: true
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '*.js',
            dest: 'build/assets/js'
        }]
    }
};