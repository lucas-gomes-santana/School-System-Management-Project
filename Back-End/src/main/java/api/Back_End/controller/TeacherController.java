package api.Back_End.controller;

import api.Back_End.model.Teacher;
import api.Back_End.service.TeacherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/login")
    public Teacher login(@RequestParam String name, @RequestParam String password) {
        return teacherService.authenticateTeacher(name, password);
    }
}