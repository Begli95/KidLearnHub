package com.kidlearnhub;

import com.kidlearnhub.controllers.*;
import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class Main {
    public static void main(String[] args) {
        String portStr = System.getenv().getOrDefault("PORT", "7070");
        int port = Integer.parseInt(portStr);
        Javalin app = Javalin.create(config -> {
            config.addStaticFiles(staticFiles -> {
                staticFiles.directory = "/public";
                staticFiles.location = Location.CLASSPATH;
            });
            config.enforceSsl = true;
        }).start(port);
        addRoutes(app);
    }

    private static void addRoutes(Javalin app) {
        app.get("/", HomePageController.homeHandler);
        app.post("/requestClient", RequestClientController.requestHandler);
        app.post("/requestTariffs", RequestTariffsController.requestHandler);
        app.get("/admin", AdminPageController.adminHandler);
        app.post("/admin", AdminPageController.adminPostHandler);
        app.get("/enter_admin", EnterAdminPageController.enterAdminHandler);
        app.get("/description", AboutPageController.descriptionHandler);
        app.get("/contacts", AboutPageController.contactsHandler);
    }
}