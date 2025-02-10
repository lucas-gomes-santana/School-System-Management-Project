<h1>School System Project (English Translation)</h1>

<img width="150px" src="https://static.vecteezy.com/system/resources/thumbnails/004/641/880/small_2x/illustration-of-high-school-building-school-building-free-vector.jpg">  

<hr>

<h3>What is this project ?</h3>

<p>The idea of ​​this project is to simply simulate an online system where the teacher can enter attendance, notes and observations about the students at a school. When a certain number of days pass, the system will display the grades, number of absences and observation notes about the students. The teacher's entry will be prevented and he will need to re-enter the data, but correctly. This prevents anyone from accessing the system and sabotaging the data, whether accidentally or intentionally. </p>

<hr>

<h3>Why you make this project ?</h3>

<p>As a Brazilian high school student, I saw teachers' complaints several times about the system that my school uses. My interest in software development awoke during my IT technical course at the school where I am currently studying. So, I had this project idea, so I could learn more about how full-stack programming works.</p>

<hr>

<h3>Technologies used here:</h3>

<ul>
    <li>Angular Framework</li>
    <li>Java</li>
    <li>Spring Framework</li>
    <li>Maven</li>
    <li>SQL</li>
    <li>MySQL</li>
</ul>

<hr>

<h3>How i can contribute to this project ?</h3>

<p>1- Fork this repository,copy the link of the fork and clone the project in your computer</p>

<p>2- Copy and paste the SQL code below in your MySQL Workbanch to create the database of the system: </p>

```sql
-- Criação do banco de dados
CREATE DATABASE SchoolSystem;
USE SchoolSystem;

-- Tabela de Cidades
CREATE TABLE Cities (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela de Escolas
CREATE TABLE Schools (
    school_id INT AUTO_INCREMENT PRIMARY KEY,
    school_name VARCHAR(100) NOT NULL UNIQUE,
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES Cities(city_id)
);

-- Tabela de Professores
CREATE TABLE Teachers (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(100) NOT NULL,
    teacher_password VARCHAR(100) NOT NULL UNIQUE,
    school_id INT,
    FOREIGN KEY (school_id) REFERENCES Schools(school_id)
);

-- Tabela de Turmas
CREATE TABLE Classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    school_id INT,
    FOREIGN KEY (school_id) REFERENCES Schools(school_id)
);

-- Tabela de Alunos
CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Classes(class_id)
);

-- Inserção de dados iniciais
INSERT INTO Cities (city_name) VALUES ('Salvador'), ('Feira de Santana');

-- Inserção de escolas
INSERT INTO Schools (school_name, city_id) VALUES
('Escola A', 1), ('Escola B', 1), ('Escola C', 2), ('Escola D', 2);

-- Inserção de professores (senhas geradas aleatoriamente)
INSERT INTO Teachers (teacher_name, teacher_password, school_id) VALUES
('Professor 1', 'senha123', 1), ('Professor 2', 'senha456', 1),
('Professor 3', 'senha789', 2), ('Professor 4', 'senha101', 2),
('Professor 5', 'senha112', 3), ('Professor 6', 'senha131', 3),
('Professor 7', 'senha415', 4), ('Professor 8', 'senha161', 4);

-- Inserção de turmas
INSERT INTO Classes (class_name, school_id) VALUES
('Turma Matutino', 1), ('Turma Vespertino', 1), ('Turma Noturna', 1),
('Turma Matutino', 2), ('Turma Vespertino', 2), ('Turma Noturna', 2),
('Turma Matutino', 3), ('Turma Vespertino', 3), ('Turma Noturna', 3),
('Turma Matutino', 4), ('Turma Vespertino', 4), ('Turma Noturna', 4);

-- Inserção de alunos (nomes aleatórios)
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
```

<p></p>