// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

/*
gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});*/

gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'])