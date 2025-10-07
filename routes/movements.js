const express = require("../modules/express");
const router = express.createRouter();

const get_movement = require("../src/get_movement");

router.get("/:id/historico", async (req, res) => {
  try {
    const id = req.params;
    const list = await get_movement(id);
    res
      .status(201)
      .send({ message: "Historico feito com sucesso!", products: list });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor!", error: error.message });
  }
});
