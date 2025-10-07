const mongoose = require("../modules/mongoose");
const { Product } = require("../models/product");

// creates a product under name and quantity parameters
// the parameters are passed into a route that creates a web method (post in this case)
/* 
try {
    creates a schema, creates a model, saves in the database;
    // if success
    return {
        success: true
        product: savedProduct
    };
} catch (error) {
    error message;

    // if fail
    return {
        success: false
        product: savedProduct (probably incomplete)
    };
};
*/

const post_product = async (name, quantity) => {
  try {
    const newProduct = new Product({
      name,
      quantity,
    });

    const savedProduct = await newProduct.save();

    return {
      success: true,
      product: savedProduct,
    };
  } catch (error) {
    console.error("Erro ao criar o produto!!", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

module.exports = post_product;
