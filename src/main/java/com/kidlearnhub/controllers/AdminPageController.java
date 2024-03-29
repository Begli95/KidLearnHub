package com.kidlearnhub.controllers;

import com.kidlearnhub.service.AdminAuthenticationWithJWT;
import com.kidlearnhub.service.RenderHtmlFile;
import com.kidlearnhub.service.Repositories;
import com.kidlearnhub.service.UtilityService;
import io.javalin.http.Handler;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.net.URISyntaxException;
import java.security.Key;
import java.sql.Connection;
import java.sql.SQLException;

public class AdminPageController {
    private static final Key key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);
    public static Handler adminHandler = ctx -> {
        System.out.println("Handling /admin request");

        if (!AdminAuthenticationWithJWT.isAdminAuthenticated(ctx)) {
            ctx.redirect("/enter_admin");
        } else {
            String existingHtml = RenderHtmlFile.render("public/admin_panel.html");
            try {
                Connection connection = UtilityService.getDatabaseConnection();

                String jsonDataClients = Repositories.getClients(connection);
                String jsonDataTariffs = Repositories.getTariffs(connection);
                String finalHtml = existingHtml.replace("dataClients", jsonDataClients)
                        .replace("dataTariffs", jsonDataTariffs);
                ctx.html(finalHtml);

                connection.close();
            } catch (SQLException | URISyntaxException e) {
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
            ctx.redirect("/admin");
        } else {
            ctx.status(401).json("Invalid credentials");
        }
    };
}
