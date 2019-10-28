DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  -- Foreign key to waitlist_entries - A user will not have one
  -- if they are not booked on a waitlist.
  booking_id INTEGER REFERENCES waitlist_entries(id) DEFAULT NULL
);
