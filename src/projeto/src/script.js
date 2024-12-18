const ejs = require('ejs');
const express = require('express'); // importa o express - framework para node.js
const path = require('path'); // importa o path - modulo nativo do node.js para lidar com caminhos de arquivos e diretórios

const app = express();

app.engine('html', require('ejs').renderFile); // renderiza o html com o ejs  
app.set('view engine', 'html'); //setar a view engine para html
app.use('/public', express.static(path.join(__dirname, 'public'))); //diretorio estático na pasta public
app.set('views', path.join(__dirname, '/views')); //pegar a pasta views completa


let tasks = ['Comprar pão', 'Estudar para a prova'];

app.get('/', (req, res)=>{
    res.render('index', {tasksList: tasks});
});

app.get('/deletar/:id', (req, res)=>{
    tasks = tasks.filter((value, index)=>{
        if(index != req.params.id){
            return value;
        }
    });
});

app.listen(5000, ()=>{
    console.log('Server updated and running on port 5000');
});