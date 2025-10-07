const mongoose = require("../modules/mongoose");
const { Product } = require("../models/product");
const { Movement } = require("../models/movement");

// creates a product under name and quantity parameters, the name is updated and the quantity is added to the current quantity
// the parameters are passed into a route that creates a web method (post in this case)

const post_add = async (productId, quantity) => {
  try {
    const currentProduct = await Product.findById(productId);

    if (!currentProduct) {
      throw new Error("Product not found");
    }

    if (quantity < 0) {
      throw new Error(`Nao se pode passar uma quantidade negativa.`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $inc: { quantity: quantity }, // Atomically add to existing quantity
      },
      { new: true, runValidators: true }
    );

    const date = new Date();
    const type = true; // true: entrada

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
    console.error("Erro ao atualizar a quantidade do produto!!!", error);

    return {
      success: false,
      product: updatedProduct,
      movement: savedMovement,
    };
  }
};

module.exports = post_add;
