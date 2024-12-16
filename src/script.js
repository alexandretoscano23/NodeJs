const http = require('http'); //importar algo - http é um módulo nativo do node

const hostname = '127.0.0.1'; //localhost - endereço do servidor (acessar o servidor)

const port = 3000; //porta do servidor


//montar o servidor
const server = http.createServer(function(req, res){
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'Text/plain');
    res.end('Hello World');
});

//função para escutar o servidor
server.listen(port, hostname, function(){
    console.log('Server running');
});