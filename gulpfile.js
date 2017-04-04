var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var cache = require('gulp-cached')
var babel = require('gulp-babel');

gulp.task('default', ['watch']);

gulp.