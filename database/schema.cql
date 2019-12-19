CREATE KEYSPACE sdcPhotos WITH replication = 
  {'class' = 'SimpleStrategy', 'replication_factor': '2'};

CREATE TABLE listings (
  listing_id int,
  title text,
  host text,
  address text,
  city text,
  PRIMARY KEY (listing_id)
)

CREATE TABLE photos (
  photo_id int,
  listing_id int,
  description text,
  url text,
  resolution text,
  order int,
  PRIMARY KEY (listing_id, photo_id)
)

CREATE TABLE users (
  user_id int,
  first_name text,
  last_name text,
  username text,
  PRIMARY KEY (user_id)
)

CREATE TABLE liked_photos (
  photo_id int,
  user_id int,
  PRIMARY KEY (photo_id, user_id)
)
