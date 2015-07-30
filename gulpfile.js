var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var sass = require('node-sass');

// Initialize watchify
var bundler = watchify(browserify({debug: true}));

// Object to handle bundling / compilation tasks
var bundle =
{
    deps: function()
    {
        var dependencies =
        [
            './static/js/deps/basic.js',    // Load wetfish basic first
            './static/js/deps/*.js',        // Load everything else
        ];
        
        gulp.src(dependencies)
        .pipe(concat('deps.js'))
        .pipe(gulp.dest('./static/js'));
    },
    
    js: function()
    {
        bundler.bundle()
        // Log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./static/js'));
    },

    scss: function()
    {
        var options =
        {
            file: './static/css/main.scss',
        };

        var result = sass.renderSync(options);
        fs.writeFileSync('./static/css/bundle.css', result.css);
    }
};

function watch()
{
    gulp.watch('./static/css/**/*.scss', function()
    {
        setTimeout(function()
        {
            gulp.start('scss');
        }, 100);
    });
}

// Add main script file to the bundle
bundler.add('./static/js/main.js');
bundler.on('update', bundle.js);
bundler.on('log', gutil.log);

// By default, do everything
gulp.task('default', ['deps', 'js', 'scss', 'watch']);

// Separate tasks for individual things
gulp.task('deps', bundle.deps);
gulp.task('js', bundle.js);
gulp.task('scss', bundle.scss);
gulp.task('watch', watch);
