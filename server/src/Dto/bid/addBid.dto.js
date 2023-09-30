const Joi = require('joi');

const bidSchema = Joi.object({
    listing: Joi.string().required(),
    bidder: Joi.string().required(),
    amount: Joi.number().min(0).required(),
});

module.exports = bidSchema;

