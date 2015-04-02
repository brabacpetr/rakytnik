module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ["src/less/**/*.less"],
                tasks: ["less:build"] 
            },
            css: {
                files: ["build/css/style.css"],
                options: {
                    livereload: true 
                } 
            }, 
            html: {
                files: ["*.html"],
                options: {
                    livereload: true 
                } 
            }
        },
        less: {
            build: {
                files: {
                    'build/css/style.css': 'src/less/index.less' 
                } 
            } 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
}
