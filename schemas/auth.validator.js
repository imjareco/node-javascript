const Joi = require('joi');

const authSchema = {
  login: Joi.Schema({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

module.exports = authSchema;
