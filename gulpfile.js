var gulp = require('gulp');
var sass = require('gulp-sass');
var connect= require('gulp-connect');
var nodemon= require('gulp-nodemon');

gulp.task('start', function () {
  nodemon({
    script : 'server.js'
  });
});

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('sass', function() {
   gulp.src('sass/styles.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./public/css/'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function() {
   gulp.watch('sass/**/*.scss',['sass']);
   gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect','sass','watch', 'start']);