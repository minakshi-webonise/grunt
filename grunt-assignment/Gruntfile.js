module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
         'temp/all.min.js': ['src/js/1_script.js','src/js/2_script.js']
        }
      }
    },
  cssmin: {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
         'temp/all.min.css': ['src/css/1_style.css','src/css/2_style.css']
        }
      }
  },
   tags: {
        build: {
            options: {
                scriptTemplate: '<script type="text/javascript" src="{{ path }}?__inline=true"></script>',
                linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}?__inline=true"/>',
                openTag: '<!-- start template tags -->',
                closeTag: '<!-- end template tags -->'
            },
            src: [
                'temp/all.min.js',
                'temp/all.min.css'
            ],
            dest: 'src/source.html'
        }
    },
  inline: {
    dist: {
      src: [ 'src/source.html' ],
      dest: ['build/final.html']
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks('grunt-inline');

  grunt.registerTask('default', ['uglify','cssmin','tags','inline']);

}