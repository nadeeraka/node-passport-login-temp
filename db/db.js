const mongoose = require("mongoose");
const config = require("../config/db/config");

const connect = async () => {
  try {
    let string = await mongoose.connect(
      config.mongoURI,
      { useNewUrlParser: true }
    );
    console.log("connect to db");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
