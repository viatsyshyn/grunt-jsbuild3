# emp.ria-grunt-jsbuild3

EMP RIA Jsbuild3 Gruntjs plugin, see more at https://github.com/viatsyshyn/jsbuild3

[![Build Status](https://travis-ci.org/viatsyshyn/grunt-jsbuild3.png)](https://travis-ci.org/viatsyshyn/grunt-jsbuild3)
[![NPM version](https://img.shields.io/npm/v/emp.ria-grunt-jsbuild3.svg?style=flat)](https://www.npmjs.com/package/emp.ria-grunt-jsbuild3)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install emp.ria-grunt-jsbuild3 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('emp.ria-grunt-jsbuild3');
```

## The "jsbuild3" task

### Overview
In your project's Gruntfile, add a section named `jsbuild3` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsbuild3: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  jsbuild3: {
    options: {},
    all: {}
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
