package com.kidlearnhub.controllers;

import io.javalin.Javalin;
import io.javalin.http.Handler;

public class HomePageController {
    public static Handler homeHandler = ctx -> {
        ctx.render("templates/index.html").contentType("text/html; charset=UTF-8");;
    };

    private static void addRoutes(Javalin app) {
        //app.get("/", HomePageController.homeHandler);
//        app.post("/scan", ScanController.scanHandler);
    }
}
