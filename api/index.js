const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`<h1>Hello!</h1>`);
});
router.get("/:city", async (req, res) => {
  try {
    const fetchCity = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&q=${req.params.city}`,
    );
    const formattedResponse = await fetchCity.json();
    res.send(formattedResponse);

    // if (formattedResponse?.cod === "404") {
    //   res.status(404).send("Unable to find city.");
    //   console.log("Hello");
    // }
    //
    // res.send(formattedResponse);
  } catch (err) {
    res.status(404).send(`The following error has occurred ${err}`);
  }
});

module.exports = router;
