const User = require("../models/user");
const { errorHandler } = require("../utils");

const createUser = async (req, res) => {
  try {
    const { body } = req;

    const requiredFields = ['first_name', 'last_name', 'email', 'country', 'state', 'city', 'gender', 'dateOfBirth'];

    const emptyFields = requiredFields.filter(field => !body[field]);

    if (emptyFields.length > 0) {
      return errorHandler(res, `Missing required fields: ${emptyFields.join(', ')}`);
    }
    
     await User.create(body);

    res.status(201).json({"message":"Registration Successful"});

  } catch (error) {

    errorHandler(res, error);
  }
};

module.exports = { createUser };
