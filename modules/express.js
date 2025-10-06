const express = require("express");
const app = express();
const port = 8080;
const createRouter = () => express.Router();

app.use(express.json());

module.exports = {
    app,
    port,
    createRouter,
};