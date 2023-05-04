package com.example.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class ScrumlingsController {
    @GetMapping("/courses")
    public String getCourses() {
        return "courses.json";
    }
    @GetMapping("/schedules")
    public String getSchedules(@RequestParam(value = "id", defaultValue = "") String id) {
        return "people.json";
    }
}
