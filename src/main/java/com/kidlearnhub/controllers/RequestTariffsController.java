package com.kidlearnhub.controllers;

import io.javalin.http.Handler;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RequestTariffsController {
    public static Handler requestHandler = ctx -> {
        //остановился тут . Занести данные в бд изменений
        String requestData = ctx.body();
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(requestData);
        JSONArray jsonArray = (JSONArray) obj;

        String updateSql = "UPDATE tariffs SET name = ?, price = ?, max_students = ?, period = ?, duration = ?, type_of_lessons = ? WHERE id = ?";

        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/KidLearnHubDB", "postgres", "root");
             PreparedStatement preparedStatement = connection.prepareStatement(updateSql)) {
            int i = 1;
            for (Object jsonEntry : jsonArray) {
                JSONObject jsonObject = (JSONObject) jsonEntry;

                int id = i;  // Здесь предполагается, что у вас есть поле id в вашем JSON-объекте.
                String name = (String) jsonObject.get("name");
                String price = (String) jsonObject.get("price");
                String max_students = (String) jsonObject.get("max_students");
                String period = (String) jsonObject.get("period");
                String duration = (String) jsonObject.get("duration");
                String type_of_lessons = (String) jsonObject.get("type_of_lessons");

                preparedStatement.setString(1, name);
                preparedStatement.setString(2, price);
                preparedStatement.setString(3, max_students);
                preparedStatement.setString(4, period);
                preparedStatement.setString(5, duration);
                preparedStatement.setString(6, type_of_lessons);
                preparedStatement.setInt(7, id);  // Здесь предполагается, что id - это уникальный идентификатор записи.

                preparedStatement.executeUpdate();
                i++;
            }
            System.out.println("Данные изменены!");
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }


    };
}
