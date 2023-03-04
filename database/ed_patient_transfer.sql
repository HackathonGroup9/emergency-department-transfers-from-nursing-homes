DROP DATABASE IF EXISTS ED_PATIENT_TRANSFER;
CREATE DATABASE ED_PATIENT_TRANSFER;
USE ED_PATIENT_TRANSFER;
-- CREATE USER 'javauser' IDENTIFIED BY 'Java@Pass';
-- GRANT ALL PRIVILEGES ON *.* TO 'javauser';

DROP TABLE IF EXISTS NOTIFICATION;
CREATE TABLE NOTIFICATION 
(
	notification_id int PRIMARY KEY,
    immediate bool NOT NULL,
    message varchar(100) NOT NULL
);

DROP TABLE IF EXISTS PHYSICIAN;
CREATE TABLE PHYSICIAN
(
	physician_id int PRIMARY KEY,
    last_name varchar(30) NOT NULL,
    first_name varchar(30) NOT NULL,
    primary_number varchar(15) NOT NULL,
    secondary_number varchar(15)
);

DROP TABLE IF EXISTS PATIENT;
CREATE TABLE PATIENT
(
	phn int PRIMARY KEY,
    last_name varchar(30) NOT NULL,
    first_name varchar(30) NOT NULL,
    birth_date date NOT NULL,
    physician_id int NOT NULL,
--     weight double NOT NULL,
--     blood_pressure varchar(8) NOT NULL
    CONSTRAINT FOREIGN KEY (physician_id) REFERENCES PHYSICIAN (physician_id)
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

DROP TABLE IF EXISTS SYMPTOM_SEVERITY;
CREATE TABLE SYMPTOM_SEVERITY 
(
	severity_id int PRIMARY KEY,
    severity_name varchar(100) NOT NULL,
    symptom_id int,
    notification_id int,
    CONSTRAINT FOREIGN KEY (symptom_id) REFERENCES SYMPTOM (symptom_id),
    CONSTRAINT FOREIGN KEY (notification_id) REFERENCES NOTIFICATION (notification_id)
);

DROP TABLE IF EXISTS VITALSIGN_SEVERITY;
CREATE TABLE VITALSIGN_SEVERITY 
(
	severity_id int PRIMARY KEY,
    severity_name varchar(100) NOT NULL,
    vitalsign_id int,
    notification_id int,
    CONSTRAINT FOREIGN KEY (vitalsign_id) REFERENCES VITALSIGN (vitalsign_id),
    CONSTRAINT FOREIGN KEY (notification_id) REFERENCES NOTIFICATION (notification_id)
);

INSERT INTO NOTIFICATION (notification_id, immediate, message)
VALUES
	(1, TRUE, "This requires immediate physician notification"),
    (2, FALSE, "This is a non-immediate notification. Please add to Physician Binder");
    
INSERT INTO PHYSICIAN (physician_id, last_name, first_name, primary_number, secondary_number)
VALUES
	(1, "Smith", "John", "403-278-8377", null),
    (2, "Boon", "Jane", "403-857-2383", "587-675-5473"),
    (3, "Bloor", "Yan", "403-574-2938", "403-273-3855"),
    (4, "Chan", "Bill", "403-485-3945", null);
    
INSERT INTO PATIENT (phn, last_name, first_name, birth_date, physician_id)
VALUES
	(123451234, "Browning", "Jack", "1930-06-15", 1),
    (123451235, "Bryan", "Deanna", "1941-05-25", 1),
    (123451236, "Byrd", "Tristan", "1950-09-30", 2),
    (123451237, "Calderon", "Miriam", "1942-12-01", 2),
    (123451238, "Cantrell", "Lilianna", "1947-06-14", 3),
    (123451239, "Carney", "Deirdre", "1949-10-06", 4),
    (123451240, "Castaneda", "Malaki", "1952-12-09", 4);

INSERT INTO BIOSYSTEM (system_id, system_name)
VALUES
	(1, "Respiratory"),
    (2, "Neurological"),
    (3, "Cardiac"),
    (4, "Digestive"),
    (5, "Urinary"),
    (6, "Reproductive");
    
INSERT INTO SYMPTOM (symptom_id, symptom_name, system_id)
VALUES
	(1, "Asthma", 1),
    (2, "Cough", 1);
    
INSERT INTO SYMPTOM_SEVERITY (severity_id, severity_name, symptom_id, notification_id)
VALUES
	(1, "Acute episode with wheezing, dyspnea,  or respiratory distress", 1, 1),
    (2, "Self-limited episode that was more extensive or  less responsive to treatment than the usual", 1, 2),
    (3, "Associated with blood in sputum, new sputum  production, fever or respiratory distress", 2, 1),
    (4, "New or recent onset of persistent or nocturnal cough,  causing discomfort or disturbing sleep", 1, 2);
    
INSERT INTO VITALSIGN (vitalsign_id, vitalsign_name)
VALUES
	(1, "Blood Pressure"),
    (2, "Pulse");
    
INSERT INTO VITALSIGN_SEVERITY (severity_id, severity_name, vitalsign_id, notification_id)
VALUES
	(1, "Systolic BP > 200 mmHg or < 90 mmHg", 1, 1),
    (2, "Diastolic BP > 115 mmHg", 1, 1),
    (3, "Diastolic BP > 90 mmHg", 1, 2),
    (4, "Resting pulse > 100, < 50", 2, 1),
    (5, "New irregular pulse", 2, 2);
    

    

    