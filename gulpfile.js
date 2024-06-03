const gulp = require('gulp');

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