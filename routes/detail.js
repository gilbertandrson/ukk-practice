const router = require('express').Router()
const DetailTransaksiController = require('../controllers/detail-controllers.js')

router.get('/:id', DetailTransaksiController.getDetailTransaksibyId)
router.get('/', DetailTransaksiController.getDetailTransaksi)
router.post('/', DetailTransaksiController.addDetailTransaksi)
router.put('/', DetailTransaksiController.editDetailTransaksi)
router.delete('/', DetailTransaksiController.deleteDetailTransaksi)
module.exports = router