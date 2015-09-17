
module.exports = function(grunt) {
   "use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    //Initializing the configuration object
      
    grunt.initConfig({
      watch: {
        // If any .less file changes in directory "build/less/" run the "less"-task. DIST.
        //files: ["assets/less/component/ebook/skins/*.less", "assets/less/component/ebook/*.less", "assets/less/*.less", "assets/less/component/*.less", "assets/js/*.js", "assets/js/component/*.js"],
        //tasks: ['less','concat','uglify','cssmin']
        // If any .less file changes in directory "build/less/" run the "less"-task. DEVELOPMENT
        files: ["assets/less/*.less", "assets/less/component/*.less", "assets/less/*.less", "assets/less/component/colors/*.less"],
        tasks: ['less']
      },
      // "less"-task configuration
      less: {
          development: {
              options: {
                compress: false,  //minifying the result
              },
              files: {
                //compiling frontend.less into frontend.css
                "./assets/css/style.css":"./assets/less/style.less",
                "./assets/css/component/component.css":"./assets/less/component/component.less",
              }
          }
      },
      
    });

    // The default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
        
    // Plugin loading
    grunt.registerTask('default',   []);
    grunt.registerTask('buildcss',  ['less']);
};