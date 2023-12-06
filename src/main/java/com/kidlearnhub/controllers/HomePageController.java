package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

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
}
