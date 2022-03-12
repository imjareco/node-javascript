const Joi = require('joi');

const headers = Joi.Schema({
  Authentication: {
    id: Joi.number().min(1).required(),
  },

  post: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  put: {
    page: Joi.number().required(),
    pageSize: Joi.number().required(),
  },

  delete: {
    id: Joi.number().min(1).required(),
  },
});

module.exports = headers;
