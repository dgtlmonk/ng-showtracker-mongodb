var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var concat = require('gulp-concat'); //
var styl = require('gulp-stylus');

var onErr = function (err){
    gutil.log('Error:', err );
}

// paths
var stylSrc = ['./components/styl/*.styl'];
var scssSrc = ['./components/scss/style.scss'];

gulp.task('connect', function (){
    connect.server({
        root:['./public/'],
        port: 3007,
        browser:'chrome',
        livereload : true
    })
});


gulp.task('stylus', function (){
    gulp.src(stylSrc)
        .pipe(plumber())
        .pipe(styl())
        .pipe(gulp.dest('./public/stylesheets'))
        .pipe(connect.reload());
})


gulp.task('sass', function() {
      gulp.src(scssSrc)
          .pipe(plumber())
          .pipe(sass())
          .pipe(gulp.dest('public/stylesheets'))
          .pipe(connect.reload());
});

gulp.task('watch', function() {
        // gulp.watch(stylSrc, ['stylus']);
        gulp.watch(scssSrc, ['sass']);
});

gulp.task('default', ['connect','sass', 'watch']);

