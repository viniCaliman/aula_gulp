const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');

function compileSass(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function print(callback) {
    setTimeout(() => {
        console.log("Executando via Gulp");
        callback();
    }, 2000)
        
}

function dizerOi(callback){
    console.log("Olá Gulp");
    dizerTchau();
    callback();
}

function dizerTchau(){
    console.log("Tchau Gulp");
}

exports.default = gulp.parallel(print, dizerOi);
exports.sass = compileSass;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass))
}