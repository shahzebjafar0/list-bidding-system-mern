const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accepted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Bid', bidSchema);
