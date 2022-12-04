require("dotenv").config();
var express = require("express");
var router = express.Router();

const pgp = require("pg-promise")(/* options */);

const db = pgp(
  "postgres://" +
    process.env.pgUsername +
    ":" +
    process.env.pgPassword +
    "@" +
    process.env.pgServer +
    ":" +
    process.env.pgPort +
    "/" +
    process.env.pgDatabase
);

router.get("/", function (req, res, next) {
  db.any('SELECT latitude, longitude, name FROM "birdApp"."birdPictures"')
    .then((data) => {
      console.log(typeof data);
      let geoJson = { features: [] };
      data.forEach((row) => {
        geoJson.features.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [row.longitude, row.latitude],
          },
          properties: {
            name: row.name,
          },
        });
      });
      res.send(geoJson);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
