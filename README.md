# BirdSite
leaflet webmap that contains bird sightings and pictures

table structure in PostGres is
| id | latitude | longitude | name | image |
|---|---|---|---|---|
| | | | | |

Create Script
```CREATE TABLE IF NOT EXISTS public."birdPictures"
(
    id integer NOT NULL DEFAULT nextval('"birdPictures_id_seq"'::regclass),
    latitude real,
    longitude real,
    name text COLLATE pg_catalog."default",
    image bytea,
    CONSTRAINT "birdPictures_pkey" PRIMARY KEY (id)
)
