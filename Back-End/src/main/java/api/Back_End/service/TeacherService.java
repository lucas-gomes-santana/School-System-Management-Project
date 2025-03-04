package api.Back_End.service;

import api.Back_End.dto.TeacherResponseDTO;
import api.Back_End.exception.InvalidCredentialsException;
import api.Back_End.exception.TeacherNotFoundException;
import api.Back_End.model.Student;
import api.Back_End.model.Teacher;
import api.Back_End.repository.TeacherRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    public TeacherResponseDTO authenticateTeacher(String name, String password) throws TeacherNotFoundException {
        // Search the teacher by name
        Optional<Teacher> optionalTeacher = teacherRepository.findByTeacherName(name);

        // Check if the teacher exists
        if (optionalTeacher.isEmpty()) {
            throw new TeacherNotFoundException("The teacher " + name + " does not exists on system.");
        }

        Teacher teacher = optionalTeacher.get();

        // Check if the password is correct
        if (!teacher.getTeacherPassword().equals(password)) {
            throw new InvalidCredentialsException("The password inserted is incorrect.");
        }

        // Map the dates of teacher for the DTO
        return new TeacherResponseDTO(
                teacher.getTeacherName(),
                teacher.getSchool().getCity().getCity_name(),
                teacher.getSchool().getSchool_name(),
                teacher.getSchool().getClasses().stream()
                        .map(classe -> new TeacherResponseDTO.ClassInfo(
                                classe.getClass_name(),
                                classe.getStudents().stream()
                                        .map(Student::getStudent_name)
                                        .collect(Collectors.toList())
                        ))
                        .collect(Collectors.toList())
        );
    }

    public TeacherResponseDTO getTeacherData(String name) throws TeacherNotFoundException {
        // Search teacher by name
        Optional<Teacher> optionalTeacher = teacherRepository.findByTeacherName(name);

        // Check if the teacher exists
        if (optionalTeacher.isEmpty()) {
            throw new TeacherNotFoundException("The teacher " + name + " does not exists on system.");
        }

        Teacher teacher = optionalTeacher.get();

        // Map the dates of the teacher for the DTO
        return new TeacherResponseDTO(
                teacher.getTeacherName(),
                teacher.getSchool().getCity().getCity_name(),
                teacher.getSchool().getSchool_name(),
                teacher.getSchool().getClasses().stream()
                        .map(classe -> new TeacherResponseDTO.ClassInfo(
                                classe.getClass_name(),
                                classe.getStudents().stream()
                                        .map(Student::getStudent_name)
                                        .collect(Collectors.toList())
                        ))
                        .collect(Collectors.toList())
        );
    }
}