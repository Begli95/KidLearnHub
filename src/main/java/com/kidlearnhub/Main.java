package com.kidlearnhub;

import com.kidlearnhub.controllers.AboutPageController;
import com.kidlearnhub.controllers.AdminPageController;
import com.kidlearnhub.controllers.EnterAdminPageController;
import com.kidlearnhub.controllers.HomePageController;
import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class Main {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.addStaticFiles("/templates", Location.CLASSPATH);
            config.enableDevLogging();
            config.enforceSsl = true;
        }).start(7070);
        addRoutes(app);
    }

    private static void addRoutes(Javalin app) {
        app.get("/", HomePageController.homeHandler);
        app.get("/admin", AdminPageController.adminHandler);
        app.post("/admin", AdminPageController.adminPostHandler);
        app.get("/enter_admin", EnterAdminPageController.enterAdminHandler);
        app.get("/about", AboutPageController.aboutHandler);
    }
}