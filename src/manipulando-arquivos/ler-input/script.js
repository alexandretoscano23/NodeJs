const readline = require('readline'); //importa o módulo readline - para ler input do usuário
//cria uma interface de leitura
const rl = readline.createInterface({ 
    input: process.stdin, //a entrada da interface(geralmente o teclado)
    output: process.stdout, //a saída da interface(geralmente o terminal)
});

//primeira pergunta ao usuário
rl.question('Qual é o seu nome?', (name)=>{
    console.log(`Bem-Vindo,${name}!`);
    //segunda pergunta ao usuário
    rl.question('Qual é a sua idade?', (age)=>{
        console.log(`Você tem ${age} anos!`);
    })
});

rl.on('close', ()=>{ //quando encerrar 
    console.log('Até logo!');
    process.exit(0); //encerrar e não ficar na memória
})

