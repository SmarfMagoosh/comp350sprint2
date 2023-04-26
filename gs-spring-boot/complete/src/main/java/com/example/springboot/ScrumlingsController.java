package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

@RestController
public class ScrumlingsController {
    public static String renderTemplate(String name) {
        try {
            File f = new File("../../html/" + name);
            Scanner fs = new Scanner(f);
            StringBuilder out = new StringBuilder();
            while(fs.hasNext()) {
                out.append(fs.next());
            }
            return out.toString();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return System.getProperty("user.dir");
        }
    }

    @GetMapping("/")
    public String index() {
        return renderTemplate("home.html");
    }
}
