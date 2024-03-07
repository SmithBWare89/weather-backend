# Ollie Williams Weather Backend

## Description
I've created this back end using ExpressJs to be able to query the OpenWeather API in a manner that's safer for my front end. This was done by utilizing Heroku's ability to allow ENV variables stored in the websites configuration to be used throughout the code source. By doing so, I'm able to keep my API keys secure while also being able to query for new cities. I keep my API key secure by also adding in a CORS restriction when someone sends a request to my API.

## Example ENV
```
PORT=3000
API_KEY="YOUR OPEN WEATHER API KEY"
DEV="http://localhost:<YOUR FRONT END PORT>"
```