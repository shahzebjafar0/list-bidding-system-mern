const listingService = require("./listing.service");
const dto = require("../../Dto")
const middleware = require("../../Middlewares")


const addItem = async (req, res, next) => {
    try {

        const { title, description, price, active, image } = req.body;
        const { id: seller } = req.user

        if (!middleware.validateInput({ title, description, price, active }, dto.addListing, res)) {
            return;
        }

        const item = await listingService.addItem({ title, description, image, seller, price, active });
        res.status(200).json({ item, message: 'Added successfully' });
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const items = await listingService.getAll();
        res.status(200).json(items);
    } catch (error) {
        next(error)
    }
}

const getItem = async (req, res, next) => {
    try {
        const { id: listingId } = req.params
        const item = await listingService.getOne({ listingId });
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
}

const removeItem = async (req, res, next) => {
    try {
        const { id: listingId } = req.params
        const { id: userId } = req.user
        const item = await listingService.removeItem({ listingId, userId });
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
}

const updateItem = async (req, res, next) => {
    try {
        const { id: listingId } = req.params;
        const { title, description, price, active, image } = req.body;
        if (!middleware.validateInput({ title, description, price, active }, dto.addListing, res)) {
            return;
        }
        const { id: userId } = req.user

        const item = await listingService.updateItem({ title, description, image, price, active, userId, listingId });
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
}

const updateAttribute = async (req, res, next) => {
    try {
        const { id: listingId } = req.params;
        const { title, description, price, active } = req.body;
        if (!middleware.validateInput(req.body, dto.updateListing, res)) {
            return;
        }
        const { id: userId } = req.user

        const item = await listingService.updateItem({ title, description, price, active, userId, listingId });
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    addItem,
    getAll,
    getItem,
    removeItem,
    updateItem,
    updateAttribute
};
