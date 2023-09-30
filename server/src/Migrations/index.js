const mongoose = require('mongoose');
const models = require("../Model")
async function populateDatabase() {
  await mongoose.connect('mongodb+srv://zaman:pLzq4FGINzuW0d12@cluster0.j1gntzk.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

  // Create a user
  const user = new models.user({
    fullName: 'John Doe',
    email: 'user@example.com',
    password: '12345678',
    verify: true
  });

  await user.save();

  const sellerId = user._id;
  const bidderId = user._id;
  const buyerId = user._id;

  const listing1 = new models.listing({
    title: 'Sample Listing 1',
    description: 'This is a sample listing',
    price: 100,
    seller: sellerId,
    image: "http://res.cloudinary.com/dnbs9ax5r/image/upload/v1695918758/smd4fvvflqyfrmjgnwis.jpg",
  });

  const listing2 = new models.listing({
    title: 'Sample Listing 2',
    description: 'Another sample listing',
    price: 150,
    seller: sellerId,
    image:"http://res.cloudinary.com/dnbs9ax5r/image/upload/v1695918758/smd4fvvflqyfrmjgnwis.jpg",
  });

  const bid1 = new models.bid({
    amount: 120,
    listing: listing1._id,
    bidder: bidderId,
  });

  const bid2 = new models.bid({
    amount: 160,
    listing: listing2._id,
    bidder: bidderId,
  });

  const sale1 = new models.sale({
    listing: listing1._id,
    buyer: buyerId,
    price: 120,
  });

  await Promise.all([listing1.save(), listing2.save(), bid1.save(), bid2.save(), sale1.save()]);

  await mongoose.disconnect();
}

populateDatabase().catch(console.error);
