const router = require('express').Router()
const MemberController = require('../controllers/member-controllers.js')
const { route } = require('./detail.js')

router.get('/:id', MemberController.getMemberbyId)
router.get('/', MemberController.getMember)
router.post('/', MemberController.addMember)
router.put('/', MemberController.editMember)
router.delete('/', MemberController.deleteMember)
module.exports = router