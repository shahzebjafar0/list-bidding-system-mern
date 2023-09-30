const Joi = require('joi');

const listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().min(0).required(),
  active: Joi.optional()
});

module.exports = listingSchema;
