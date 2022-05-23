'use strict'

const router = require('express').Router()
const { signUp } = require('../../controllers/AuthController/authController')

router.post('/signup', signUp)

module.exports = router