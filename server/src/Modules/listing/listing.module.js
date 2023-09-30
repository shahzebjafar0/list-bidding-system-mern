const express = require('express');
const router = express.Router();
const listingController = require('./listing.controller');

router.route("/")
.post( listingController.addItem)
.get( listingController.getAll);

router.route("/:id")
.get(listingController.getItem)
.delete(listingController.removeItem)
.put(listingController.updateItem)
.patch( listingController.updateAttribute)

module.exports = router;
