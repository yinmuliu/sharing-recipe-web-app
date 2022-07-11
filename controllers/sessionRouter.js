// require bcrypt for hashing password
const bcrypt = require('bcrypt')
const express = require('express')

// require user schema
const UserModel = require('../models/userModel')

// set session router
const sessionRouter = express.Router()

// ============ LOGIN GET /user/login (render: login.ejs) ============ //

// ============ LOGOUT DELETE (redirect: /easypeasy) ============ //

// export session router
module.exports = sessionRouter