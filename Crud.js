import express from 'express'
import { PrismaClient } from '@prisma/client';
//---------------------------------------------------------------------------------consts dos dados do form

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------itens do db
const prisma = new PrismaClient()
 
const app = express();//app é uma FUNCTION que tem acesso a todas as funcionalidade da biblioteca express

const port = 3000;
//---------------------------------------------------------------------------------
// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para listar todos os usuários (READ)
app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()//puxa todos os usuarios da lista de usuarios do servidor

    res.status(200).json(users) //estatus 200 é para sinalizar que deu tudo certo
                        //a res é um status 200 e tbm um Json dos users 
});

// Rota para criar um novo usuário (CREATE)
app.post('/users', async (req, res) => {
    //await é para verificar apenas quando for criado e não o tempo todo
    //por isso é necessário na function de post definir o req e o res como async(assincrona)
    await prisma.user.create({
        data: {//data é o modelo padrão do prisma usado para criar os elementos
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body) //201 é um status que fica no servidor que sinaliza que deu certo e que foi criado oq foi pedido
});

//acessando a rota put e CRIANDO uma variavel dentro da requisição e nomeando ela de id
//os dois pontos depois do barra servem para nomear uma variavel dentro do express
app.put('/users/:id', async(req, res) => {

    await prisma.user.update({
        //o where é para dizer "onde" eu vou fazer o update
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/users/:id', async(req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }

    })
    
    res.status(200).json({message: 'usuário deletado com sucesso'})
})

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

/**
"type" : "module",
  "devDependencies": {
    "prisma": "^6.5.0"
  }
 */