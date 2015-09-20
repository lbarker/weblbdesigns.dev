
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
              }
          }
      },
      
    });

    // The default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
        
    // Plugin loading
    grunt.registerTask('default',   []);
    grunt.registerTask('buildcss',  ['sass']);
};