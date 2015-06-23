var gulp = require('gulp');
// Plumer handles errors - in the .pipe, naturally.
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var reactify = require('reactify');
var babelify = require("babelify");
var watchify = require('watchify');
var concat = require('gulp-concat');
var rewireify = require('rewireify');
var less = require('gulp-less');
var path = require('path');
var livereload  = require('gulp-livereload');



gulp.task('browserify', function(){
    var bundler = browserify({
        entries: ['./src/js/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                gulp.src('src/js/main.js')
                // This is where you add uglifying etc.
                    .pipe(gulp.dest('dist/js')) // this looks like repetition - but it's for the first run
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'))
});


gulp.task('test', function(){
    var _entry = "./test/test-suite.js";

    var tests_bundler = browserify({
        entries: [_entry], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var tests_watcher  = watchify(tests_bundler);

    return tests_watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('tests Updating!');
            tests_watcher.bundle() // Create new bundle that uses the cache for high performance
            gulp.src(_entry)
                // This is where you add uglifying etc.
                .pipe(gulp.dest(_entry)) // this looks like repetition - but it's for the first run
            console.log('Updated tests!', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(plumber())
        .pipe(source('test-main.js'))
        .pipe(gulp.dest('test/bundle'))
});


gulp.task('copy', function(){
    gulp.src(['src/index.html', 'src/static_home.html', 'src/img/**'])
        .pipe(gulp.dest('dist'))
        .pipe(livereload());

    gulp.src(['src/img/**'])
        .pipe(gulp.dest('dist/img/'))

});

gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

//Live reload


gulp.task('default', ['browserify', 'copy', 'less', 'watch']);


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('src/**/*.*', { interval: 500 }, ['default']);
});
