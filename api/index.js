import express from "express";
const router = express.Router();
import {
  cityUrlBuilder,
  forecastUrlBuilder,
  setCors,
  toResponseType,
} from "./api.utility.js";

router.get("/:city", async (req, res) => {
  try {
    const origin = req.get("origin");
    const cors = setCors(origin);
    if (!cors) {
      return res.status(401).send("Unauthorized");
    }

    const cityUrl = cityUrlBuilder(req.params.city);
    const fetchCity = await fetch(cityUrl);
    const formattedCityResponse = await fetchCity.json();

    res.set("Access-Control-Allow-Origin", cors);
    const forecastUrl = forecastUrlBuilder(formattedCityResponse);
    const fetchForecast = await fetch(forecastUrl);
    const formattedForecastResponse = await fetchForecast.json();
    res.status(200).send(toResponseType(formattedForecastResponse));
  } catch (err) {
    res.status(204).send(undefined);
  }
});

export default router;
