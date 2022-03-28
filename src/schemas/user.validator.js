const Joi = require('joi');
const { idSchema } = require('./utils');

const userValidatorSchema = {
  get: idSchema,

  post: Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  put: Joi.object().keys({
    id: Joi.string().required(),
  }),

  delete: {
    id: idSchema,
  },
};

module.exports = userValidatorSchema;
