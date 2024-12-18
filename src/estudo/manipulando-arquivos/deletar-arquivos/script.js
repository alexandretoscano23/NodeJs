// //função que separa a string
// const fs = require('fs'); //interagir com o sistema de arquivos
// const read = require('readline');

// //deletar o arquivo
// fs.unlink('alexandre.txt', (err)=>{
//     if(err){
//         console.log('Erro ao deletar arquivo');
//     } else{
//         console.log('Arquivo deletado com sucesso');
//     }
// });

const fs = require('fs');

fs.unlink('intruso.txt', (err)=>{
    if(err) throw err;
    console.log('Exluindo arquivo')
});