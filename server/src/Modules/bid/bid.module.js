const express = require('express');
const router = express.Router();
const bidController = require('./bid.controller');

router.route("/")
    .post(bidController.addBid)
    .get(bidController.getAllBids);

router.route("/:id")
    .get(bidController.getBid)
    .delete(bidController.removeBid)
    .put(bidController.updateBid)
    .patch(bidController.updateBidAttribute);


module.exports = router;
