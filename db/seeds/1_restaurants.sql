-- all data's fake right now
-- just testing connection to db

INSERT INTO restaurants (name, type, street_number, street_name, postal_code, phone_number, email, password)
VALUES
(
  "Soufi's",
  'Middle Eastern',,
  '444',
  'Semantic Lane',
  '4164444444',
  'M0M 0M0'
  'jimmy@soufis.com',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'
),
(
  "Striped Pizza",
  "Italian",
  "52",
  "Weekly Road",
  "4162224422",
  "M2E 1Z6",
  "gino@stripedpizza.net",
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'
),
(
  "Lemongrass Thai Cuisine",
  "Thai",
  "125",
  "Salad Lane",
  "9053254475",
  "M2Z 2R7",
  "manager@lemongrass.com",
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'
);
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
