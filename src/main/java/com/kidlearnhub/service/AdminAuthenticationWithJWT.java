package com.kidlearnhub.service;

import io.javalin.http.Context;

import java.net.URISyntaxException;
import java.sql.*;

public class AdminAuthenticationWithJWT {

    public static boolean isAdminAuthenticated(Context ctx) {
        String token = ctx.cookie("adminToken");
        return token != null;
    }

    public static boolean isAdminValid(String email, String password) {
        try (Connection connection = UtilityService.getDatabaseConnection()) {
            String sql = "SELECT * FROM admin WHERE mail = ? AND password = ?";

            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setString(1, email);
                preparedStatement.setString(2, password);

                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    if (resultSet.next()) {
                        // Если мы нашли запись, значит email и пароль верные
                        return true;
                    }
                }
            }
        } catch (SQLException | URISyntaxException e) {
            e.printStackTrace();
        }
        return false;
    }
}
