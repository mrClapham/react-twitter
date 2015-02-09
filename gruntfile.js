module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['src/app.js'],
            tasks: ['browserify']
        },
        browserify: {
            dist: {
                files: {
                    'dist/app.bundle.js': ['app/app.js'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
};
