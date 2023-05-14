package com.example.springboot;
import java.sql.*;
//import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ScrumlingsRestController {


    public static String connect(){
        Connection conn = null;
        String stringToJSON = "";
        try {
            // db parameters
            String url = "jdbc:sqlite:schedules.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");
            Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM schedules";
            ResultSet rs = stmt.executeQuery(sql);
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

    public static ResultSet getSchedules(){
        Connection conn = null;
        ResultSet rs = null;
        try {
            // db parameters
            String url = "jdbc:sqlite:schedules.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");
            Statement stmt = conn.createStatement();
            String sql = "SELECT name FROM schedules";
            rs = stmt.executeQuery(sql);
            System.out.println(rs);
            while (rs.next()) {
                System.out.println(rs.getInt("id") +  "\t" +
                        rs.getString("name")
                );
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
        return rs;
    }

    @GetMapping("/schedules")
    public ArrayList<String> getSchedules(@RequestParam(value = "id", defaultValue = "") String id) {
        //connect with database
        Connection conn = null;
        ResultSet rs = null;
        ArrayList<String> schedules = new ArrayList<>();
        try{
            String url = "jdbc:sqlite:schedules.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");
            Statement stmt = conn.createStatement();
            String sql = "SELECT name FROM schedules";
            rs = stmt.executeQuery(sql);
            System.out.println(rs);
            while (rs.next()) {
                schedules.add(rs.getString("name"));
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return schedules;
    }

    @GetMapping("/getSchedule")
    public Map<String, Object> getSchedule(
            @RequestParam(value = "id", defaultValue = "") int id,
            @RequestParam(value = "name", defaultValue = "") String name
            ) {
        // TODO query database
        String query = "SELECT JSON FROM schedules WHERE id = ? and name= ?";
        Connection conn = null;
        ResultSet rs = null;
        try{
            // cash the path to the schedule
            String url = "jdbc:sqlite:schedules.db";

            // create a connection to the database
            conn = DriverManager.getConnection(url);

            // prepare the statement to avoid SQL injection
            PreparedStatement pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, id);
            pstmt.setString(1, name);
            rs = pstmt.executeQuery();
            while(rs.next()){
                System.out.println(rs.getString("JSON"));
            }
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
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
    public String saveSchedule(@RequestBody String schedule) {
        // TODO insert into database
        return schedule;
    }
//
//    public static void main(String[] args) {
//        JSONObject x = new JSONObject();
//        x.put("hello", 9);
//        x.put("69", 420);
//        System.out.println(x);
//    }
}
