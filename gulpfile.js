function print(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizerOi(callback){
    console.log("Olá Gulp");
    dizerTchau();
    callback();
}

function dizerTchau(){
    console.log("Tchau Gulp");
}

exports.default = print;
exports.ola = dizerOi;