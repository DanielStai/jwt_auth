const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getThisUser } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getThisUser)

module.exports = router