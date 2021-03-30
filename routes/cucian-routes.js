const router = require('express').Router()
const CucianController = require('../controllers/CucianController.js')

router.get('/', CucianController.getAllCucian)
router.get('/:id', CucianController.getAllCucianWithParams)
module.exports = router