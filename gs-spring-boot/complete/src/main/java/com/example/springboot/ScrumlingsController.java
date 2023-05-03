package com.example.springboot;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;

@Controller
@CrossOrigin(origins = "http://localhost:3000")

public class ScrumlingsController {
    private Boolean isAuth = false;
    @GetMapping("/courses")
    public String getCourses() {
        return "courses.json";
    }

    public void setAuth(boolean dummyAuth){
        this.isAuth = dummyAuth;
    }


    @RequestMapping("/getAuth")
    public boolean getAuth() {
        return this.isAuth;
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


    @RequestMapping("/register")
    public ResponseEntity<String> Register(@RequestBody String data) throws SQLException {

        // extract the information
        System.out.println(data);
        HashMap<String, String> map = CredentialsJSONParser(data);
        System.out.println(map);
        String username = map.get("username");
        String password = map.get("password");

//
//        // store in database
//        Connection connection = DriverManager.getConnection(jdbcURL);
//        String sql = "SELECT * FROM users";
//        Statement statement = connection.createStatement();
//        ResultSet result = statement.executeQuery(sql);
//        System.out.println(result);
        return ResponseEntity.ok("registering successful");
    }

    @RequestMapping("/login")
    public ResponseEntity<String> Login(@RequestBody String data) {

        // check against database
        HashMap<String, String> map = CredentialsJSONParser(data);
        String username = map.get("username");
        String password = map.get("password");


        // set auth to true
        this.setAuth(true);

        return ResponseEntity.ok("login successful");
    }


}
