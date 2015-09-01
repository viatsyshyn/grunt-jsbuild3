/*
 * emp.ria-grunt-jsbuild3
 * https://code.google.com/p/emp-ria/
 *
 * Copyright (c) 2013 Volodymyt Iatsyshyn
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var build_number = grunt.option("build") || '0';
  var build_tag = grunt.option("tag") || '0.0';

  var pkg = grunt.file.readJSON('package.json');
  pkg.version = [build_tag, build_number].join('.') || pkg.version;

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    jsbuild3: {
      options: {
        config: 'test/jsbuild.json'
      },
      all: {}
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },
    
    replace: {
      version: {
        src: 'package.json',               // source files array (supports minimatch)
        dest: 'package.json',              // destination directory or file
        replacements: [{
          from: '0.0.0',                   // string replacement
          to: pkg.version
        }]
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-text-replace');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jsbuild3', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
