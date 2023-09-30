const models = require("../../Model");

const addBid = async ({ amount, listing, bidder }) => {
    const newBid = new models.bid({
        amount,
        listing,
        bidder
    });

    const bid = await newBid.save();
    return bid;
};

const getAllBids = async () => {
    const bids = await models.bid.find();
    return bids;
}
const getBid = async ({ listingId }) => {
    const listing = await models.listing.findById(listingId)
        .populate("seller");
    const bids = await models.bid.find({ listing: listingId })
        .populate('bidder');

    return {
        listing: listing,
        bid: bids
    };
}

const updateBid = async ({ amount, listing, bidder, bidId, accepted = false }) => {

    const updatedBid = await models.bid.findOneAndUpdate(
        { _id: bidId },
        { amount, listing, bidder, accepted },
        { new: true }
    );

    console.log(updateBid)
    if(accepted){
        const newSale = new models.sale({
            listing : updatedBid.listing,
            buyer :  updatedBid.bidder,
            price : updatedBid.amount
        })
        await newSale.save();
    }
    return updatedBid;

};

const removeBid = async ({ bidId }) => {
    const removedBid = await models.bid.findOneAndDelete(bidId);
    return removedBid;
}

module.exports = {
    addBid,
    getAllBids,
    getBid,
    updateBid,
    removeBid
};
