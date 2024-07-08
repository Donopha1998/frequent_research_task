
const express = require('express');

const { getCountries, getAuthToken, getStates, getCities } = require('../controllers/country');

const router = express.Router()



router.route("/auth").get((req, res) => { getAuthToken(res, res)})

router.route("/states/:name").get((req, res) => {  getStates(req, res)})

router.route("/cities/:name").get((req, res) => { getCities(req, res)})

router.route('/').get((req, res) => getCountries(req, res));

module.exports = router 