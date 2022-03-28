const Joi = require('joi');

const idSchema = Joi.object().keys({
  id: Joi.string().min(1).required(),
});

module.exports = {
  idSchema,
};
