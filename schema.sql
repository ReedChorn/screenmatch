CREATE DATABASE screenmatch_db;
USE screenmatch_db;



CREATE TABLE user(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL, 
  password VARCHAR(100) NOT NULL,
  action VARCHAR(100) NOT NULL,
  q1_fovorite_actor VARCHAR(100) NOT NULL, 
  q2_favorite_director VARCHAR(100) NOT NULL,
  q3_ratings VARCHAR(100) NOT NULL,
  platforms VARCHAR(100) NOT NULL,
  genre VARCHAR(100) NOT NULL, 
  
  CREATE TABLE list(
  listingId INTEGER(11) AUTO_INCREMENT NOT NULL,
  userId INTEGER(11) NOT NULL,
  is_favorite BOOLEAN,
  watch_list_rank INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);
