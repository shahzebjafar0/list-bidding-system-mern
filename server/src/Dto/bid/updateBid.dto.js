const Joi = require('joi');

const bidSchema = Joi.object({
    listing: Joi.string(),
    bidder: Joi.string(),
    amount: Joi.number().min(0),
    accepted: Joi.boolean()
}).or('listing', 'bidder', 'amount',"accepted").required();

module.exports = bidSchema;

