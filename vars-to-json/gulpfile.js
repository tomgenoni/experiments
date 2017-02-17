var gulp = require('gulp');
var replace = require('gulp-replace');
var wrap = require('gulp-wrap');
var beautify = require('gulp-beautify');
var rename = require('gulp-rename');

gulp.task('default', function(){
    gulp.src(['_thumbprint-variable.scss'])
        .pipe(replace(/ ?(\/\/ ?.*)/gm, "")) // remove comments
        .pipe(replace(/^\s*\n/gm, "")) // remove blank lines
        .pipe(replace(/\;/g, ",")) // change ; to ,
        .pipe(replace(/([a-zA-Z0-9$\-\#]+)\s*:\s*([a-zA-Z0-9\-\#\$]+ ?[a-zA-Z0-9.,\-\#\'\%\$ ?\(\)]+)/gm, "\"$1\":\"$2\"")) // wrap pairs in quotes
        .pipe(replace(/([a-zA-Z0-9$\-]+) ?:/g, "\"$1\":")) // convert parent variable names
        .pipe(replace(/,"/g, "\",")) // swap comma with last closing quote in pairs
        .pipe(replace(/(.*)(\()$/gm, "$1 {")) // convert ( to { where needed
        .pipe(replace(/^(\s+|)(\))/gm, "$1}")) // convert ) to } where needed
        .pipe(replace(/.*(}),\n$/gm, "$1\n")) // remove final comma
        .pipe(wrap('{\n<%= contents %>}')) // wrap contents in {} for valid JSON
        .pipe(beautify({indent_size: 4})) // indent file
        .pipe(rename('vars.json'))
        .pipe(gulp.dest('./build/'));
});
