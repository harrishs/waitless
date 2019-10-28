DROP TABLE IF EXISTS waitlists CASCADE;

-- a wait list belongs to a restaurant and has a wait time.
CREATE TABLE waitlists (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER NOT NULL REFERENCES restaurants(id),
  wait_time INTEGER NOT NULL
);
