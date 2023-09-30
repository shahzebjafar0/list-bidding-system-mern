const models = require("../../Model");

const addSale = async ({ listing, buyer, price }) => {
    const newSale = new models.Sale({
        listing,
        buyer,
        price
    });

    const sale = await newSale.save();
    return sale;
};

const getAllSales = async ({ userId }) => {
    const listings = await models.listing.find({ seller: userId })

    const listingIds = listings.map(listing => listing._id);

    const sales = await models.sale.find({ listing: { $in: listingIds } })
        .populate("listing")
        .populate("buyer")

    return sales
}

const getSale = async ({ saleId }) => {
    const sale = await models.Sale.findById(saleId);
    return sale;
}

const updateSale = async ({ listing, buyer, price, saleId }) => {

    const updatedSale = await models.Sale.findOneAndUpdate(
        { _id: saleId },
        { listing, buyer, price },
        { new: true }
    );

    return updatedSale;

};

const removeSale = async ({ saleId }) => {
    const removedSale = await models.Sale.findOneAndDelete(saleId);
    return removedSale;
}

module.exports = {
    addSale,
    getAllSales,
    getSale,
    updateSale,
    removeSale
};
