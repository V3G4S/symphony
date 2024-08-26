const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorClientes')


router.get('', controlador.listClientes)
router.get('/:id', controlador.getCliente)
router.post('', controlador.createCliente)
router.post('/:id', controlador.updateCliente)
router.delete('', controlador.deleteCliente)

module.exports = router;