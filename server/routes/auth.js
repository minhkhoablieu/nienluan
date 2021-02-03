const express = require('express')
const router = express.Router()



const AuthController = require('../controllers/Auth/AuthController')


router.post('/login', AuthController.login)

module.exports = router;