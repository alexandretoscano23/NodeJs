// //função que separa a string
// const fs = require('fs'); //interagir com o sistema de arquivos

// fs.readFile('alexandre.txt', function(err,data){
//    let str = data.toString(); //transforma o buffer em string. Buffer é um objeto de dados binários 
//    //let newStr = str.split(''); //split - divide a string em um array
//    let newStr = str.substring(0,5); //pega do índice 0 os 5 primeiros caracteres
//    console.log(newStr);
// }); 

const fs = require('fs');

fs.readFile('alexandre.txt', (err, data)=>{
      if(err) throw err;
      let string = data.toString();
      let newString = string.split('-');
      console.log(newString);
});
