package api.Back_End.repository;

import api.Back_End.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

    //Method for search a teacher for his name and password
    Teacher findByTeacherNameAndTeacherPassword(String teacherName, String teacherPassword);

    // New method for search a teacher only for his name
    Optional<Teacher> findByTeacherName(String teacherName);
}