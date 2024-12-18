const http = require("http"); //importar algo - http é um módulo nativo do node
const fs = require("fs"); //módulo para manipular arquivos
const hostname = "127.0.0.1"; //localhost - endereço do servidor (acessar o servidor)
const port = 3000; //porta do servidor

//montar o servidor
const server = http.createServer(function (req, res) { //req = requisição, res = resposta
  //só aparece o código html quando acessar a url /alexandre
  if (req.url === "/alexandre") {
    //ler um arquivo html
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "content-Type": "text/html" }); //cabeçalho de resposta
      res.write(data); //escrever os dados
      return res.end(); //finalizar a resposta
    });
  } else { //se não for a url /alexandre
    return res.end(); //finalizar a resposta
  }
});

//função para escutar o servidor
server.listen(port, hostname, function () {
  console.log("Server running");
});
