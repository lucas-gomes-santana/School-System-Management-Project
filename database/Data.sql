/*

Copy and paste the SQL code of this file in your MySql Workbanch if you not maked yet.

For while,it's only autorized add more data here.If you wanna make changes in the databse structure,contact me opening a issue on 
GitHub repository.

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
INSERT INTO Cities (city_name) VALUES ('Salvador'), ('Feira de Santana');

-- Inserting schools data
INSERT INTO Schools (school_name, city_id) VALUES
('Escola A', 1), ('Escola B', 1), ('Escola C', 2), ('Escola D', 2);

-- Inserting teachers
INSERT INTO Teachers (teacher_name, teacher_password, school_id) VALUES
('Professor 1', 'senha123', 1), ('Professor 2', 'senha456', 1),
('Professor 3', 'senha789', 2), ('Professor 4', 'senha101', 2),
('Professor 5', 'senha112', 3), ('Professor 6', 'senha131', 3),
('Professor 7', 'senha415', 4), ('Professor 8', 'senha161', 4);

-- Inserting classes
INSERT INTO Classes (class_name, school_id) VALUES
('Turma Matutino', 1), ('Turma Vespertino', 1), ('Turma Noturna', 1),
('Turma Matutino', 2), ('Turma Vespertino', 2), ('Turma Noturna', 2),
('Turma Matutino', 3), ('Turma Vespertino', 3), ('Turma Noturna', 3),
('Turma Matutino', 4), ('Turma Vespertino', 4), ('Turma Noturna', 4);

-- Inserting students
INSERT INTO Students (student_name, class_id) VALUES
('Aluno 1', 1), ('Aluno 2', 1), ('Aluno 3', 1), ('Aluno 4', 1), ('Aluno 5', 1),
('Aluno 6', 2), ('Aluno 7', 2), ('Aluno 8', 2), ('Aluno 9', 2), ('Aluno 10', 2),
('Aluno 11', 3), ('Aluno 12', 3), ('Aluno 13', 3), ('Aluno 14', 3), ('Aluno 15', 3),
('Aluno 16', 4), ('Aluno 17', 4), ('Aluno 18', 4), ('Aluno 19', 4), ('Aluno 20', 4),
('Aluno 21', 5), ('Aluno 22', 5), ('Aluno 23', 5), ('Aluno 24', 5), ('Aluno 25', 5),
('Aluno 26', 6), ('Aluno 27', 6), ('Aluno 28', 6), ('Aluno 29', 6), ('Aluno 30', 6),
('Aluno 31', 7), ('Aluno 32', 7), ('Aluno 33', 7), ('Aluno 34', 7), ('Aluno 35', 7),
('Aluno 36', 8), ('Aluno 37', 8), ('Aluno 38', 8), ('Aluno 39', 8), ('Aluno 40', 8),
('Aluno 41', 9), ('Aluno 42', 9), ('Aluno 43', 9), ('Aluno 44', 9), ('Aluno 45', 9),
('Aluno 46', 10), ('Aluno 47', 10), ('Aluno 48', 10), ('Aluno 49', 10), ('Aluno 50', 10),
('Aluno 51', 11), ('Aluno 52', 11), ('Aluno 53', 11), ('Aluno 54', 11), ('Aluno 55', 11),
('Aluno 56', 12), ('Aluno 57', 12), ('Aluno 58', 12), ('Aluno 59', 12), ('Aluno 60', 12);
