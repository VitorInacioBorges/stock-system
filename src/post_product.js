const mongoose = require("../modules/mongoose");
const { Product } = require("../models/product");

const post_product = async(name, quantity) => {
    try {
        const newProduct = new Product({
            name,
            quantity,
        });

        const savedProduct = await newProduct.save();

        return {
            success: true,
            product: savedProduct,
        }

    } catch (error) {
        console.error("Erro ao criar o produto!!", error);
        
        return {
            success: false,
            error: error.message, 
        }
    }
}

module.exports = post_product;