var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var concat = require('gulp-concat');


var sassPaths = [
  './bower_components/foundation-sites/scss',
  './bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src([
      './scss/app.scss',
      './assets/css/app.scss'
    ])
    .pipe($.sass({
        includePaths: sassPaths
      })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public/css/'));
});



//Default
gulp.task('default', ['sass','scripts'] );


// JS
gulp.task('scripts', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.js',
      './bower_components/foundation-sites/dist/foundation.js',
      './bower_components/foundation-sites/js/foundation.dropdownMenu.js',
      './bower_components/what-input/what-input.js',
      './assets/js/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'))

})


// AUTORELOAD
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('./assets/**/*.scss', ['sass']);
  gulp.watch('./assets/**/*.js', ['scripts']);

})

gulp.task('browser-sync', ['sass','scripts'], function() {
  var files = [
    './public/**/*.html',
    './public/css/**/*.css',
    './public/images/**/*.png',
    './public/js/**/*.js'
  ];

  browserSync.init(files, {
    server: {
      baseDir: "./public",
      index: "index.html"
    }
  });
  // Watch any files in dist/, reload on change
  gulp.watch(['public/**']).on('change', browserSync.reload);

});
