const express = require('express');
const cors = require("cors")
const services = require("./Services")
const bodyParser = require('body-parser');
const modules = require('./Modules');
const middleware = require("./Middlewares")

require('dotenv').config();

async function start() {
  
const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

services.mongoose.connection()

app.use('/api/v1/auth', modules.auth);
app.use(middleware.auth)
app.use("/api/v1/listing", modules.listing)
app.use("/api/v1/sale", modules.sale)
app.use("/api/v1/bid", modules.bid)


app.use(middleware.errorHandler)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
}

module.exports = { start };
