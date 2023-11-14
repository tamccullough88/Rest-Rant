// models/index.js

require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    await mongoose.connect(MONGO_URI);
    console.log("connected to Mongo");
};

connect()
module.exports = connect;
module.exports.Place = require('./places');
module.exports.Comment = require('./comment');