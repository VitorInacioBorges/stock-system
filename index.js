const { app, port } = require("./modules/express");
const mongoose = require("./modules/mongoose");

const movementsRouter = require("./routes/movements");
const productsRouter = require("./routes/products");

app.use("/movements", movementsRouter);
app.use("/produtos", productsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
