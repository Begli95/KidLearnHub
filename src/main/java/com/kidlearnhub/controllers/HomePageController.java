package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import com.kidlearnhub.service.UtilityService;
import io.javalin.http.Handler;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.sql.*;

public class HomePageController {
    public static Handler homeHandler = ctx -> {
        String existingHtml = RenderHtmlFile.render("index.html");
        try {
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/KidLearnHubDB", "postgres", "root");

            JSONArray jsonArray = new JSONArray();

            String sql = "SELECT * FROM tariffs";

            PreparedStatement preparedStatement = connection.prepareStatement(sql);

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                String name = resultSet.getString("name");
                String price = resultSet.getString("price");
                String max_students = resultSet.getString("max_students");
                String period = resultSet.getString("period");
                String duration = resultSet.getString("duration");
                String type_of_lessons = resultSet.getString("type_of_lessons");

                JSONObject jsonObject = new JSONObject();
                jsonObject.put("name", name);
                jsonObject.put("price", price);
                jsonObject.put("max_students", max_students);
                jsonObject.put("period", period);
                jsonObject.put("duration", duration);
                jsonObject.put("type_of_lessons", type_of_lessons);

                jsonArray.add(jsonObject);
            }
            String jsonData = jsonArray.toString();
            String finalHtml = existingHtml.replace("DATA", jsonData);
            ctx.html(finalHtml);

            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
            ctx.status(500).json("Error occurred while processing the request");
        }
    };

    public static Handler homePostHandler = ctx -> {
        System.out.println("Обработка формы!!!");
        String requestData = ctx.body();
        System.out.println(requestData);
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

        } catch (SQLException e) {
            e.printStackTrace();
        }
    };
}
