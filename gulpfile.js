'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');

function lint() {
  return gulp
    .src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
}

function test() {
  return gulp.src('test/test.js', { read: false }).pipe(mocha({ reporter: 'spec' }));
}

const build = gulp.series(lint, test);

exports.default = build;
