package api.Back_End.controller;

import api.Back_End.dto.TeacherResponseDTO;
import api.Back_End.exception.TeacherNotFoundException;
import api.Back_End.exception.InvalidCredentialsException;
import api.Back_End.service.TeacherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        } catch (TeacherNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        } catch (InvalidCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}