const mongoose = require("../modules/mongoose");
const { Product } = require("../models/product");
const { Movement } = require("../models/movement");

const post_subtract = async (productId, quantity) => {
  try {
    const currentProduct = await Product.findById(productId);

    if (!currentProduct) {
      throw new Error("Produto nao encontrado");
    }

    if (currentProduct.quantity - quantity < 0) {
      throw new Error(
        `Quantidade de Retirada: ${quantity}\nQuantidade Atual: ${currentProduct.quantity}. Estoque insuficiente.`
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $inc: { quantity: -quantity }, // Atomically subtract from existing quantity
      },
      { new: true, runValidators: true }
    );

    const date = new Date();
    const type = false;

    const newMovement = new Movement({
      productId,
      type,
      quantity,
      date,
    });

    const savedMovement = await newMovement.save();

    return {
      success: true,
      product: updatedProduct,
      movement: savedMovement,
    };
  } catch (error) {
    console.error("Erro ao diminuir a quantidade do produto!!!", error);

    return {
      success: false,
      product: updatedProduct,
      movement: savedMovement,
    };
  }
};

module.exports = post_subtract;
