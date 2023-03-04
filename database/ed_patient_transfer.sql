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
    phn int NOT NULL,
    test_type varchar(30) NOT NULL,
    test_value varchar(30) NOT NULL,
    test_unit varchar(30) NOT NULL,
    CONSTRAINT FOREIGN KEY (phn) REFERENCES PATIENT (phn)
);

DROP TABLE IF EXISTS BIOSYSTEM;
CREATE TABLE BIOSYSTEM 
(
	system_id int PRIMARY KEY,
    system_name varchar(30) NOT NULL
);

DROP TABLE IF EXISTS SYMPTOM;
CREATE TABLE SYMPTOM 
(
	symptom_id int PRIMARY KEY,
    symptom_name varchar(30) NOT NULL,
    system_id int,
    CONSTRAINT FOREIGN KEY (system_id) REFERENCES BIOSYSTEM (system_id)
);

DROP TABLE IF EXISTS VITALSIGN;
CREATE TABLE VITALSIGN 
(
	vitalsign_id int PRIMARY KEY,
    vitalsign_name varchar(30) NOT NULL
);

DROP TABLE IF EXISTS SYSTEM_SEVERITY;
CREATE TABLE SYSTEM_SEVERITY 
(
	severity_id int PRIMARY KEY,
    severity_name varchar(30) NOT NULL,
    symptom_id int,
    notification_id int,
    CONSTRAINT FOREIGN KEY (symptom_id) REFERENCES SYMPTOM (symptom_id),
    CONSTRAINT FOREIGN KEY (notification_id) REFERENCES NOTIFICATION (notification_id)
);

DROP TABLE IF EXISTS VITALSIGN_SEVERITY;
CREATE TABLE VITALSIGN_SEVERITY 
(
	severity_id int PRIMARY KEY,
    severity_name varchar(30) NOT NULL,
    vitalsign_id int,
    notification_id int,
    CONSTRAINT FOREIGN KEY (vitalsign_id) REFERENCES VITALSIGN (vitalsign_id),
    CONSTRAINT FOREIGN KEY (notification_id) REFERENCES NOTIFICATION (notification_id)
);

DROP TABLE IF EXISTS NOTIFICATION;
CREATE TABLE NOTIFICATION 
(
	notification_id int PRIMARY KEY,
    immediate bool NOT NULL,
    message varchar(30) NOT NULL
);

INSERT INTO PATIENT (phn, last_name, first_name, birth_date)
VALUES
	(123451234, "Browning", "Jack", "1930-06-15"),
    (123451235, "Bryan", "Deanna", "1941-05-25"),
    (123451236, "Byrd", "Tristan", "1950-09-30"),
    (123451237, "Calderon", "Miriam", "1942-12-01"),
    (123451238, "Cantrell", "Lilianna", "1947-06-14"),
    (123451239, "Carney", "Deirdre", "1949-10-06"),
    (123451240, "Castaneda", "Malaki", "1952-12-09");

INSERT INTO BIOSYSTEM (system_id, system_name)
VALUES
	(1, "Respiratory"),
    (2, "Nervous"),
    (3, "Cardiac"),
    (4, "Digestive"),
    (5, "Urinary"),
    (6, "Reproductive"),
    (7, "Endocrine");
    
INSERT INTO SYMPTOM (system_id, system_name)
VALUES
	(1, "Asthma", 1),
    (2, "Cough", 1);
    
INSERT INTO SYMPTOM_SEVERITY (severity_id, severity_name, symptom_id, notification_id)
VALUES
	(1, "Acute episode with wheezing, dyspnea,  or respiratory distress", 1, 1),
    (2, "Self-limited episode that was more extensive or  less responsive to treatment than the usual", 1, 2),
    (3, "Associated with blood in sputum, new sputum  production, fever or respiratory distress", 2, 1),
    (4, "New or recent onset of persistent or nocturnal cough,  causing discomfort or disturbing sleep", 1, 2);
    
INSERT INTO NOTIFICATION (notificataion_id, immediate, message)
VALUES
	(1, TRUE, "This requires immediate physician notification"),
    (2, FALSE, "This is a non-immediate notification. Please add to Physician Binder");
    

    