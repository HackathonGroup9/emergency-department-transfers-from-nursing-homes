DROP DATABASE IF EXISTS ED_PATIENT_TRANSFER;
CREATE DATABASE ED_PATIENT_TRANSFER;
USE ED_PATIENT_TRANSFER;
-- CREATE USER 'javauser' IDENTIFIED BY 'Java@Pass';
-- GRANT ALL PRIVILEGES ON *.* TO 'javauser';
DROP TABLE IF EXISTS PATIENT;
CREATE TABLE PATIENT
(
	phn int PRIMARY KEY,
    last_name varchar(30) NOT NULL,
    first_name varchar(30) NOT NULL,
    birth_date date NOT NULL
--     weight double NOT NULL,
--     blood_pressure varchar(8) NOT NULL
);

DROP TABLE IF EXISTS TEST_RESULTS;
CREATE TABLE TEST_RESULTS 
(
	test_id int PRIMARY KEY,
    pcn int NOT NULL,
    test_type varchar(30) NOT NULL,
    test_value varchar(30) NOT NULL,
    test_unit varchar(30) NOT NULL,
    FOREIGN KEY (pcn) REFERENCES PATIENT (pcn)
);

INSERT INTO PATIENT (pcn, last_name, first_name, birth_date)
VALUES
	(123451234, "Browning", "Jack", "1930-06-15"),
    (123451235, "Bryan", "Deanna", "1941-05-25"),
    (123451236, "Byrd", "Tristan", "1950-09-30"),
    (123451237, "Calderon", "Miriam", "1942-12-01"),
    (123451238, "Cantrell", "Lilianna", "1947-06-14"),
    (123451239, "Carney", "Deirdre", "1949-10-06"),
    (123451240, "Castaneda", "Malaki", "1952-12-09");