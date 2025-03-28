package api.Back_End.repository;

import api.Back_End.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

    Teacher findByTeacherNameAndTeacherPassword(String teacherName, String teacherPassword);

    Optional<Teacher> findByTeacherName(String teacherName);
}