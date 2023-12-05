package com.kidlearnhub;

import com.kidlearnhub.controllers.AboutPageController;
import com.kidlearnhub.controllers.AdminPageController;
import com.kidlearnhub.controllers.EnterAdminPageController;
import com.kidlearnhub.controllers.HomePageController;
import com.kidlearnhub.service.UtilityService;
import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class Main {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.addStaticFiles("src/main/resources", Location.EXTERNAL);
            //config.enableDevLogging();
            config.enforceSsl = true;
        }).start(7070);
        addRoutes(app);

        String[] dataArray = {"sdfsdf", "asdsadad", "as123123312"};
        String result = UtilityService.convertToStr(dataArray);
        System.out.println(result);
    }


    private static void addRoutes(Javalin app) {
        app.get("/", HomePageController.homeHandler);
        app.post("/", HomePageController.homePostHandler);
        app.get("/admin", AdminPageController.adminHandler);
        app.post("/admin", AdminPageController.adminPostHandler);
        app.get("/enter_admin", EnterAdminPageController.enterAdminHandler);
        app.get("/about", AboutPageController.aboutHandler);
    }
}