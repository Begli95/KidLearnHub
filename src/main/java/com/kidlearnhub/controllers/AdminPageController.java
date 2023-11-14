package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;

public class AdminPageController {
    public static Handler adminHandler = ctx -> {
        ctx.result(RenderHtmlFile.render("templates/admin_page.html")).contentType("text/html");
    };
}
