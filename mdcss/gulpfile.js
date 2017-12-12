var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('style.css').pipe(
        postcss([
            require('mdcss')({ /* options */ })
        ])
    ).pipe(
        gulp.dest('.')
    );
});
