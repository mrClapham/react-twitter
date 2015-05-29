var gulp = require('gulp');
// Plumer handles errors - in the .pipe, naturally.
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');
var livereload  = require('gulp-livereload');



gulp.task('browserify', function(){
    gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
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
