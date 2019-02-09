var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Gupl running!');
});

gulp.task('html', function() {
    console.log('HTML task running now');
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    watch('./app/index.html', function(done) {
        gulp.start('html');
        done();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.parallel('styles');
    });
});