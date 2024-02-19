package com.kidlearnhub.controllers;

import com.kidlearnhub.service.RenderHtmlFile;
import io.javalin.http.Handler;

public class EnterAdminPageController {
    public static Handler enterAdminHandler = ctx -> {
        ctx.result(RenderHtmlFile.render("public/enter_admin_panel.html")).contentType("text/html");
    };
}
