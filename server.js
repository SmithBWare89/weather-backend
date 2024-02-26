require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./api");
const PORT = process.env.API_URL || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {});
