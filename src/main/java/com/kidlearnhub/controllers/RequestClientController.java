package com.kidlearnhub.controllers;

import com.kidlearnhub.service.UtilityService;
import io.javalin.http.Handler;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RequestClientController {
    public static Handler requestHandler = ctx -> {
        String requestData = ctx.body();
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(requestData);
        JSONObject jsonObject = (JSONObject) obj;
        String tariff = (String) jsonObject.get("tariff");
        String name = (String) jsonObject.get("name");
        String phone = (String) jsonObject.get("phone");
        String email = (String) jsonObject.get("email");
        JSONArray scheduleArray = (JSONArray) jsonObject.get("schedule");
        String schedule = (scheduleArray != null) ? UtilityService.convertToStr((String[]) scheduleArray.toArray(new String[0])) : "";

        JSONArray timeArray = (JSONArray) jsonObject.get("time");
        String lesson_time = (timeArray != null) ? UtilityService.convertToStr((String[]) timeArray.toArray(new String[0])) : "";
        System.out.println("Добавление пользователя "+ tariff+" "+name+" "+phone+" "+email+" "+schedule+" "+timeArray);
        String insertSql = "INSERT INTO clients (tariff_id, name, phone, email, schedule, lesson_time) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/KidLearnHubDB", "postgres", "root");
             PreparedStatement preparedStatement = connection.prepareStatement(insertSql)) {

            preparedStatement.setInt(1, UtilityService.getTariffIdByName(tariff));
            preparedStatement.setString(2, name);
            preparedStatement.setString(3, phone);
            preparedStatement.setString(4, email);
            preparedStatement.setString(5, schedule);
            preparedStatement.setString(6, lesson_time);

            preparedStatement.executeUpdate();
            System.out.println("Пользователь "+name+" добавлен");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    };
}
