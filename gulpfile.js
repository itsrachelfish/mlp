var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var sass = require('node-sass');

// Initialize watchify
var bundler = watchify(browserify({debug: true}));

// Add main script file to the bundle
bundler.add('./static/js/main.js');

gulp.task('default', ['js', 'sass', 'watch']);
gulp.task('js', jsBundle);
gulp.task('sass', sassBundle);
gulp.task('watch', watch);
bundler.on('update', jsBundle);
bundler.on('log', gutil.log);

function jsBundle()
{
    bundler.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./static/js'));
}
 
function sassBundle()
{
    var options =
    {
        file: './static/css/main.scss',
    };

    var result = sass.renderSync(options);
    fs.writeFileSync('./static/css/bundle.css', result.css);
}

function watch()
{
    gulp.watch('./static/css/*.scss', ['sass']);
}
