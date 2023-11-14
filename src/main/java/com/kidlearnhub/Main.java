package com.kidlearnhub;

import com.kidlearnhub.controllers.AboutPageController;
import com.kidlearnhub.controllers.AdminPageController;
import com.kidlearnhub.controllers.HomePageController;
import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {
        Javalin app = Javalin.create().start(7070);

        app.before(ctx -> {
            ctx.res.setCharacterEncoding("UTF-8");
        });
        addRoutes(app);
    }

    private static void addRoutes(Javalin app) {
        app.get("/", HomePageController.homeHandler);
        app.get("/admin", AdminPageController.adminHandler);
        app.get("/about", AboutPageController.aboutHandler);
    }


}