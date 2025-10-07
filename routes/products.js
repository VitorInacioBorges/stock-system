const express = require("../modules/express");
const router = express.createRouter();

const post_product = require("../src/post_product");
const post_add = require("../src/post_add");
const post_subtract = require("../src/post_subtract");

router.post("/", async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const result = await post_product(name, quantity);
    if (result.success) {
      res.status(201).send({ message: "Produto criado com sucesso! " });
    } else {
      res.status(400).send({ message: "Produto NAO criado com sucesso! " });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro interno no servidor! " });
  }
});

router.post("/:id/entrada", async (req, res) => {
  try {
    const id = req.params;
    const quantity = req.body;
    const result = await post_add(id, quantity);
    if (result) {
      res.status(201).send({
        message: "Quantidade atualizada",
        quantityAdded: quantity,
        id: id,
        result: result,
      });
    } else {
      res.status(400).send({
        message: "Erro ao atualizar quantidade!",
        quantityAdded: quantity,
        id: id,
        result: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor ", error: error.message });
  }
});

router.post("/:id/saida", async (req, res) => {
  try {
    const id = req.params;
    const quantity = req.body;
    const result = await post_subtract(id, quantity);
    if (result) {
      res.status(201).send({
        message: "Quantidade atualizada",
        quantityAdded: quantity,
        id: id,
        result: result,
      });
    } else {
      res.status(400).send({
        message: "Erro ao atualizar quantidade!",
        quantityAdded: quantity,
        id: id,
        result: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor ", error: error.message });
  }
});
