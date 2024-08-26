const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorProdut')


router.get('/produtos', controlador.listProdutos)
router.get('/produtos/:id', controlador.getProduto)
router.post('/produtos', )
router.post('/produtos/:id', )
router.delete('/produtos', )

module.exports = router;