INSERT INTO users (name, email, password, phone_number)
VALUES
(
  'Bob Jones',
  'bob@jones.com',
  -- bcrypt hashed version of the word 'password' for all users
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  4164112034
),
(
  'Sam Spade',
  'sam@spade.com',
  -- bcrypt hashed version of the word 'password' for all users
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  4165445667
),
(
  'Barry Red',
  'barry@red.com',
  -- bcrypt hashed version of the word 'password' for all users
  '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
  4164112034
);

