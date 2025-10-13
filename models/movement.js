// creating mongoose movement schema that is converted into a mongodb model

const mongoose = require("../modules/mongoose");

const movementSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },

  type: {
    // true: entrada / false: saida
    type: Boolean,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
});

const Movement = mongoose.model("movement", movementSchema);

module.exports = { Movement };
