CREATE DATABASE sdcPhotos

CREATE TABLE listings(
  id SERIAL PRIMARY KEY,
  title TEXT,
  host TEXT,
  address TEXT
);

CREATE TABLE host_photos(
  id SERIAL PRIMARY KEY,
  description TEXT,
  url TEXT,
  resolution TEXT,
  listing_id FOREIGN KEY
);

CREATE TABLE guest_photos(
  id SERIAL PRIMARY KEY,
  url TEXT,
  resolution TEXT,
  listing_id FOREIGN KEY
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  username FOREIGN KEY
);

CREATE TABLE liked_photos(
  photo_id FOREIGN KEY,
  user_id FOREIGN KEY
);
