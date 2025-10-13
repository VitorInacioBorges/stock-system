// creating mongoose product schema that is converted into a mongodb model

const mongoose = require("../modules/mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = { Product };
