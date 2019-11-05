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
),
(
 'Hy''s Steakhouse',
 'Steakhouse',
 '365 Bay Street',
 'M5H 2V1',
 '4164218120',
 'hy@steakhouse.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/hy.jpg'
),
(
 'Kotta Sushi',
 'Japanese',
 '1226 King Street West',
 'M6K 1G4',
 '9053121292',
 'kotta@sushi.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/kotta.jpg'
),
(
 'WVRST',
 'Family Friendly',
 '609 King Street West',
 'M5V 1M5',
 '4164421232',
 'em@wvrst.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/wvrst.jpg'
),
(
 'Buca',
 'Italian',
 '604 King Street West',
 'M5V 1M5',
 '4166723495',
 'buca@italian.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/buca.jpg'
),
(
 'Chubby''s Jamaican Kitchen',
 'Jamaican',
 '104 Portland Street',
 'M5V 2N2',
 '6471291283',
 'chubby@kitchen.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/chubby.jpg'
),
(
 'Lee',
 'Asian Fusion',
 '601 King Street West',
 'M5V 1M5',
 '4164444441',
 'sam@lee.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/lee.jpg'
),
(
 'Gusto 101',
 'Italian',
 '101 Portland Street',
 'M5V 2N3',
 '4164441262',
 'sam@mazeend.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/gusto.jpg'
),
(
 'Thompson Diner',
 'American',
 '51 Bathurst Street',
 'M5V 2P3',
 '4164124444',
 'sam@thompson.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/thompson.jpg'
),
(
 'Wilbur Mexicana',
 'Mexican',
 '552 King Street West',
 'M5V 1M3',
 '6474441244',
 'sam@mexicana.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/wilbur.jpg'
),
(
 'iQ',
 'Healthy',
 '613 King Street West',
 'M5V 1M5',
 '4164121283',
 'sam@iq.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/iq.jpg'
),
(
 'Lawai''a Poke',
 'Hawaiian',
 '700 King Street West',
 'M5V 2Y6',
 '4164234414',
 'lawai@poke.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/lawai.jpg'
),
(
 'Coco Rice',
 'Thai',
 '669 King Street West',
 'M5V 1M9',
 '4161261283',
 'coco@rice.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/coco.jpg'
),
(
 'Rodney''s Oyster',
 'Oyster Bar',
 '469 King Street West',
 'M5V 3M4',
 '6471239128',
 'rodney@oyster.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/rodney.jpg'
),
(
 'Edulis Restaurant',
 'Canadian',
 '169 Niagara Street',
 'M5V 1C9',
 '6471291273',
 'edulis@sam.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/edulis.jpg'
),
(
 'Campechano',
 'Mexican',
 '504 Adelaide Street West',
 'M5V 1T4',
 '9054361728',
 'bob@mexican.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/campechano.jpg'
),
(
 'Baro',
 'Spanish',
 '485 King Street West',
 'M5V 3M4',
 '4164412894',
 'em@baro.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/baro.jpg'
),
(
 'SARA',
 'Fine Dining',
 '98 Portland Street',
 'M5V 2N2',
 '4164541234',
 'sara@dining.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/sara.jpg'
),
(
'Fat Bastard',
 'Mexican',
 '628 King Street West',
 'M5V 1M7',
 '4164232123',
 'sam@bastard.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/fat.jpg'
),
(
 'Mira',
 'Peruvian',
 '420 Wellington Street West',
 'M5V 1E3',
 '4164445644',
 'mira@peruvian.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/mira.jpg'
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


