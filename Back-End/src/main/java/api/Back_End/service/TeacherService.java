package api.Back_End.service;

import api.Back_End.model.Teacher;
import api.Back_End.repository.TeacherRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public Teacher authenticateTeacher(String name, String password) {
        // Validação dos parâmetros
        if (name == null || name.trim().isEmpty() || password == null || password.trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Name and password are required.");
        }
        // Busca o professor no banco de dados
        Teacher teacher = teacherRepository.findByTeacherNameAndTeacherPassword(name, password);

        // Verifica se o professor foi encontrado
        if (teacher == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid name or password.");
        }

        return teacher;
    }
}