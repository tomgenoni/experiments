var gulp       = require('gulp'),
    foreach    = require('gulp-foreach'),
    rename     = require('gulp-rename'),
    svgSymbols = require('gulp-svg-symbols');

gulp.task('svg', function() {
    return gulp.src('src/svg/**/*.svg')
        .pipe(foreach(function(stream, file) {
            return stream
                .pipe(svgSymbols({
                    templates: ['default-svg']
                }))
                .pipe(rename(file.relative))
                .pipe(gulp.dest('dist'));
        }))
});
