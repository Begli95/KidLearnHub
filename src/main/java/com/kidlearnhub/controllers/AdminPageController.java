package com.kidlearnhub.controllers;

import com.kidlearnhub.service.AdminAuthenticationWithJWT;
import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class AdminPageController {
    private static final Key key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);
    public static Handler adminHandler = ctx -> {
        System.out.println("Handling /admin request");

        if (!AdminAuthenticationWithJWT.isAdminAuthenticated(ctx)) {
            ctx.redirect("/enter_admin");
        } else {
            ctx.result(RenderHtmlFile.render("templates/admin_page.html")).contentType("text/html");
        }
    };

    public static Handler adminPostHandler = ctx -> {

        String email = ctx.formParam("email");
        String password = ctx.formParam("password");
        System.out.println(email + " "+ password);

        if (AdminAuthenticationWithJWT.isAdminValid(email, password)) {
            String token = Jwts.builder().setSubject("admin").signWith(key).compact();
            ctx.cookie("adminToken", token);
            ctx.result(RenderHtmlFile.render("templates/admin_page.html")).contentType("text/html");
        } else {
            ctx.status(401).json("Invalid credentials");
        }
    };
}
