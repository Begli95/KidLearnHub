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

public class RequestTariffsController {
    public static Handler requestHandler = ctx -> {
        String requestData = ctx.body();
        JSONParser parser = new JSONParser();

        try {
            JSONArray jsonArray = (JSONArray) parser.parse(requestData);
            String updateSql = "UPDATE tariffs SET name = ?, price = ?, max_students = ?, period = ?, duration = ?, type_of_lessons = ? WHERE id = ?";

            try (Connection connection = UtilityService.getDatabaseConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(updateSql)) {
                connection.setAutoCommit(false);
                System.out.println("Success connection request Tariff");

                for (Object jsonEntry : jsonArray) {
                    JSONObject jsonObject = (JSONObject) jsonEntry;

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
                    preparedStatement.setInt(7, UtilityService.getTariffIdByName(name));

                    preparedStatement.addBatch();
                }
                preparedStatement.executeBatch();
                connection.commit(); // Фиксация изменений

            } catch (SQLException e) {
                e.printStackTrace();
                ctx.status(500).json("Server Error: Error in database operation");
            }
        } catch (ParseException e) {
            e.printStackTrace();
            ctx.status(400).json("Bad Request: Error in parsing JSON");
        }
    };
}
