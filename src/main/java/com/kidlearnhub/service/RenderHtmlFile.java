package com.kidlearnhub.service;

import com.kidlearnhub.Main;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class RenderHtmlFile {
    public static String render(String filePath) {
        try {
            InputStream inputStream = Main.class.getClassLoader().getResourceAsStream(filePath);
            if (inputStream != null) {
                byte[] encoded = inputStream.readAllBytes();
                return new String(encoded, StandardCharsets.UTF_8);
            } else {
                return "File not found";
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "Error loading the file";
        }
    }
}
