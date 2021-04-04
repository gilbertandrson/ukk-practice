const router = require('express').Router()
const OutletController = require('../controllers/outlet-controllers.js')
const PaketController = require('../controllers/paket-controllers.js')

router.get('/:id', OutletController.getOutletbyId)
router.get('/', OutletController.getOutlet)
router.post('/', OutletController.addOutlet)
router.put('/', OutletController.addOutlet)
router.delete('/', OutletController.deleteOutlet)
module.exports = router