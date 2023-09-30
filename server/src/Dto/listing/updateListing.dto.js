const Joi = require('joi');

const listingSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.number().min(0),
  active: Joi.boolean()
}).or('title', 'description', 'price', 'active').required();

module.exports = listingSchema;
