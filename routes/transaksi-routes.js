const router = require('express').Router()
const TransaksiController = require('../controllers/transaksi-controllers.js')

router.get('/:id', TransaksiController.getTransaksibyId)
router.get('/', TransaksiController.getTransaksi)
router.post('/', TransaksiController.addTransaksi)
router.put('/:id', TransaksiController.editTransaksi)
router.delete('/:id', TransaksiController.deleteTransaksi)
module.exports = router