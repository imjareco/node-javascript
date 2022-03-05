const { request, response } = require('express');
const User = require('../models/user');

// const checkUser = async (req = request, res = response) => {
//   const { email } = req.body;
//   const user = User.findOne({ $eq: email });
//   console.log(user);
// };

const createUser = async (req = request, res = response) => {
  const user = new User(req.body);

  try {
    const userSaved = await user.save();
    res.status(201).send({ user: userSaved });
  } catch (error) {
    res.status(500).send({ error: 'Error to save user' });
  }
};

module.exports = {
  createUser,
};
