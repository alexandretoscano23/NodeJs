const modelA = require('../../../moduloA.js');
console.log(modelA.sum(3,3));

const http = require('http'); //módulo interno do node
http.createServer((req, res)=>{
    res.write('Hello World!');
    res.end()
}).listen(8080); //porta 8080 - localhost:8080