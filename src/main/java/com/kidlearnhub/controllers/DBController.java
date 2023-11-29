package com.kidlearnhub.controllers;

import io.javalin.http.Context;
import java.sql.*;

public class DBController {
    public static void handleRequest(Context ctx) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/KidLearnHubDB", "postgres", "root");

            String jsonData = "{ \"message\": \"Your data has been fetched successfully\" }";

            ctx.json(jsonData);
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
            ctx.status(500).json("Error occurred while processing the request");
        }
    }
}
