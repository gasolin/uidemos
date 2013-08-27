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
          basePath: "./public/ffosbb/",
          // # Explicitly cached 'master entries'
          // cache: ["js/app.js", "css/style.css"],
          // cachePrefix: "",
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
            "*.ico",
            "*.png",
            "*.html",
            "*.css",
            "../img/*.png",
            "../img/*.jpg",
            "shared/style/**.html",
            "../lib/buildingblocks/style/**/*.css",
            "../lib/buildingblocks/style/**/images/ui/*.png",
            "../lib/buildingblocks/style/**/images/icons/*.png",
            "../lib/buildingblocks/style_unstable/**/*.css",
            "../lib/buildingblocks/style_unstable/**/images/ui/*.js",
            "../lib/buildingblocks/style_unstable/**/images/icons/*.js",
            "../lib/prettify/*.js",
            "../lib/prettify/*.css",
            "../lib/font-awesome/css/*.css",
            "../lib/font-awesome/font/*.eot",
            "../lib/font-awesome/font/*.svg",
            "../lib/font-awesome/font/*.ttf",
            "../lib/font-awesome/font/*.woff",
            "../lib/font-awesome/font/*.otf"
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