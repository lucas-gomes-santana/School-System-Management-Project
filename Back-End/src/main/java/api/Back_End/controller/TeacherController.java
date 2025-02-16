package api.Back_End.controller;

import api.Back_End.dto.TeacherResponseDTO;
import api.Back_End.exception.TeacherNotFoundException;
import api.Back_End.exception.InvalidCredentialsException;
import api.Back_End.service.TeacherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String name, @RequestParam String password) {
        try {
            TeacherResponseDTO response = teacherService.authenticateTeacher(name, password);
            return ResponseEntity.ok(response);
        } catch (TeacherNotFoundException | InvalidCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @PostMapping("/check-auth")
    public ResponseEntity<?> checkAuth(@RequestParam String token) {
        // Lógica para verificar se o token é válido
        boolean isAuthenticated = true; // Substitua por sua lógica de autenticação
        return ResponseEntity.ok().body(Map.of("authenticated", isAuthenticated));
    }

    @GetMapping("/teacher-data")
    public ResponseEntity<?> getTeacherData(@RequestParam String name) {
        try {
            TeacherResponseDTO response = teacherService.getTeacherData(name);
            return ResponseEntity.ok(response);
        } catch (TeacherNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}