-- all data's fake right now
-- just testing connection to db
INSERT INTO restaurants (name, type, address, postal_code, phone_number,  email, password, image_url)
VALUES
(
  'Soufi''s',
  'Middle Eastern',
  '356 Bathurst St',
  'M5T 2S6',
  '4164444444',
  'jimmy@soufis.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/soufi.png'
),
(
  'Striped Pizza',
  'Italian',
  '604 King St W',
  'M5V 1M5',
  '4162224422',
  'gino@stripedpizza.net',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/striped_pizza.jpg'
),
(
  'Lemongrass Thai Cuisine',
  'Asian',
  '805 King St W',
  'M5V 1N4',
  '9053254475',
  'manager@lemongrass.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/lemongrass.png'
),
(
  'Ultra Kebab',
  'Middle Eastern',
  '78 Spadina Ave',
  'M5V 2J4',
  '4165586881',
  'manager@ultrakebab.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/kebab.png'
),
(
  'Saigon Pho',
  'Asian',
  '325 College St',
  'M5T 1S2',
  '4162224422',
  'lisa@saigonpho.com',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/pho.png'
),
(
  'El Rey Mexicana',
  'Mexican',
  '45 Baldwin St',
  'M5T 1L1',
  '9059912345',
  'admin@elrey.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/elrey.jpg'
),
(
  'Marcelle''s',
  'Fine Dining',
  '11 Ossington Ave',
  'M6J 2Y8',
  '4164444444',
  'marcelle@marcelles.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/marcelle.jpg'
),
(
  'Obsidian',
  'Fine Dining',
  '57 Ossington Ave',
  'M6J 2Y9',
  '4162234422',
  'foh@obsidian.com',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/obsidian.jpg'
),
(
  'Silver Spoon Yogurt Bar',
  'Brunch',
  '146 Dupont St',
  'M5R 1V2',
  '9055574415',
  'john@theoneandonlysilverspoon.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/silver.jpg'
),
(
  'Maze''s End Cafe',
  'Brunch',
  '360 Queen St W',
  'M5V 2A2',
  '4164444444',
  'sam@mazeend.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  'images/maze.jpg'
),
(
  'Tan Fish Lane',
  'Fine Dining',
  '753 Queen St W',
  'M6J 1G1',
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


