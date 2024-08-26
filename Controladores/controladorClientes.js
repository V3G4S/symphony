const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')


const listClientes = async (req,res) => {
    var clientes = db.clientes
    res.json(clientes)
}
const getCliente = async (req, res) => {
    const _id = req.params.id
    const listaClientes = db.clientes
    const cliente = listaClientes.find(
        (cliente) => cliente.id == _id
        )
    cliente ? res.send(cliente) : res.status(404).send({error:'not found'})
}
const createCliente = async (req,res) => {
    const dados = req.body
    if(!dados.nome || !dados.preco) {
       return res.status(406).send({error:'Nome e preço deve ser informado'})
    }
    const _id = uuidv4()
    dados.id = _id
    db.clientes.push(dados)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err){
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send()
}
const updateCliente = async (req,res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find(
        (cliente) => cliente.id == _id
        )
    if (!cliente || !dados) {
        res.status(404).send({error:'not found'})
    }
    // atualizar o cliente
}
const deleteCliente = async (req,res) => {
    const _id = req.params.id
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find(
        (cliente) => cliente.id == _id
        )
    // deletar o cliente
}

module.exports = {listClientes, getCliente, createCliente, updateCliente, deleteCliente}