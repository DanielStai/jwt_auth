const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getThisUser } = require('../controllers/userControllers')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getThisUser)

module.exports = router