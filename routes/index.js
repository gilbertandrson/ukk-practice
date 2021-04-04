const router = require('express').Router();
const UserRouter = require('./user-routes.js')
const MemberRouter = require('./member-routes.js')
const OutletRouter = require('./outlet-routes.js')
const PaketRouter = require('./paket-routes.js')
const TransaksiRouter = require('./transaksi-routes.js')
const DetailRouter = require('./detail.js')

router.use('/user', UserRouter)
router.use('/member', MemberRouter)
router.use('/outlet', OutletRouter)
router.use('/paket', PaketRouter)
router.use('/transaksi', TransaksiRouter)
router.use('/detail', DetailRouter)
module.exports = router