package com.example.springboot;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
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
    public String getSchedule(
            @RequestParam(value = "id", defaultValue = "") int id,
            @RequestParam(value = "name", defaultValue = "") String name
    ) throws SQLException {
        // TODO query database
        String query = "SELECT JSON FROM schedules WHERE name=?";
        Connection conn = null;
        ResultSet rs = null;
        String ret = "";
        PreparedStatement smt = null;
        String list = null;
        System.out.println("here here");
        try{
            // give the location of the database
            String url = "jdbc:sqlite:schedules.db";
            System.out.println("here here");
            //initialize the connection
            conn = DriverManager.getConnection(url);

            //prepare the statement
            smt = conn.prepareStatement("SELECT JSON FROM schedules WHERE id = ? AND name = ?");
            System.out.println(id + " " + name);
            // set parameter values
            smt.setInt(1, 1);
            smt.setString(2, name);
            System.out.println(smt.toString());
            rs = smt.executeQuery();
            System.out.println(rs.getMetaData().getColumnCount());
            while(rs.next()){
                ret = rs.getString("JSON");
                ret = ret.replace('\t', ' ');
                ret = ret.replace("line: 1", "");
                ret = ret.replace("line: 2", "");
            }
            System.out.println("here here");
        }catch(Exception e){
            System.out.println(e.getMessage());
        }

        return ret;
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
