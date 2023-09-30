const bidService = require("./bid.service");
const dto = require("../../Dto");
const middleware = require("../../Middlewares");

const addBid = async (req, res, next) => {
    try {
        const { amount, listing } = req.body;
        const { id: bidder } = req.user

        if (!middleware.validateInput({ amount, listing, bidder }, dto.addBid, res)) {
            return;
        }

        const bid = await bidService.addBid({ amount, listing, bidder });
        res.status(200).json({ bid, message: 'Bid added successfully' });
    } catch (error) {
        next(error)
    }
}

const getAllBids = async (req, res, next) => {
    try {
        const bids = await bidService.getAllBids();
        res.status(200).json(bids);
    } catch (error) {
        next(error)
    }
}

const getBid = async (req, res, next) => {
    try {
        const { id: listingId } = req.params
        const bid = await bidService.getBid({ listingId });
        res.status(200).json(bid);
    } catch (error) {
        next(error)
    }
}


const removeBid = async (req, res, next) => {
    try {
        const { id: bidId } = req.params
        const bid = await bidService.removeBid({ bidId });
        res.status(200).json(bid);
    } catch (error) {
        next(error)
    }
}

const updateBid = async (req, res, next) => {
    try {
        const { id: bidId } = req.params;
        const { amount, listing, bidder } = req.body;
        if (!middleware.validateInput({ amount, listing, bidder }, dto.addBid, res)) {
            return;
        }

        const bid = await bidService.updateBid({ amount, listing, bidder, bidId });
        res.status(200).json(bid);
    } catch (error) {
        next(error)
    }
}

const updateBidAttribute = async (req, res, next) => {
    try {
        const { id: bidId } = req.params;
        const { amount, listing, bidder, accepted } = req.body;
        if (!middleware.validateInput(req.body, dto.updateBid, res)) {
            return;
        }

        const bid = await bidService.updateBid({ amount, listing, bidder, bidId, accepted });
        res.status(200).json(bid);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addBid,
    getAllBids,
    getBid,
    removeBid,
    updateBid,
    updateBidAttribute
};
