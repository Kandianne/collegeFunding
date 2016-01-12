var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

//==================TASKS THAT GULP CAN PERFORM=====================================

//BROWSER SYNC
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

//SASS SYNC
gulp.task('sass', function() {
  return gulp.src('app/public/compass/sass/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(gulp.dest('app/public/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

//WHAT FOLDERS TO RELOAD
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/public/compass/sass/scss/**/*.scss', ['sass']);
  gulp.watch('app/public/templates/*.html', browserSync.reload);
  gulp.watch('app/public/javascript/**/*.js', browserSync.reload);
})


//ALLOWING to run a local webserver with LiveReload 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
