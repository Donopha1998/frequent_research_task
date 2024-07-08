const axios = require("axios");
const { errorHandler } = require("../utils");
require('dotenv').config();
const baseURL = "https://www.universal-tutorial.com/api/";
const authToken = `Bearer ${process.env.TOKEN}`;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Accept": "application/json",
        "Authorization": authToken,
    },
});


const getAuthToken = async (req, res) => {
    try {
        const response = await axios.get("getaccesstoken", {
            headers: {
                "api-token": process.env.PLACES_KEY,
                "user-email": process.env.email,
            },
        });
        res.json(response.data);
    } catch (error) {
        errorHandler(res, error);
    }
};

const getCountries = async (req, res) => {
    try {
        const response = await axiosInstance.get("countries");
        res.json(response.data);
    } catch (error) {
        errorHandler(res, error);
    }
};

const getStates = async (req, res) => {
    try {
        const response = await axiosInstance.get(`states/${req.params.name}`);
        res.json(response.data);
    } catch (error) {
        errorHandler(res, error);
    }
};

const getCities = async (req, res) => {
    try {
        const response = await axiosInstance.get(`cities/${req.params.name}`);
        res.json(response.data);
    } catch (error) {
        errorHandler(res, error);
    }
};

module.exports = { getCountries, getAuthToken, getStates, getCities };
