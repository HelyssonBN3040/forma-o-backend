
// array de armazenamento dos usuarios
let users = []


function createUser(req, res) {
    const { name, age } = req.body

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        age
    }
    users.push(newUser)

    return res.status(201).json(newUser)
}

function listUsers(req, res) {
    return res.status(200).json(users)

}
function listUserDetail(req, res) {
    const currentUser = users.find(
        (user) => user.id === parseInt(req.params.id)
    )
    if (!currentUser) res.status(404).json("Nao foi encontrado nenhum usuário!")

    return res.status(200).send(currentUser)
}
function deleteUser(req, res) {
    const index = users.findIndex(
        (user) => user.id === parseInt(req.params.id)
    )
    if (index === -1) return res.status(404).send("Nao foi encontrado nenhum usuário!")


    users = users.filter((user) => user.id !== parseInt(req.params.id))
    return res.status(200).json("Usuario excluido com sucesso!")
}

function updateUser(req, res) {
    const { age, name } = req.body

    const userId = parseInt(req.params.id)

    const index = users.findIndex(
        (user) => user.id === userId
    )
    if (index === -1) return res.status(404).send("Nao foi encontrado nenhum usuário!")

    const updatedUser = {
        id: users[index].id,
        name,
        age
    }

    users[index] = updatedUser

    return res.status(200).json(updatedUser)
}

module.exports = { createUser, listUsers, listUserDetail, deleteUser, updateUser }