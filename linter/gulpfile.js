const gulp = require('gulp');

gulp.task('lint', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('style.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
