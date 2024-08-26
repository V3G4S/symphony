const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorProduts')


router.get('', controlador.listProdutos)
router.get('/:id', controlador.getProduto)
router.post('', )
router.post('/:id', )
router.delete('', )

module.exports = router;