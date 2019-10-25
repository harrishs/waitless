  -- bcrypt hashed version of the word 'password' for all users
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',

INSERT INTO users (id, name, email, password, phone_number, owns_restaurant)
VALUES
(
  'AAAAAA',
  'Bob Jones',
  'bobjones@bob.com',
  -- bcrypt hashed version of the word 'password' for all users
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  6476378535,
  FALSE
),
