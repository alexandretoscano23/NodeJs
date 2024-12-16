//função que separa a string
const fs = require('fs');

fs.readFile('alexandre.txt', function(err,data){
   let str = data.toString();
   //let newStr = str.split(''); //split - divide a string em um array
   let newStr = str.substring(0,5); //pega do índice 0 os 5 primeiros caracteres
   console.log(newStr);
}); 