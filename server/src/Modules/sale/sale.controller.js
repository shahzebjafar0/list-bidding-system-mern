const saleService = require("./sale.service");
const dto = require("../../Dto");
const middleware = require("../../Middlewares");

const addSale = async (req, res, next) => {
    try {
        const { listing, buyer, price } = req.body;

        if (!middleware.validateInput({ listing, buyer, price }, dto.addSale, res)) {
            return;
        }

        const sale = await saleService.addSale({ listing, buyer, price });
        res.status(200).json({ sale, message: 'Sale added successfully' });
    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req, res, next) => {
    try {
        const {id : userId} = req.user;
        const sales = await saleService.getAllSales({userId});
        res.status(200).json(sales);
    } catch (error) {
        next(error)
    }
}

const getSale = async (req, res, next) => {
    try {
        const { id: saleId } = req.params
        const sale = await saleService.getSale({ saleId });
        res.status(200).json(sale);
    } catch (error) {
        next(error)
    }
}

const removeSale = async (req, res, next) => {
    try {
        const { id: saleId } = req.params
        const sale = await saleService.removeSale({ saleId });
        res.status(200).json(sale);
    } catch (error) {
        next(error)
    }
}

const updateSale = async (req, res, next) => {
    try {
        const { id: saleId } = req.params;
        const { listing, buyer, price } = req.body;
        if (!middleware.validateInput({ listing, buyer, price }, dto.addSale, res)) {
            return;
        }

        const sale = await saleService.updateSale({ listing, buyer, price, saleId });
        res.status(200).json(sale);
    } catch (error) {
        next(error)
    }
}

const updateSaleAttribute = async (req, res, next) => {
    try {
        const { id: saleId } = req.params;
        const { listing, buyer, price } = req.body;
        if (!middleware.validateInput(req.body, dto.updateSale, res)) {
            return;
        }

        const sale = await saleService.updateSale({ listing, buyer, price, saleId });
        res.status(200).json(sale);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addSale,
    getAllSales,
    getSale,
    removeSale,
    updateSale,
    updateSaleAttribute
};
