const Joi = require('joi');
const { genericSchemes, fieldSchemes } = require('./utils');

const userValidatorSchema = {
  get: genericSchemes.idSchema,

  post: Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: fieldSchemes.email.required(),
    password: fieldSchemes.password.required(),
  }),

  put: Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string(),
    lastname: Joi.string(),
    username: Joi.string(),
    email: fieldSchemes.email,
    password: fieldSchemes.password,
  }),

  delete: genericSchemes.idSchema,
};

module.exports = userValidatorSchema;
