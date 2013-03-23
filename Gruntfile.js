module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    manifest: {
      generate: {
        options: {
          // basePath: "../",
          // # Explicitly cached 'master entries'
          // cache: ["js/app.js", "css/style.css"],
          cachePrefix: "/",
          // # Resources that require the user to be online.
          // network: ["http://*", "https://*"],
          // # served if '/' is inaccessible
          // fallback: ["/ /offline.html"],
          // exclude: ["js/jquery.min.js"],
          preferOnline: true,
          verbose: false,
          timestamp: true
        },
        src: [
            "public/ffosbb/*.html",
            "public/ffosbb/*.png",
            "public/ffosbb/*.css",
            "public/img/*.png",
            "public/img/*.jpg",
            "public/ffosbb/shared/style/*.css",
            "public/ffosbb/shared/style/**.html",
            "public/ffosbb/shared/style/**/images/ui/*.png",
            "public/ffosbb/shared/style/**/images/icons/*.png",
            "public/lib/prettify/*.js",
            "public/lib/prettify/*.css",
            "public/lib/font-awesome/css/*.css",
            "public/lib/font-awesome/font/*.eot",
            "public/lib/font-awesome/font/*.svg",
            "public/lib/font-awesome/font/*.ttf",
            "public/lib/font-awesome/font/*.woff",
            "public/lib/font-awesome/font/*.otf"
        ],
        dest: "public/ffosbb/manifest.appcache"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // https://npmjs.org/package/grunt-manifest
  grunt.loadNpmTasks('grunt-manifest');

  // Default task(s).
  grunt.registerTask('default', ['manifest']);

};