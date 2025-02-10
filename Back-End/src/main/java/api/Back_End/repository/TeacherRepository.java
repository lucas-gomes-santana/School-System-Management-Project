package api.Back_End.repository;

import api.Back_End.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
    // Método para buscar um professor pelo nome e senha
    Teacher findByTeacherNameAndTeacherPassword(String teacherName, String teacherPassword);

    // Novo método para buscar um professor apenas pelo nome
    Optional<Teacher> findByTeacherName(String teacherName);
}