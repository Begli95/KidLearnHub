package com.kidlearnhub.service;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Repositories {
    public static String getClients(Connection connection) throws SQLException {
        JSONArray jsonArrayClients = new JSONArray();
        String sqlQueryClients = "SELECT clients.name AS clients_name, clients.phone, " +
                "clients.email, clients.schedule, clients.lesson_time, tariffs.name AS " +
                "tariffs_name FROM clients LEFT JOIN tariffs ON clients.tariff_id = tariffs.id";

        try (PreparedStatement preparedStatementClients = connection.prepareStatement(sqlQueryClients);
             ResultSet resultSetClients = preparedStatementClients.executeQuery()) {

            while (resultSetClients.next()) {
                JSONObject jsonObjectClients = new JSONObject();
                jsonObjectClients.put("clientsName", resultSetClients.getString("clients_name"));
                jsonObjectClients.put("phone", resultSetClients.getString("phone"));
                jsonObjectClients.put("email", resultSetClients.getString("email"));
                jsonObjectClients.put("schedule", resultSetClients.getString("schedule"));
                jsonObjectClients.put("lesson_time", resultSetClients.getString("lesson_time"));
                jsonObjectClients.put("tariffsName", resultSetClients.getString("tariffs_name"));

                jsonArrayClients.add(jsonObjectClients);
            }
        }
        return jsonArrayClients.toString();
    }

    public static String getTariffs(Connection connection) throws SQLException {
        JSONArray jsonArrayTariffs = new JSONArray();
        String sqlQueryTariffs = "SELECT * FROM tariffs";

        try (PreparedStatement preparedStatementTariffs = connection.prepareStatement(sqlQueryTariffs);
             ResultSet resultSetTariffs = preparedStatementTariffs.executeQuery()) {

            while (resultSetTariffs.next()) {
                JSONObject jsonObjectTariffs = new JSONObject();
                jsonObjectTariffs.put("name", resultSetTariffs.getString("name"));
                jsonObjectTariffs.put("price", resultSetTariffs.getString("price"));
                jsonObjectTariffs.put("max_students", resultSetTariffs.getString("max_students"));
                jsonObjectTariffs.put("period", resultSetTariffs.getString("period"));
                jsonObjectTariffs.put("duration", resultSetTariffs.getString("duration"));
                jsonObjectTariffs.put("type_of_lessons", resultSetTariffs.getString("type_of_lessons"));

                jsonArrayTariffs.add(jsonObjectTariffs);
            }
        }
        return jsonArrayTariffs.toString();
    }
}
