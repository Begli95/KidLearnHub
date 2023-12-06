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

        String sqlQueryClients = "select clients.name as clients_name, clients.phone, " +
                "clients.email, clients.schedule,clients.lesson_time, tariffs.name as " +
                "tariffs_name FROM  clients Left Join  tariffs on clients.tariff_id = tariffs.id";

        PreparedStatement preparedStatementClients = connection.prepareStatement(sqlQueryClients);

        ResultSet resultSetClients = preparedStatementClients.executeQuery();

        while (resultSetClients.next()) {
            String clientsName = resultSetClients.getString("clients_name");
            String phone = resultSetClients.getString("phone");
            String email = resultSetClients.getString("email");
            String schedule = resultSetClients.getString("schedule");
            String lesson_time = resultSetClients.getString("lesson_time");
            String tariffsName = resultSetClients.getString("tariffs_name");
            //System.out.println(clientsName+" "+phone+" "+email+" "+schedule+" "+lesson_time+" "+tariffsName);
            JSONObject jsonObjectClients = new JSONObject();
            jsonObjectClients.put("clientsName", clientsName);
            jsonObjectClients.put("phone", phone);
            jsonObjectClients.put("email", email);
            jsonObjectClients.put("schedule", schedule);
            jsonObjectClients.put("lesson_time", lesson_time);
            jsonObjectClients.put("tariffsName", tariffsName);

            jsonArrayClients.add(jsonObjectClients);
        }
        String jsonDataClients = jsonArrayClients.toString();

        resultSetClients.close();
        preparedStatementClients.close();
        return jsonDataClients;
    }

    public static String getTariffs(Connection connection) throws SQLException {
        JSONArray jsonArrayTariffs = new JSONArray();
        String sqlQueryTariffs = "select * from tariffs";

        PreparedStatement preparedStatementClients = connection.prepareStatement(sqlQueryTariffs);

        ResultSet resultSetTariffs = preparedStatementClients.executeQuery();

        while (resultSetTariffs.next()) {
            String name = resultSetTariffs.getString("name");
            String price = resultSetTariffs.getString("price");
            String max_students = resultSetTariffs.getString("max_students");
            String period = resultSetTariffs.getString("period");
            String duration = resultSetTariffs.getString("duration");
            String type_of_lessons = resultSetTariffs.getString("type_of_lessons");
            //System.out.println(name+" "+price+" "+max_students+" "+period+" "+duration+" "+type_of_lessons);
            JSONObject jsonObjectClients = new JSONObject();
            jsonObjectClients.put("name", name);
            jsonObjectClients.put("price", price);
            jsonObjectClients.put("max_students", max_students);
            jsonObjectClients.put("period", period);
            jsonObjectClients.put("duration", duration);
            jsonObjectClients.put("type_of_lessons", type_of_lessons);

            jsonArrayTariffs.add(jsonObjectClients);
        }
        String jsonDataTariffs = jsonArrayTariffs.toString();

        resultSetTariffs.close();
        preparedStatementClients.close();
        return jsonDataTariffs;
    }
}
