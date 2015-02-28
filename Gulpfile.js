var gulp          = require('gulp'),
    autoprefixer  = require('gulp-autoprefixer'),
    live          = require('gulp-livereload'),
    browserify    = require('gulp-browserify');

gulp.task('browserify', function() {
  gulp.src('src/js/app.js')
    .pipe(browserify({ transform:['reactify']}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function() {
  gulp.src('src/css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  live.listen();
  gulp.watch( 'src/**/**', [ 'browserify', 'styles' ]).on('change', live.changed);
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify','styles','copy']);

