const router = require('express').Router()
const UserController = require('../controllers/UserController.js')

router.get('/:id', UserController.getUserbyId)
router.get('/id/:cucian', UserController.getUserCucian)
module.exports = router