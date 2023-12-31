"use strict";
require("dotenv").config();
const database = process.env.DATABASE;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = async () => {
  try {
    await mongoose.connect(database);
    console.log("Conectado");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  connection
};
