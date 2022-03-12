const Joi = require('joi');

const userValidatorSchema = {
  get: {
    id: Joi.number().min(1).required(),
  },

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
    id: Joi.number().min(1).required(),
  },
};

module.exports = userValidatorSchema;
