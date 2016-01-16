var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

//==================TASKS THAT GULP CAN PERFORM=====================================

//BROWSER SYNC
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'collegeFunding'
    }
  })
})

//SASS SYNC
gulp.task('sass', function() {
  return gulp.src('collegeFunding/public/compass/sass/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(gulp.dest('collegeFunding/public/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

//WHAT FOLDERS TO RELOAD
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('collegeFunding/public/compass/sass/scss/**/*.scss', ['sass']);
  gulp.watch('collegeFunding/public/templates/*.html', browserSync.reload);
  gulp.watch('collegeFunding/public/javascript/**/*.js', browserSync.reload);
})


//ALLOWING to run a local webserver with LiveReload 
gulp.task('webserver', function() {
  gulp.src('collegeFunding')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 3000}));
  app.use(express.static(__dirname));
  app.listen(3000, '0.0.0.0');
});

//NEED DEFAULT TASK
gulp.task('default', ['express', 'watch'], function() {
  console.log("this is default");
});
