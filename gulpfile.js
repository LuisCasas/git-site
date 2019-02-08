var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Gupl running!');
});

gulp.task('html', function() {
    console.log('HTML task running now');
});

gulp.task('styles', function() {
    console.log('Running CSS style');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});