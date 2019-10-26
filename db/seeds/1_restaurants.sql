-- all data's fake right now
-- just testing connection to db
INSERT INTO restaurants (name, type, street_number, street_name, postal_code, phone_number,  email, password, image_url)
VALUES
(
  'Soufi''s',
  'Middle Eastern',
  '444',
  'Semantic Lane',
  'M0M 0M0',
  '4164444444',
  'jimmy@soufis.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Striped Pizza',
  'Italian',
  '52',
  'Weekly Road',
  'M2E 1Z6',
  '4162224422',
  'gino@stripedpizza.net',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Lemongrass Thai Cuisine',
  'Asian',
  '125',
  'Salad Lane',
  'M2Z 2R7',
  '9053254475',
  'manager@lemongrass.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Ultra Kebab',
  'Middle Eastern',
  '923',
  'Numbers Street',
  'M0M 0M0',
  '4165586881',
  'manager@ultrakebab.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Saigon Pho',
  'Asian',
  '52',
  'Weekly Road',
  'M2E 1Z6',
  '4162224422',
  'lisa@saigonpho.com',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'El Rey Mexicana',
  'Mexican',
  '330',
  'Carlson St',
  'M4W 2R7',
  '9059912345',
  'admin@elrey.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Marcelle''s',
  'Fine Dining',
  '444',
  'Semantic Lane',
  'M0M 0M0',
  '4164444444',
  'jimmy@soufis.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Obsidian',
  'Fine Dining',
  '110',
  'Grassy Park Blvd',
  'M4A 1F6',
  '4162234422',
  'gino@stripedpizza.net',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Silver Spoon Yogurt Bar',
  'Brunch',
  '445',
  'Draper Avenue',
  'M3E 2L7',
  '9055574415',
  'john@theoneandonlysilverspoon.com',
    -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Maze''s End Cafe',
  'Brunch',
  '663',
  'Ferrand Line',
  'M0M 0M0',
  '4164444444',
  'sam@mazeend.com',
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
),
(
  'Tan Fish Lane',
  'Fine Dining',
  '172',
  'Full Road',
  'M7E 1Z6',
  '4169245512',
  'gram@rogers.net',
  -- bcrypt for 'password'
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  ''
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


