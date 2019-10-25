DROP TABLE IF EXISTS waitlists CASCADE;

CREATE TABLE waitlists (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER NOT NULL REFERENCES restaurants(id),
  wait_time INTEGER NOT NULL
);
