package com.example.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Scanner;


@Controller
@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class ScrumlingsController {

    private String Username;
    private boolean isAuth;

    //private String jdbcURL= "jdbc:sqlite:/C:\\Users\\ALLARASSEMJJ20\\comp350sprint2\\SQLlite\\sqlite-tools-win32-x86-3410200\\usersdb.db";

    public void setName(String dummyName){
        this.Username = dummyName;
    }

    @RequestMapping("/getAuth")
    public ResponseEntity<Boolean> getAuth() {
        return ResponseEntity.ok(this.isAuth);
    }



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

    public void setAuth(boolean dummyAuth){
        this.isAuth = dummyAuth;
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
        return "courses.json";
    }

    public HashMap<String, String> CredentialsJSONParser (String data){
        //remove {}
        String temp1 = data.substring(1, data.length()-1);
        //split all elements keys and values in buckets
        String [] tempArr1 = temp1.split(",|:");
        //make the hashmap
        HashMap<String, String> map = new HashMap<>();
        for (int i =0; i < tempArr1.length; i+=2){
            String key = tempArr1[i].trim();
            String value = tempArr1[i + 1].trim();
            map.put(key, value);
        }
        return map;
    }

    @RequestMapping("/login")
    public ResponseEntity<String> Login(@RequestBody String data) {

        // check against database

        // set auth to true
        this.setAuth(true);

        System.out.println(data);
        HashMap<String, String> map = CredentialsJSONParser(data);
        System.out.println(map);
        return ResponseEntity.ok("login successful");
    }
    @RequestMapping("/logout")
    public ResponseEntity<String> Logout(@RequestBody String data) {
        this.setAuth(false);
        return ResponseEntity.ok("ok");
    }
    @RequestMapping("/register")
    public ResponseEntity<String> Register(@RequestBody String data) throws SQLException {

        // extract the information
        System.out.println(data);
        HashMap<String, String> map = CredentialsJSONParser(data);
        System.out.println(map);

//
//        // store in database
//        Connection connection = DriverManager.getConnection(jdbcURL);
//        String sql = "SELECT * FROM users";
//        Statement statement = connection.createStatement();
//        ResultSet result = statement.executeQuery(sql);
//        System.out.println(result);
        return ResponseEntity.ok("registering successful");
    }

}
