var gulp = require('gulp');
var concat = require('gulp-concat');
var cssMarkdown = require('css-markdown');
var gutil = require('gulp-util');
var fs = require('fs');
var tap = require('gulp-tap');
var alerts = require('./scripts/alerts.js');
var markdownIt = require('markdown-it');

var md = new markdownIt();
md.use(alerts);

gulp.task('combine', function() {
  return gulp.src('./src/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./tmp/'));
});

gulp.task('css-to-md', function() {
    return convertCSS();
});

function convertCSS() {
    var css = fs.readFileSync(__dirname + '/tmp/all.css', 'utf8');
    this.markdown = cssMarkdown.parse(css);
    fs.writeFile(__dirname + '/tmp/all.md', this.markdown, function (err) {
      if (err) return console.log(err);
    });
}

gulp.task('build', function() {
    return gulp.src('./tmp/all.md')
        .pipe(tap(markdownToHtml))
        .pipe(gulp.dest('./dist'));
});

function markdownToHtml(file) {
    var result = md.render(file.contents.toString());
    file.contents = new Buffer(result);
    file.path = gutil.replaceExtension(file.path, '.html');
    return;
}
