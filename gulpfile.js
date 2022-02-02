const gulp = require('gulp');
// const gulpSass = require('gulp-sass');
// const dartSass = require('sass');
// const sass = gulpSass(dartSass);
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const reload = browserSync.reload();


function style() {
    return gulp.src('./scss/main.scss')
        .pipe(plumber([{ errorHandler: false }]))
        //.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;