-- all data's fake right now

INSERT INTO restaurants (name, type, street_number, street_name, postal_code, phone_number, email, password)
VALUES
(
  "Soufi's",
  'Middle Eastern',
  'Diner',
  6476378535,
  'greasy@burgers.net',
  '/assets/restaurant-img/burger.jpg'
),
-- CREATE TABLE restaurants (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   type VARCHAR(255) NOT NULL,
--   street_number INTEGER NOT NULL,
--   street_name VARCHAR(255) NOT NULL,
--   postal_code VARCHAR(7) NOT NULL,
--   phone_number VARCHAR(10) NOT NULL,
--   active BOOLEAN NOT NULL DEFAULT TRUE,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL
-- );
