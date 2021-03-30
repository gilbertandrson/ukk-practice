const router = require('express').Router();
const userRouter = require('./user-routes.js')
const cucianRouter = require('./cucian-routes.js')


router.use('/cucian',cucianRouter)
router.use('/user', userRouter)

module.exports = router