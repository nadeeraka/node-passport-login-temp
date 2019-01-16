if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "productionURL"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/aws-auth"
  };
}
