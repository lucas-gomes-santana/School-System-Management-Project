/*

Copy and paste the SQL code of this file in your MySql Workbanch if you not maked yet.

Leave the database content like this in the remote repository.Make your modifications in other SQL file.

If you wanna make changes in the databse structure,contact me opening a issue on 
GitHub repository and explains for me how you gonna to make.

*/

-- Creating the database
CREATE DATABASE SchoolSystem;
USE SchoolSystem;

-- Cities table
CREATE TABLE Cities (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL UNIQUE
);

-- Schools table
CREATE TABLE Schools (
    school_id INT AUTO_INCREMENT PRIMARY KEY,
    school_name VARCHAR(100) NOT NULL UNIQUE,
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES Cities(city_id)
);

-- Teachers table
CREATE TABLE Teachers (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(100) NOT NULL,
    teacher_password VARCHAR(100) NOT NULL UNIQUE,
    school_id INT,
    FOREIGN KEY (school_id) REFERENCES Schools(school_id)
);

-- Classes table
CREATE TABLE Classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    school_id INT,
    FOREIGN KEY (school_id) REFERENCES Schools(school_id)
);

-- Students table
CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Classes(class_id)
);

-- Inserting cities data
INSERT INTO Cities (city_name) VALUES ('New York'), ('Washington');

-- Inserting schools data
INSERT INTO Schools (school_name, city_id) VALUES
('School A', 1), ('School B', 1), ('School C', 2), ('School D', 2);

-- Inserting teachers
INSERT INTO Teachers (teacher_name, teacher_password, school_id) VALUES
('Teacher 1', 'password123', 1), ('Teacher 2', 'password456', 1),
('Teacher 3', 'password789', 2), ('Teacher 4', 'password101', 2),
('Teacher 5', 'password112', 3), ('Teacher 6', 'password131', 3),
('Teacher 7', 'password415', 4), ('Teacher 8', 'password161', 4);

-- Inserting classes
INSERT INTO Classes (class_name, school_id) VALUES
('Morning Class', 1), ('Afternoon Class', 1), ('Night Class', 1),
('Morning Class', 2), ('Afternoon Class', 2), ('Night Class', 2),
('Morning Class', 3), ('Afternoon Class', 3), ('Night Class', 3),
('Morning Class', 4), ('Afternoon Class', 4), ('Night Class', 4);

-- Inserting students
INSERT INTO Students (student_name, class_id) VALUES
('Student 1', 1), ('Student 2', 1), ('Student 3', 1), ('Student 4', 1), ('Student 5', 1),
('Student 6', 2), ('Student 7', 2), ('Student 8', 2), ('Student 9', 2), ('Student 10', 2),
('Student 11', 3), ('Student 12', 3), ('Student 13', 3), ('Student 14', 3), ('Student 15', 3),
('Student 16', 4), ('Student 17', 4), ('Student 18', 4), ('Student 19', 4), ('Student 20', 4),
('Student 21', 5), ('Student 22', 5), ('Student 23', 5), ('Student 24', 5), ('Student 25', 5),
('Student 26', 6), ('Student 27', 6), ('Student 28', 6), ('Student 29', 6), ('Student 30', 6),
('Student 31', 7), ('Student 32', 7), ('Student 33', 7), ('Student 34', 7), ('Student 35', 7),
('Student 36', 8), ('Student 37', 8), ('Student 38', 8), ('Student 39', 8), ('Student 40', 8),
('Student 41', 9), ('Student 42', 9), ('Student 43', 9), ('Student 44', 9), ('Student 45', 9),
('Student 46', 10), ('Student 47', 10), ('Student 48', 10), ('Student 49', 10), ('Student 50', 10),
('Student 51', 11), ('Student 52', 11), ('Student 53', 11), ('Student 54', 11), ('Student 55', 11),
('Student 56', 12), ('Student 57', 12), ('Student 58', 12), ('Student 59', 12), ('Student 60', 12);