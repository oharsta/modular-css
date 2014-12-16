module.exports = function(grunt) {

  grunt.initConfig({
    serve: {
      options: {
        port: 9000
      }
    },
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },      styles: {
        files: ['styles/**/*.less'],
        tasks: ['less']
      },
    },
    less: {
          all: {
            files: [{
              src: [
                'styles/**/*.less'
              ],
              expand: true,
              rename: function (dest, src) {
                return src.replace('/less/', '/css/').replace('.less', '.css');
              },
              dest: ''
            }]
          }
        },      
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'less', 'serve']);

};
