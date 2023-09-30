const express = require('express');
const router = express.Router();
const saleController = require('./sale.controller');

router.route("/")
    .post(saleController.addSale)
    .get(saleController.getAllSales);

router.route("/:id")
    .get(saleController.getSale)
    .delete(saleController.removeSale)
    .put(saleController.updateSale)
    .patch(saleController.updateSaleAttribute);

module.exports = router;
