package com.example.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

@Controller
public class ScrumlingsController {
    public static String renderTemplate(String name) {
        try {
            File f = new File(name);
            Scanner fs = new Scanner(f);
            StringBuilder out = new StringBuilder();
            while(fs.hasNext()) {
                out.append(fs.next() + "\n");
            }
            return out.toString();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return "ERROR, " + name + " not found in directory.";
        }
    }

    @GetMapping("/")
    public RedirectView index() {
        // TODO redirect to login page maybe?
        return new RedirectView("/home");
    }

    @GetMapping("/home")
    public String getHome() { return "home.html"; }

    @GetMapping("/courses")
    public String getCourses() {
        return "testing";
    }
}
