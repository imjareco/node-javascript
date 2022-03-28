const Joi = require('joi');

const headersSchema = {
  secure: Joi.object().options({ abortEarly: false }).keys({
    'session-token': Joi.string().token().required(),
  }),
};

module.exports = headersSchema;
