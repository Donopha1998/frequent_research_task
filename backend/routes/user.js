
const express = require('express');
const { createUser } = require('../controllers/user');
const router = express.Router()


router.route('/').post((req, res) => createUser(req, res));

module.exports = router 