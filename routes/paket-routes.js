const router = require('express').Router()
const PaketController = require('../controllers/paket-controllers.js')

router.get('/:id', PaketController.getPaketbyId)
router.get('/', PaketController.getPaket)
router.post('/', PaketController.addPaket)
router.put('/:id', PaketController.editPaket)
router.delete('/:id', PaketController.deletePaket)
module.exports = router