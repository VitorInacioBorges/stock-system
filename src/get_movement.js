const mongoose = require("../modules/mongoose");
const { Movement } = require("../models/movement");

// gives the history of transactions of a product based on its id

const get_movement = async (productId) => {
  try {
    const allMovements = await Movement.find();
    const filteredMovements = allMovements.filter(productId);
    return filteredMovements;
  } catch (error) {
    console.error(
      "Erro ao listar o histórico de movimentações!",
      error.message
    );
    throw error;
  }
};

module.exports = get_movement;
