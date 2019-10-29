-- all data's fake right now
-- just testing connection to db
INSERT INTO restaurants (name, type, address, postal_code, phone_number,  email, password, image_url)
VALUES
(
  'Soufi''s',
  'Middle Eastern',
  '444 Semantic Lane',
  'M0M 0M0',
  '4164444444',
  'jimmy@soufis.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/soufi.png'
),
(
  'Striped Pizza',
  'Italian',
  '52 Weekly Road',
  'M2E 1Z6',
  '4162224422',
  'gino@stripedpizza.net',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/striped_pizza.png'
),
(
  'Lemongrass Thai Cuisine',
  'Asian',
  '125 Salad Lane',
  'M2Z 2R7',
  '9053254475',
  'manager@lemongrass.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/lemongrass.png'
),
(
  'Ultra Kebab',
  'Middle Eastern',
  '923 Numbers Street',
  'M0M 0M0',
  '4165586881',
  'manager@ultrakebab.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/kebab.png'
),
(
  'Saigon Pho',
  'Asian',
  '112 Stanton Road',
  'M2D 1R6',
  '4162224422',
  'lisa@saigonpho.com',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/pho.png'
),
(
  'El Rey Mexicana',
  'Mexican',
  '330 Carlson Lane',
  'M4W 2R7',
  '9059912345',
  'admin@elrey.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/elrey.jpg'
),
(
  'Marcelle''s',
  'Fine Dining',
  '444 Brown Lane',
  'M2M 1M7',
  '4164444444',
  'marcelle@marcelles.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/marcelle.jpg'
),
(
  'Obsidian',
  'Fine Dining',
  '110 Grassy Park Blvd',
  'M4A 1F6',
  '4162234422',
  'foh@obsidian.com',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/obsidian.jpg'
),
(
  'Silver Spoon Yogurt Bar',
  'Brunch',
  '445 Draper Avenue',
  'M3E 2L7',
  '9055574415',
  'john@theoneandonlysilverspoon.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/silver.jpg'
),
(
  'Maze''s End Cafe',
  'Brunch',
  '663 Ferrand Line',
  'M0M 0M0',
  '4164444444',
  'sam@mazeend.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/maze.jpg'
),
(
  'Tan Fish Lane',
  'Fine Dining',
  '172 Full Road',
  'M7E 1Z6',
  '4169245512',
  'gram@rogers.net',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/fish.jpg'
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


