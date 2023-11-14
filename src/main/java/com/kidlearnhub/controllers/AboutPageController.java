package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;

public class AboutPageController {
    public static Handler aboutHandler = ctx -> {
        ctx.result(RenderHtmlFile.render("templates/about_page.html")).contentType("text/html");
    };
}
