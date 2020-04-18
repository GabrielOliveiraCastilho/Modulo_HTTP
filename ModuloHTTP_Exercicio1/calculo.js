var circulo = require('./circulo.js');
var http = require('http');


http.createServer (function(req,res){
    res.end("Um circulo de raio 4 tem area de " + circulo.area(4));
    
}).listen(8181);

console.log("O servidor rodando!")

//console.log('Um circulo de raio 4 tem area de '  + circulo.area(4));
