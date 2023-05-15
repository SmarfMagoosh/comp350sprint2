package com.example.springboot;
//import org.sqlite.*;
//import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000/")
public class ScrumlingsController {
    private Boolean isAuth = false;

    public static String connect(){
        Connection conn = null;
        String stringToJSON = "";
        try {
            // db parameters
            String url = "jdbc:sqlite:schedules.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");

            String sql = "SELECT * FROM schedules WHERE name = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();
            System.out.println(rs);
            while (rs.next()) {
                stringToJSON+= rs.getString("name") + "\n";
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException ex) {
                System.out.println(ex.getMessage());
            }
        }
        return stringToJSON;
    }

    @GetMapping("/courses")
    public String getCourses() {
        return "courses.json";
    }

    public void setAuth(boolean dummyAuth) {
        this.isAuth = dummyAuth;
    }

    @RequestMapping("/getAuth")
    public boolean getAuth() {
        return this.isAuth;
    }

    public HashMap<String, String> CredentialsJSONParser(String data) {
        // remove {}
        String temp1 = data.substring(1, data.length() - 1);
        // split all elements keys and values in buckets
        String[] tempArr1 = temp1.split(",|:");
        // make the hashmap
        HashMap<String, String> map = new HashMap<>();
        for (int i = 0; i < tempArr1.length; i += 2) {
            String key = tempArr1[i].trim();
            String value = tempArr1[i + 1].trim();
            map.put(key, value);
        }
        return map;
    }

    @RequestMapping("/register")
    public ResponseEntity<String> Register(@RequestBody String data) throws SQLException {

        // extract the information
        System.out.println("register");
        HashMap<String, String> map = CredentialsJSONParser(data);
        System.out.println(map);
        String username = map.get("username");
        String password = map.get("password");

        //
        // // store in database
        // Connection connection = DriverManager.getConnection(jdbcURL);
        // String sql = "SELECT * FROM users";
        // Statement statement = connection.createStatement();
        // ResultSet result = statement.executeQuery(sql);
        // System.out.println(result);

        String url = "jdbc:sqlite:schedules.db";
        Connection conn = DriverManager.getConnection(url);

        PreparedStatement stmt = conn.prepareStatement("INSERT INTO users(name, password) VALUES (?, ?");
        stmt.setString(1, username);
        stmt.setString(2, password);

        return ResponseEntity.ok("registering successful");
    }

    @RequestMapping("/login")
    public ResponseEntity<String> Login(@RequestBody String data) throws SQLException {

        // check against database
        HashMap<String, String> map = CredentialsJSONParser(data);
        String username = map.get("username");
        String password = map.get("password");

        System.out.println("login");

        // connecting to the sqlite database
        try {
            int id = -1;
            String url = "jdbc:sqlite:schedules.db";
            Connection conn = DriverManager.getConnection(url);
            PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE name = ? AND password = ?");
            stmt.setString(1, username);
            stmt.setString(2, password);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                id = rs.getInt("id");
            }
            //if an id in the database was not found, no account with username and password
            if (id < 0) {
                this.setAuth(false);
                return ResponseEntity.badRequest().body("Invalid login information");
            }

        }
        catch (SQLException e) {
            System.out.println(e.getMessage());
        }

        //storing the person info in there

        // set auth to true
        this.setAuth(true);

        return ResponseEntity.ok("login successful");
    }

    public static void main(String[] args) {

    }
}
