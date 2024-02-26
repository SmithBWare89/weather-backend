import express from "express";
const router = express.Router();
import { cityUrlBuilder, forecastUrlBuilder } from "./api.utility.js";

router.get("/", (req, res) => {
  res.send(`<h1>Hello!</h1>`);
});
router.get("/:city", async (req, res) => {
  try {
    const cityUrl = cityUrlBuilder(req.params.city);
    console.log(cityUrl);
    const fetchCity = await fetch(cityUrl);
    const formattedCityResponse = await fetchCity.json();
    console.log(formattedCityResponse);

    const forecastUrl = forecastUrlBuilder(formattedCityResponse);
    const fetchForecast = await fetch(forecastUrl);
    const formattedForecastResponse = await fetchForecast.json();
    res.set("Access-Control-Allow-Origin", process.env.PROD || process.env.DEV);
    res.send(formattedForecastResponse);
  } catch (err) {
    res.status(404).send(`The following error has occurred ${err}`);
  }
});

export default router;
