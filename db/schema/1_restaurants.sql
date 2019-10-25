DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  street_number VARCHAR(6) NOT NULL,
  street_name VARCHAR(255) NOT NULL,
  postal_code VARCHAR(7) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  -- can be null, render conditionally if it's present
  image_url VARCHAR(255)
);
