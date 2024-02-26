const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`<h1>Hello!</h1>`);
});
router.get("/:city", async (req, res) => {
  try {
    const url = `${process.env.API_URL}${req.params.city}&appId=${process.env.API_KEY}`;
    console.log("URL: ", url);
    const fetchCity = await fetch(
      `${process.env.API_URL}${req.params.city}&appId=${process.env.API_KEY}`,
    );
    const formattedResponse = await fetchCity.json();

    if (formattedResponse?.cod === "404") {
      res.status(404).send("Unable to find city.");
      console.log("Hello");
    }

    res.send(formattedResponse);
  } catch (err) {
    console.log("Error!");
    res.send("Error");
  }
});

module.exports = router;
