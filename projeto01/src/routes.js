const { Router } = require("express")
const { createUser, listUsers, listUserDetail, deleteUser, updateUser } = require("./controllers/users")
const { verifyToken } = require("./middlewares/AuthMiddleware")

const routes = Router()

//Rota que lista todos os usuários
routes.get('/', (req, res) => {
    return res.status(200).json("Api")
})

// exibir todos os usuarios criados
routes.get('/users', listUsers)

// Exibir um usuario expecifico através do ID
routes.get('/users/:id', listUserDetail)

// criação de usuarios na rota /users
routes.post('/users', verifyToken, createUser)

// rota para deletar usuario, tbm, através do ID
routes.delete('/users/:id', verifyToken, deleteUser)

// rota de atualização do usuario
routes.put('/users/:id', verifyToken, updateUser)


module.exports = routes