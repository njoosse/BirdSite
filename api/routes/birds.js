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
  db.any(
    'SELECT id, latitude, longitude, name, timestamp FROM "birdApp"."birdPictures"'
  )
    .then((data) => {
      let geoJson = { features: [] };
      data.forEach((row) => {
        geoJson.features.push({
          id: row.id,
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [row.longitude, row.latitude],
          },
          properties: {
            name: row.name,
            // leaving this as the integer, more flexible in the UI
            taken: new Date(row.timestamp).getTime() / 1000,
          },
        });
      });
      res.send(geoJson);
    })
    .catch((error) => {
      console.log(error);
      res.send({ features: [] });
    });
});

router.get("/image/:id", function (req, res, next) {
  db.one(
    `SELECT encode(image, 'base64') AS b64Img FROM "birdApp"."birdPictures" WHERE id = $1`,
    [req.params.id]
  )
    .then((data) => {
      var img = Buffer.from(data.b64img, "base64");
      res
        .set({
          "Content-Type": "image/jpeg",
          "Content-Length": img.length,
        })
        .send(img);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
