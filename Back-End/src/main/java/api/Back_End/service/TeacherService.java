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
        // Busca o professor pelo nome
        Optional<Teacher> optionalTeacher = teacherRepository.findByTeacherName(name);

        // Verifica se o professor existe
        if (optionalTeacher.isEmpty()) {
            throw new TeacherNotFoundException("O professor " + name + " não existe no sistema.");
        }

        Teacher teacher = optionalTeacher.get();

        // Verifica se a senha está correta
        if (!teacher.getTeacherPassword().equals(password)) {
            throw new InvalidCredentialsException("A senha inserida está incorreta.");
        }

        // Mapeia os dados do professor para o DTO
        return new TeacherResponseDTO(
                teacher.getTeacherName(),
                teacher.getSchool().getCity().getCity_name(),
                teacher.getSchool().getSchool_name(),
                teacher.getSchool().getClasses().stream()
                        .map(classe -> new TeacherResponseDTO.ClassInfo(
                                classe.getClass_name(),
                                classe.getStudents().stream()
                                        .map(student -> student.getStudent_name())
                                        .collect(Collectors.toList())
                        ))
                        .collect(Collectors.toList())
        );
    }

    public TeacherResponseDTO getTeacherData(String name) throws TeacherNotFoundException {
        // Busca o professor pelo nome
        Optional<Teacher> optionalTeacher = teacherRepository.findByTeacherName(name);

        // Verifica se o professor existe
        if (optionalTeacher.isEmpty()) {
            throw new TeacherNotFoundException("O professor " + name + " não existe no sistema.");
        }

        Teacher teacher = optionalTeacher.get();

        // Mapeia os dados do professor para o DTO
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