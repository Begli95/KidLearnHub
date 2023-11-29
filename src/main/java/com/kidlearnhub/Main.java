package com.kidlearnhub;

import com.kidlearnhub.controllers.AboutPageController;
import com.kidlearnhub.controllers.AdminPageController;
import com.kidlearnhub.controllers.DBController;
import com.kidlearnhub.controllers.HomePageController;
import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) {
//        Javalin app = Javalin.create().start(7070);
//        JavalinConfig config = new JavalinConfig();
//        config.addStaticFiles((StaticFileConfig staticFileConfig) -> {
//            staticFileConfig.directory = "/templates";
//        });
        Javalin app = Javalin.create(config -> {
            //Javalin обрабатывать статические файлы из директории "resources/templates"
            config.addStaticFiles("/templates", Location.CLASSPATH);
        }).start(7070);
        addRoutes(app);
    }
    private static void addRoutes(Javalin app) {
        app.get("/", HomePageController.homeHandler);
        app.get("/admin", AdminPageController.adminHandler);
        app.get("/about", AboutPageController.aboutHandler);
        app.get("/db", DBController::handleRequest);
    }


}