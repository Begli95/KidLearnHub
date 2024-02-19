package com.kidlearnhub.controllers;

import com.kidlearnhub.service.UtilityService;
import io.javalin.http.Handler;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RequestClientController {
    public static Handler requestHandler = ctx -> {
        String requestData = ctx.body();
        JSONParser parser = new JSONParser();

        try {
            JSONObject jsonObject = (JSONObject) parser.parse(requestData);
            String tariff = (String) jsonObject.get("tariff");
            String name = (String) jsonObject.get("name");
            String phone = (String) jsonObject.get("phone");
            String email = (String) jsonObject.get("email");

            JSONArray scheduleArray = (JSONArray) jsonObject.get("schedule");
            String[] scheduleStrings = new String[scheduleArray.size()];
            for (int i = 0; i < scheduleArray.size(); i++) {
                scheduleStrings[i] = scheduleArray.get(i).toString();
            }
            String schedule = (scheduleArray != null) ? UtilityService.convertToStr(scheduleStrings) : "";

            JSONArray timeArray = (JSONArray) jsonObject.get("time");
            String[] timeStrings = new String[timeArray.size()];
            for (int i = 0; i < timeArray.size(); i++) {
                timeStrings[i] = timeArray.get(i).toString();
            }
            String lesson_time = (timeArray != null) ? UtilityService.convertToStr(timeStrings) : "";


            String insertSql = "INSERT INTO clients (tariff_id, name, phone, email, schedule, lesson_time) VALUES (?, ?, ?, ?, ?, ?)";

            try (Connection connection = UtilityService.getDatabaseConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(insertSql)) {

                preparedStatement.setInt(1, UtilityService.getTariffIdByName(tariff));
                preparedStatement.setString(2, name);
                preparedStatement.setString(3, phone);
                preparedStatement.setString(4, email);
                preparedStatement.setString(5, schedule);
                preparedStatement.setString(6, lesson_time);

                preparedStatement.executeUpdate();
            }
        } catch (ParseException e) {
            e.printStackTrace();
            ctx.status(400).json("Bad Request: Error in parsing JSON");
        } catch (SQLException e) {
            e.printStackTrace();
            ctx.status(500).json("Server Error: Error in database operation");
        }
    };
}
