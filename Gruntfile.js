
module.exports = function(grunt) {
   "use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    //Initializing the configuration object
      
    grunt.initConfig({
      watch: {
        // If any .less file changes in directory "build/scss/" run the "sass"-task. DIST.
        files: ["assets/scss/*.scss", "assets/partials/*.scss"],
        tasks: ['sass']
      },
      // "sass"-task configuration
      sass: {
          development: {
              options: {
                // includePaths: require('node-bourbon').with('other/path', 'another/path') 
                // - or - 
                loadPath: require('node-bourbon').includePaths
              },
              files: {
                //compiling frontend.less into frontend.css
                "./assets/css/style.css":"./assets/scss/style.scss",
                "./assets/css/nav.css":"./assets/scss/nav.scss",
                "./assets/css/page_transition.css":"./assets/scss/page_transition.scss",
              }
          }
      },

      concat: {
        options: {
          separator: '\n',
        }, // Future development, find way to dynamically conact files without listing them here ...
        dist_js: {
          src: [
            'assets/plugins/jquery.min.js',
            'assets/plugins/bootstrap/js/bootstrap.min.js',
            'assets/plugins/detectmobilebrowser/detectmobilebrowser.js',
            'assets/plugins/jquery-inview/jquery.inview.min.js',
            'assets/plugins/jquery-easing/jquery.easing.min.js',
            'assets/js/main.js',
            'assets/js/animation.js',
            'assets/js/component/bar-chart.js',
            'assets/js/component/animation.js'
          ],
          dest: 'dist/js/base.js',
        },
        dist_css: {
          src: [
            'assets/plugins/bootstrap/css/bootstrap.min.css',
            'assets/plugins/font-awesome/css/font-awesome.min.css',
            'assets/plugins/animate-css/animate.min.css',
            'assets/css/style.css',
            'assets/css/nav.css',
            'assets/css/page_transition.css'
          ],
          dest: 'dist/css/style.css',
        }
      },

        // Uglify task info. Compress the js files.
      uglify: {
        options: {
          mangle: true,
          preserveComments: 'some'
        },
        my_target: {
          files: {
            'dist/js/base.min.js': ['dist/js/base.js',],  
          }
        }
      },

      cssmin: {
        combine: {
          files: {
            'dist/css/style.min.css': ['dist/css/style.css'],
          }
        }
      }
      
    });

    // The default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
        
    // Plugin loading
    grunt.registerTask('default',   []);
    grunt.registerTask('buildcss',  ['sass']);
    grunt.registerTask('deploy',  ['sass','concat','uglify','cssmin']);

};