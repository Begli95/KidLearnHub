package com.kidlearnhub.controllers;

import com.kidlearnhub.service.AdminAuthenticationWithJWT;
import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.security.Key;
import java.sql.*;
import java.util.Properties;

public class AdminPageController {
    private static final Key key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);
    public static Handler adminHandler = ctx -> {
        System.out.println("Handling /admin request");

        if (!AdminAuthenticationWithJWT.isAdminAuthenticated(ctx)) {
            ctx.redirect("/enter_admin");
        } else {
            String existingHtml = RenderHtmlFile.render("admin_panel.html");
            String url = "jdbc:postgresql://localhost:5432/KidLearnHubDB";
            String user = "postgres";
            String password = "root";
            Properties properties = new Properties();
            properties.setProperty("user", user);
            properties.setProperty("password", password);
            properties.setProperty("charset", "UTF-8");

            try {
                Connection connection = DriverManager.getConnection(url, properties);

                JSONArray jsonArray = new JSONArray();

                String sql = "select clients.name as clients_name, clients.phone, " +
                        "clients.email, clients.schedule,clients.lesson_time, tariffs.name as " +
                        "tariffs_name FROM  clients Left Join  tariffs on clients.tariff_id = tariffs.id";

                PreparedStatement preparedStatement = connection.prepareStatement(sql);

                ResultSet resultSet = preparedStatement.executeQuery();

                while (resultSet.next()) {
                    String clientsName = resultSet.getString("clients_name");
                    String phone = resultSet.getString("phone");
                    String email = resultSet.getString("email");
                    String schedule = resultSet.getString("schedule");
                    String lesson_time = resultSet.getString("lesson_time");
                    String tariffsName = resultSet.getString("tariffs_name");
                    System.out.println(clientsName+" "+phone+" "+email+" "+schedule+" "+lesson_time+" "+tariffsName);
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("clientsName", clientsName);
                    jsonObject.put("phone", phone);
                    jsonObject.put("email", email);
                    jsonObject.put("schedule", schedule);
                    jsonObject.put("lesson_time", lesson_time);
                    jsonObject.put("tariffsName", tariffsName);

                    jsonArray.add(jsonObject);
                }
                String jsonData = jsonArray.toString();
                String finalHtml = existingHtml.replace("DATA", jsonData);
                //String finalHtml = existingHtml.replace("<!--DATA-->", jsonData);
                ctx.html(finalHtml);

                resultSet.close();
                preparedStatement.close();
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
                ctx.status(500).json("Error occurred while processing the request");
            }
        }
    };

    public static Handler adminPostHandler = ctx -> {

        String email = ctx.formParam("email");
        String password = ctx.formParam("password");
        System.out.println(email + " "+ password);

        if (AdminAuthenticationWithJWT.isAdminValid(email, password)) {
            String token = Jwts.builder().setSubject("admin").signWith(key).compact();
            ctx.cookie("adminToken", token);
            ctx.result(RenderHtmlFile.render("admin_panel.html")).contentType("text/html");
        } else {
            ctx.status(401).json("Invalid credentials");
        }
    };
}
