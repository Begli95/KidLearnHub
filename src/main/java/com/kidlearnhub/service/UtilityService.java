package com.kidlearnhub.service;

import java.sql.*;

public class UtilityService {

    public static String convertToStr(String[] data){
        String str="";
        int i = 0;
        do{
            str += data[i];
            if(i+1 != data.length){str += ", ";}
            i++;
        }while (i < data.length);
        return str;
    }

    public static int getTariffIdByName(String tariffName) {
        tariffName = tariffName.toUpperCase();

        int tariffId = -1;

        String sql = "SELECT id FROM tariffs WHERE tariffs.name = ?";
        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/KidLearnHubDB", "postgres", "root");
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

            preparedStatement.setString(1, tariffName);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    tariffId = resultSet.getInt("id");
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return tariffId;
    }
}
