create database myplatform;
use myplatform;

CREATE TABLE client (
  client_id     BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name    VARCHAR(20)  NOT NULL,
  last_name     VARCHAR(20)  NOT NULL,
  business_name VARCHAR(20),
  email_address VARCHAR(20)  NOT NULL UNIQUE,
  phone_number  VARCHAR(15),
  PRIMARY KEY (client_id)
);


CREATE TABLE location (
  location_id   BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  street_name   VARCHAR(20) NOT NULL,
  street_number INT,
  postcode      VARCHAR(8)  NOT NULL,
  PRIMARY KEY (location_id)
);


CREATE TABLE service (
  service_id  VARCHAR(20) NOT NULL,
  hourly_rate INT  NOT NULL,
  day_rate    INT,
  PRIMARY KEY (service_id)
);


CREATE TABLE artist (
  artist_id    BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name   VARCHAR(20) NOT NULL,
  last_name    VARCHAR(20) NOT NULL,
  phone_number VARCHAR(15),
  PRIMARY KEY (artist_id)
);


CREATE TABLE appointment (
  appointment_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  client_id      BIGINT UNSIGNED NOT NULL,
  location_id    BIGINT UNSIGNED NOT NULL,
  service_id     VARCHAR(20) NOT NULL,
  artist_id      BIGINT UNSIGNED NULL,
  instructions   VARCHAR(200),
  date_and_time  TIMESTAMP NOT NULL,
  PRIMARY KEY (appointment_id),
  CONSTRAINT 
    FOREIGN KEY (client_id)   REFERENCES client(client_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT 
    FOREIGN KEY (location_id) REFERENCES location(location_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT 
    FOREIGN KEY (service_id)  REFERENCES service(service_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT 
    FOREIGN KEY (artist_id)   REFERENCES artist(artist_id)
    ON UPDATE CASCADE ON DELETE SET NULL
);


CREATE TABLE media_bundle (
  media_id        BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  appointment_id  BIGINT UNSIGNED NOT NULL UNIQUE,
  media_uploaded  BOOLEAN NOT NULL DEFAULT FALSE,
  media_downloaded BOOLEAN NOT NULL DEFAULT FALSE,
  uploaded_at     TIMESTAMP NULL,
  downloaded_at   TIMESTAMP NULL,
  PRIMARY KEY (media_id),
  CONSTRAINT 
    FOREIGN KEY (appointment_id) REFERENCES appointment(appointment_id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE files (
  file_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  media_id  BIGINT UNSIGNED NOT NULL UNIQUE,
  file_path VARCHAR(20) NOT NULL UNIQUE,
  PRIMARY KEY (file_id),
  CONSTRAINT 
    FOREIGN KEY (media_id) REFERENCES media_bundle(media_id)
    ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE client_comments (
  comment_id  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  file_id  BIGINT UNSIGNED NOT NULL,
  client_id BIGINT UNSIGNED NOT NULL,
  comment_body TEXT NOT NULL,
CONSTRAINT 
    FOREIGN KEY (file_id)   REFERENCES files(file_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT 
    FOREIGN KEY (client_id) REFERENCES client(client_id)
    ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE artist_comments (
  comment_id   BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  file_id BIGINT UNSIGNED NOT NULL,
  artist_id BIGINT UNSIGNED NOT NULL,
  comment_body TEXT NOT NULL,

  CONSTRAINT
    FOREIGN KEY (file_id)   REFERENCES files(file_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT 
    FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
    ON UPDATE CASCADE ON DELETE CASCADE
);



