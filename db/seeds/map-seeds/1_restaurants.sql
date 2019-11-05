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
),
(
 'Neruda Restaurant',
 'Steakhouse',
 '1681 Lakeshore Boulevard East',
 'M5V 3M4',
 '6478129382',
 'neruda@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/neruda.jpg'
),
(
 'Aish Tanoor',
 'Middle Eastern',
 '994 Eglinton Avenue West',
 'M5V 1C9',
 '6472319283',
 'aish@tanoor.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/aish.jpg'
),
(
 'The Great Maratha',
 'Indian',
 '965 Eglinton Avenue West',
 'M5V 1T4',
 '9054361728',
 'great@maratha.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/great.jpg'
),
(
 'Marron Bistro',
 'French',
 '948 Eglinton Avenue West',
 'M5V 3M4',
 '4164219823',
 'em@baro.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/marron.jpg'
),
(
 'Bi Bim Bap',
 'Korean',
 '950 Eglinton Avenue West',
 'M5V 2N2',
 '4161238473',
 'bi@bam.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/bi.jpg'
),
(
 'Jerusalem Restaurant',
 'Middle Eastern',
 '955 Eglinton Avenue West',
 'M5V 1M7',
 '4164231267',
 'jerusalem@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/jerusalem.jpg'
),
(
 '7Numbers',
 'Italian',
 '516 Eglinton Avenue West',
 'M5V 1E3',
 '4164441267',
 'seven@Numbers.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/numbers.jpg'
),
(
 'Ferraro Restaurant',
 'Italian',
 '502 Eglinton Avenue West',
 'M5V 3M4',
 '6471234567',
 'ferraro@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/ferraro.jpg'
),
(
 'Tokyo Sushi',
 'Japanese',
 '971 Eglinton Avenue West',
 'M5V 1C9',
 '6472312345',
 'tokyo@sushi.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/tokyo.jpg'
),
(
 'Chabrol',
 'French',
 '90 Yorkville Avenue',
 'M5V 1T4',
 '9051234576',
 'french@chabrol.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/chabrol.jpg'
),
(
 'Trattoria Nervosa',
 'Italian',
 '75 Yorkville Avenue',
 'M5V 3M4',
 '4164219823',
 'em@nervosa.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/trattoria.jpg'
),
(
 'Sassafraz',
 'French',
 '100 Cumberland Street',
 'M5V 2N2',
 '4161243473',
 'sassa@fraz.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/sassafraz.jpg'
),
(
 'Blu Ristorante',
 'Italian',
 '17 Yorkville Avenue',
 'M5V 1M7',
 '4162347819',
 'blu@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/blu.jpg'
),
(
 'Cafe Boulud',
 'French',
 '60 Yorkville Avenue',
 'M5V 1E3',
 '4164441267',
 'seven@cafe.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/cafe.jpg'
),
(
 'Cibo Yorkville',
 'Italian',
 '133 Yorkville Avenue',
 'M5V 1T4',
 '9054361128',
 'great@cibo.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/cibo.jpg'
),
(
 'Bar Mercurio',
 'Italian',
 '270 Bloor Street West',
 'M5V 3M4',
 '4164219823',
 'em@mercurio.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/mercurio.jpg'
),
(
 'Piano Piano',
 'Italian',
 '88 Harbord Street',
 'M5V 2N2',
 '4161238473',
 'bi@piano.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/piano.jpg'
),
(
 'Playa Cabana',
 'Mexican',
 '111 Dupont Street',
 'M5V 1M7',
 '4164231267',
 'jerusalem@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/playa.jpg'
),
(
 'Planta Queen',
 'Vegan',
 '180 Queen Street West',
 'M5V 1E3',
 '4164441267',
 'seven@planta.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/planta.jpg'
),
(
 'Reyna',
 'Mediterranean',
 '111 Richmond Street West',
 'M5V 1M7',
 '4162347823',
 'reyna@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/reyna.jpg'
),
(
 'Fran''s',
 'American',
 '20 College Street',
 'M5V 1E3',
 '4164441212',
 'seven@fran.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/fran.jpg'
),
(
 'The Chase',
 'Fine Dining',
 '10 Temperance Street',
 'M5V 1T4',
 '9054361112',
 'great@chase.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/chase.jpg'
),
(
 'JOEY',
 'Canadian',
 '1 Dundas Street West',
 'M5V 3M4',
 '4164219823',
 'em@joey.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/joey.jpg'
),
(
 'Alo',
 'French',
 '163 Spadina Avenue',
 'M5V 2N2',
 '4161238473',
 'bi@alo.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/alo.jpg'
),
(
 'Aloette Restaurant',
 'Canadian',
 '163 Spadina Avenue',
 'M5V 1M7',
 '4164231267',
 'aloette@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/aloette.jpg'
),
(
 'Aji Sai',
 'Japanese',
 '467 Queen Street West',
 'M5V 1E3',
 '4164441212',
 'seven@aji.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/aji.jpg'
),
(
 'Cano',
 'Italian',
 '1108 St Clair Avenue West',
 'M5V 3M4',
 '6478129382',
 'cano@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/cano.jpg'
),
(
 'Home of Hot Taste',
 'Korean',
 '658 Bloor Avenue West',
 'M5V 1C9',
 '6472319283',
 'home@tanoor.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/home.jpg'
),
(
 'Bar Sybanne',
 'Mediterranean',
 '229 Ossington Avenue',
 'M5V 1T4',
 '9054361712',
 'great@bar.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/bar.jpg'
),
(
 'Hello 123',
 'Vegan',
 '1122 Queen Street West',
 'M5V 3M4',
 '4164219823',
 'em@hello.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/hello.jpg'
),
(
 'Actinolite',
 'Canadian',
 '971 Ossington Avenue',
 'M5V 2N2',
 '4161238123',
 'bi@actinolite.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/actinolite.jpg'
),
(
 'Chantecler Restaurant',
 'French',
 '1320 Queen Street West',
 'M5V 1M7',
 '4164231267',
 'chantecler@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/chantecler.jpg'
),
(
 'Alma',
 'Bar',
 '1194 Bloor Street West',
 'M5V 1E3',
 '4164441267',
 'alma@numbers.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/alma.jpg'
),
(
 'Williams Landing',
 'American',
 '120 Lynn Williams Street',
 'M5V 1C9',
 '6472312312',
 'williams@sushi.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/williams.jpg'
),
(
 'Sugo',
 'Italian',
 '1281 Bloor Street West',
 'M5V 1T4',
 '9051234123',
 'french@sugo.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/sugo.jpg'
),
(
 'Annabelle',
 'Italian',
 '909 Davenport Road',
 'M5V 3M4',
 '4164219123',
 'em@annabelle.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/annabelle.jpg'
),
(
 'School',
 'Brunch',
 '70 Fraser Avenue',
 'M5V 2N2',
 '4161243182',
 'school@fraz.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/school.jpg'
),
(
 'By The Way',
 'Mediterranean',
 '400 Bloor Street West',
 'M5V 1M7',
 '4162347867',
 'by@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/by.jpg'
),
(
 'Insomnia',
 'Brunch',
 '563 Bloor Street West',
 'M5V 1E3',
 '4164423267',
 'insomnia@cafe.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/insomnia.jpg'
),
(
 'Los Gauca-Moles',
 'Mexican',
 '690 Euclid Avenue',
 'M5V 1T4',
 '9054231128',
 'great@euclid.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/los.jpg'
),
(
 'Little Sito',
 'Lebanese',
 '840 Bloor Street West',
 'M5V 3M4',
 '4164219823',
 'em@lebanese.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/lebanese.jpg'
),
(
 'The Rushton',
 'French',
 '740 St Clair Avenue West',
 'M5V 2N2',
 '4162338473',
 'bi@rushton.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/rushton.jpg'
),
(
 'Ichiriki',
 'Japanese',
 '120 Bloor Street East',
 'M5V 1M7',
 '4164231237',
 'ichiriki@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/ichiriki.jpg'
),
(
 'SOCO',
 'Canadian',
 '75 Lower Simcoe Street',
 'M5V 1E3',
 '4162341267',
 'seven@soco.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/soco.jpg'
),
(
 'The Rooftop',
 'American',
 '106 Broadview Avenue',
 'M5V 1M7',
 '4162237823',
 'rooftop@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/rooftop.jpg'
),
(
 'ARDO',
 'Italian',
 '243 King Street East',
 'M5V 1E3',
 '4164341212',
 'seven@ardo.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/ardo.jpg'
),
(
 'Kibo',
 'Japanese',
 '533 Parliament Street',
 'M5V 1T4',
 '9054323112',
 'great@kibo.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/kibo.jpg'
),
(
 'Impact',
 'Canadian',
 '573 King Street East',
 'M5V 3M4',
 '4163419823',
 'em@impact.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/impact.jpg'
),
(
 'Good Karma',
 'Indian',
 '689 Queen Street East',
 'M5V 2N2',
 '4161348473',
 'bi@karma.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/karma.jpg'
),
(
 'Patio',
 'Indian',
 '15 Gervais Drive',
 'M5V 1M7',
 '4164223237',
 'patio@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/patio.jpg'
),
(
 'Caribbean Palms',
 'Caribbean',
 '747 Don Mills Road',
 'M5V 1E3',
 '4164231232',
 'seven@caribbean.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/caribbean.jpg'
),
(
 'Folia Grill',
 'Greek',
 '1031 Pape Avenue',
 'M5V 1M7',
 '4164223237',
 'folia@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/folia.jpg'
),
(
 'Faley',
 'Chinese',
 '62 Overlea Road',
 'M5V 1E3',
 '4162342337',
 'seven@faley.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/faley.jpg'
),
(
 'Bamiyan Kabob',
 'Afghani',
 '62 Overlea Boulevard',
 'M5V 1M7',
 '4162234233',
 'bamiyan@restaurant.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/bamiyan.jpg'
),
(
 'Osaka Sushi',
 'Japanese',
 '747 Don Mills Road',
 'M5V 1E3',
 '4164343432',
 'seven@osaka.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/osaka.jpg'
),
(
 'Kandahar Kabab',
 'Afghani',
 '45 Overlea Boulevard',
 'M5V 1T4',
 '9054321212',
 'great@kandahar.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/kandahar.jpg'
),
(
 'Corner Cafe',
 'Canadian',
 '40 Wynford Drive',
 'M5V 3M4',
 '4163232323',
 'em@corner.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/corner.jpg'
),
(
 'Olde Yorke Fish & Chips',
 'American',
 '96 Laird Drive',
 'M5V 2N2',
 '4161342343',
 'bi@olde.com',
 '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
 'images/olde.jpg'
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


