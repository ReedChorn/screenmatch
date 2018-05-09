CREATE DATABASE screenmatch_db;
USE screenmatch_db;

CREATE TABLE user(
  id INTEGER(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL, 
  password VARCHAR(100) NOT NULL,
  q1_actor VARCHAR(100) NOT NULL, --> Who is your preferred actor
  q2_director VARCHAR(100) NOT NULL, --> Who is your preferred director
  q3_rating VARCHAR(100) NOT NULL, --> What is your preferred rating
  q4_platform VARCHAR(100) NOT NULL, --> What is your preferred platform
  q5_genre VARCHAR(100) NOT NULL --> What is your preferred genre 
);

  CREATE TABLE list(
  listingId INTEGER(11) AUTO_INCREMENT NOT NULL,
  api_object VARCHAR(100) NOT NULL,
  userId INTEGER(11) NOT NULL,
  is_favorite BOOLEAN,
  watch_list_rank INTEGER(11) NOT NULL
);

INSERT INTO (firstName, lastName, email, q1_actor, q2_director, q3_rating, q4_platform, q5_genre, is_favorite, watch_list_rank) values 


