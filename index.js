const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('./Rotas/rotasProduts')
const rotasClientes = require('./Rotas/rotasClientes')

app.use(bodyParser.json())

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)

app.listen(6000)