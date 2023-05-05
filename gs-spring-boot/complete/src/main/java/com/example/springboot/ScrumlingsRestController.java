package com.example.springboot;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ScrumlingsRestController {
    @GetMapping("/schedules")
    public ArrayList<String> getSchedules(@RequestParam(value = "id", defaultValue = "") String id) {
        // TODO make sql query
        ArrayList<String> schedules = new ArrayList<>();
        schedules.add("Fall 2020");
        schedules.add("Spring 2021");
        return schedules;
    }

    @GetMapping("/getSchedule")
    public Map<String, Object> getSchedule(
            @RequestParam(value = "id", defaultValue = "") int id,
            @RequestParam(value = "name", defaultValue = "") String name
            ) {
        // TODO query database
        Map<String, ArrayList<String>> time = new HashMap<>();
        ArrayList<String> meet = new ArrayList<>();
        meet.add("10 AM");
        meet.add("10:50 AM");
        time.put("M", meet);
        time.put("W", meet);
        time.put("F", meet);
        time.put("T", new ArrayList<>());
        time.put("R", new ArrayList<>());
        Map<String, Object> course = new HashMap<>();
        course.put("prof", "Brian Dellinger");
        course.put("title", "Automata Theory");
        course.put("credits", 3);
        course.put("term", "S21");
        course.put("time", time);
        course.put("code", "COMP 314 A");
        Map<String, Object> sched = new HashMap<>();
        ArrayList<Map<String, Object>> courses = new ArrayList<>();
        courses.add(course);
        sched.put("name", name);
        sched.put("term", "F20");
        sched.put("courses", courses);
        return sched;
    }

    @PostMapping("/saveSchedule")
    public String saveSchedule(@RequestBody Map<String, Object> schedule) {
        // TODO insert into database
        return "schedule recieved";
    }

    public static void main(String[] args) {
        JSONObject x = new JSONObject();
        x.put("hello", 9);
        x.put("69", 420);
        System.out.println(x);
    }
}
