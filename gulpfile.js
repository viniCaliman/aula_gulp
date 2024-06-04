const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compressImage(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'));
}

function compressJs(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

function compileSass(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

exports.default = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJs));
    gulp.watch('./src/img/*', {ignoreInitial: false}, gulp.series(compressImage));
}