var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./test'));
});

gulp.task('css-min', () => {
  return gulp.src('./test/*.css')
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});
