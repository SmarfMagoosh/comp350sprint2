package com.example.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class ScrumlingsController {
    @GetMapping("/courses")
    public String getCourses() {
        return "courses.json";
    }

    @GetMapping("/fall")
    public String getFallCourses() { return "fallCourses.json"; }

    @GetMapping("/spring")
    public String getSpringCourses() { return "springCourses.json"; }
}
