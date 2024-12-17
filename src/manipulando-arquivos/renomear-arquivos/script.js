// const fs = require('fs'); //interagir com o sistema de arquivos
// const read = require('readline');

// fs.rename('texto.txt', 'alexandre-toscano.txt',(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('Arquivo renomeado com sucesso!');
//     }
// })

const fs = require('fs');
fs.rename('teste-alexandre.txt', 'alexandre.html', (err)=>{
    if(err) throw err;
    console.log('Renomeado com sucesso!');
});
