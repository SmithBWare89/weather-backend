import * as dotenv from "dotenv";
import express from "express";
import apiRoutes from "./api/index.js";
dotenv.config();

const app = express();
const routes = apiRoutes;
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on PORT ${PORT}`);
});
