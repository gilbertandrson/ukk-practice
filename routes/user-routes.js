const router = require('express').Router()
const UserController = require('../controllers/user-controllers.js')
const { route } = require('./detail.js')

router.get('/:id', UserController.getUserbyId)
router.get('/', UserController.getUser)
router.post('/register', UserController.registerUser)
router.put('/:id', UserController.editUser)
router.delete('/:id', UserController.deleteUser)
router.post('/login',UserController.loginUser)
module.exports = router