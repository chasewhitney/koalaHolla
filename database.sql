CREATE TABLE koalas (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (50) NOT NULL,
  "gender" VARCHAR (2) NOT NULL,
  "age" INTEGER,
  "ready_for_transfer" BOOLEAN,
  "notes" VARCHAR (160) NOT NULL
);

INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ('Scotty', 'M', 4, 'Y', 'Born in Guatemala');
INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ('Jean', 'F', 5, 'Y', 'Allergic to lots of lava');
INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ('Ororo', 'F', 7, 'N', 'loves listening to Paula (Abdul)');
INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ('Logan', 'M', 15, 'N', 'Love the sauna');
INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ('Charlie', 'M', 9, 'Y', 'Favorite band is Nirvana');
INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ('Betsy', 'F', 4, 'Y', 'Has a pet iguana');
