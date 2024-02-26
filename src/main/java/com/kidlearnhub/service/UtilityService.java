package com.kidlearnhub.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;
import java.util.Properties;

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
        String dbUrl = System.getenv("DATABASE_URL");
        Properties props = new Properties();
        URI dbUri = new URI(dbUrl);

        String username = dbUri.getUserInfo().split(":")[0];
        String password = dbUri.getUserInfo().split(":")[1];
        System.out.println("User "+username+" Password "+password);
        String dbUrlJdbc = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath() + "?sslmode=require";

        props.setProperty("user", username);
        props.setProperty("password", password);
        return DriverManager.getConnection(dbUrlJdbc, props);
    }


}
