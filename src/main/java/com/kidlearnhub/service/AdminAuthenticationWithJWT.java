package com.kidlearnhub.service;

import io.javalin.http.Context;

import java.sql.*;

public class AdminAuthenticationWithJWT {

    public static boolean isAdminAuthenticated(Context ctx) {
        String token = ctx.cookie("adminToken");
        return token != null;
    }

    public static boolean isAdminValid(String email, String password) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/KidLearnHubDB", "postgres", "root");
            String sql = "SELECT * FROM admin";

            PreparedStatement preparedStatement = connection.prepareStatement(sql);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                String dbEmail = resultSet.getString("mail");
                String dbPassword = resultSet.getString("password");
                if (email.equals(dbEmail) && password.equals(dbPassword)) {
                    return true;
                }
            }

            resultSet.close();
            preparedStatement.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}
