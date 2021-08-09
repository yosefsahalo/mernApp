const mongoose = require("mongoose");
const MONGODBURLCONNECT = process.env.MONGODBURL
mongoose.connect(MONGODBURLCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {console.error("Connection Error", error.message)});

  module.exports = mongoose.connection;