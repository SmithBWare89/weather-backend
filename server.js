require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./api");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on PORT ${PORT}`);
});
