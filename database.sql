--DROP TABLE "favorites";
--DROP TABLE "category";

CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('proth'), ('cartoon'), ('animals'), ('soccer'), ('whiskey'), ('music');

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"source_url" VARCHAR (256) NOT NULL,
	"search_word" VARCHAR (100),
	"category_id" INT REFERENCES "category"
);

--Test value for giphy image
INSERT INTO "favorites" ("source_url", "search_word", "category_id")
VALUES ('https://media3.giphy.com/media/kAzybbAzjrTI4/200.gif?cid=76e586c8jrb4ctdt3ysxajcuslhp1ut89v4a09snk5cbndvc&amp;rid=200.gif&amp;ct=g', 'corgi', '5');

