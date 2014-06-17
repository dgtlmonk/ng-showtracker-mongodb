var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber')
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'), //
    styl = require('gulp-stylus'),
    merge = require('merge-stream'),
    coffee = require('gulp-coffee');

var onErr = function (err){
    gutil.log('Error:', err );
}

// paths
var stylSrc = ['./components/styl/*.styl'];
var scssSrc = ['./components/scss/style.scss'];
var coffeeControllersSrc = ['./components/coffee/controllers/*.coffee'];
var coffeeServerSrc = './components/coffee/server.js'

gulp.task('connect', function (){
    connect.server({
        root:['./public/'],
        port: 3001,
        browser:'chrome',
        livereload : true
    })
});


gulp.task('coffee', function (){
    // gulp.src(coffeeControllersSrc)
    //
    var components = gulp.src(coffeeControllersSrc)
        .pipe(plumber())
        .pipe(coffee({
            bare:true
        }))
        .pipe(gulp.dest('./'));

    var server = gulp.src('./components/coffee/server.coffee')
        .pipe(plumber())
        .pipe(coffee({
            bare:true
        }))
        .pipe(gulp.dest('./'));

        return merge(components, server);

       // .pipe(connect.reload())
})

gulp.task('coffee_server', function (){
     gulp.src(coffeeServerSrc)
        .pipe(plumber())
        .pipe(coffee({
            bare:true
        }))
        .pipe(gulp.dest('./public'))
     //   .pipe(connect.reload())
})


gulp.task('stylus', function (){
    gulp.src(stylSrc)
        .pipe(plumber())
        .pipe(styl())
        .pipe(gulp.dest('./public/stylesheets'))
      //  .pipe(connect.reload());
})


gulp.task('sass', function() {
      gulp.src(scssSrc)
          .pipe(plumber())
          .pipe(sass())
          .pipe(gulp.dest('public/stylesheets'))
        //  .pipe(connect.reload());
});

gulp.task('watch', function() {
        // gulp.watch(stylSrc, ['stylus']);
        gulp.watch(scssSrc, ['sass']);
       //  gulp.watch(coffeeServerSrc, ['coffee_server']);
        gulp.watch(coffeeControllersSrc, ['coffee']);
});

gulp.task('default', ['sass','coffee','watch']);

