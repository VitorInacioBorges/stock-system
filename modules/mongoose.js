// mongoose framework content

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Vitor:vitor123@usersdatabase.5qgpsge.mongodb.net/?retryWrites=true&w=majority&appName=UsersDatabase"
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB!!!");
});

mongoose.connect(
  "mongodb+srv://Vitor:vitor123@usersdatabase.5qgpsge.mongodb.net/?retryWrites=true&w=majority&appName=UsersDatabase"
);

module.exports = mongoose;
