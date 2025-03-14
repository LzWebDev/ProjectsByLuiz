import express from 'express'

const app = express();//app é uma FUNCTION que tem acesso a todas as funcionalidade da biblioteca express

const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Banco de dados em memória (simulação)
const users = [];

// Rota para listar todos os usuários (READ)
app.get('/users', (req, res) => {
    res.status(200).json(users) //estatus 200 é para sinalizar que deu tudo certo

});

// Rota para criar um novo usuário (CREATE)
app.post('/users', (req, res) => {
    users.push(req.body)
    
    res.status(201).json(req.body) //201 é um status que fica no servidor que sinaliza que deu certo e que foi criado oq foi pedido
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

/**
    -Criar um usuario
    -Listar os usuarios
    -Editar um usuario
    -Deletar um usuario


    meloluizdev20
    JSuUg9XbOCltF2Tj
 */