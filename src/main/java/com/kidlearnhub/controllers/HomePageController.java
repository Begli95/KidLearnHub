package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;

public class HomePageController {
    public static Handler homeHandler = ctx -> {
        ctx.result(RenderHtmlFile.render("templates/main_page.html")).contentType("text/html");
    };
}
