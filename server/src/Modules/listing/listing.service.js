const models = require("../../Model");
const utils = require("../../Utils")

const addItem = async ({ title, description, price, seller, active , image}) => {
    const newItem = new models.listing({
        title,
        description,
        price,
        seller,
        active,
        image
    });

    const item = await newItem.save();
    return item;
};

const getAll = async () => {
    const items = await models.listing.find({active : true})
        .populate("seller");
    return items;
}

const getOne = async ({ listingId }) => {
    const items = await models.listing.findById(listingId);
    return items;
}

const updateItem = async ({ title, description, price, active, listingId, image,userId }) => {

    const listingItem = await models.listing.find({ _id: listingId, seller: userId })
    if (!listingItem) {
        throw new utils.appError("No Listing item found", 404)
    }
    const updatedItem = await models.listing.findOneAndUpdate(
        { _id: listingId },
        { $set: { title, description, price, active ,image} },
        { new: true }
    );

    return updatedItem;

};

const removeItem = async ({ listingId, userId }) => {

    const listingItem = await models.listing.findOne({ _id: listingId, seller: userId })
    if (!listingItem) {
        throw new utils.appError("No Listing item found", 404)
    }
    const removedItem = await models.listing.findOneAndDelete({ _id: listingId });
    return removedItem;

}

module.exports = {

    addItem,
    getAll,
    updateItem,
    getOne,
    removeItem
};
