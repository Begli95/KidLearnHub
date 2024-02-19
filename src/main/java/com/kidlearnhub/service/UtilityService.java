package com.kidlearnhub.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;

public class UtilityService {

    public static String convertToStr(String[] array) {
        return String.join(", ", array);
    }

    public static int getTariffIdByName(String tariffName) {
        int tariffId = -1;

        String sql = "SELECT id FROM tariffs WHERE name = ?";

        try (Connection connection = getDatabaseConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

            preparedStatement.setString(1, tariffName);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    tariffId = resultSet.getInt("id");
                }
            }

        } catch (SQLException | URISyntaxException e) {
            e.printStackTrace();
        }
        return tariffId;
    }

    public static Connection getDatabaseConnection() throws URISyntaxException, SQLException {
        URI dbUri = new URI(System.getenv("DATABASE_URL"));
        String username = dbUri.getUserInfo().split(":")[0];
        String password = dbUri.getUserInfo().split(":")[1];
        String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath() + "?sslmode=require";

        return DriverManager.getConnection(dbUrl, username, password);
    }
}
