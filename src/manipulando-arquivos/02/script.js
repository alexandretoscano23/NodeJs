//ler o arquivo alexandre.txt e exibir o conteúdo no console
const fs = require('fs');

fs.readFile('alexandre.txt', function(err,data){
    console.log(data.toString()); //transformar o buffer em string. Buffer é um objeto que representa um array de dados binários
}); 