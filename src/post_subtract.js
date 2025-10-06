const mongoose = require("../modules/mongoose");
const { Product } = require("../models/product");
const { Movement } = require("../models/movement");

const post_subtract = async(productId, name, quantity) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, quantity },
            { new: true, runValidators: true },
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
        console.error("Erro ao atualizar o quantidade do produto!!!", error);

        return {
            success: false,
            product: updatedProduct,
            movement: savedMovement,
        };
    }
};

module.exports = post_subtract;