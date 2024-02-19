package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;

public class AboutPageController {
    public static Handler descriptionHandler = ctx -> {
        ctx.result(RenderHtmlFile.render("public/description.html")).contentType("text/html");
    };
    public static Handler contactsHandler = ctx -> {
        ctx.result(RenderHtmlFile.render("public/contact.html")).contentType("text/html");
    };
}
