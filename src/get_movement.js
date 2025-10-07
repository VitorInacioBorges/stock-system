const mongoose = require("../modules/mongoose");
const { Movement } = require("../models/movement");

// gives the history of transactions made

const get_movement = async () => {
  try {
    return await Book.find();
  } catch (error) {
    console.error(
      "Erro ao listar o histórico de movimentações!",
      error.message
    );
    throw error;
  }
};

module.exports = get_movement;
