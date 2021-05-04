package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Scanner;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Returns pet data as a JSON object, e.g. {"2017": 52, "2018": 34}] */
@WebServlet("/pet-data")
public class PetDataServlet extends HttpServlet {

  private LinkedHashMap<Integer, Float> petVersus = new LinkedHashMap<>();

  @Override
  public void init() {
    Scanner scanner = new Scanner(getServletContext().getResourceAsStream(
        "/WEB-INF/dog-data.csv"));
    while (scanner.hasNextLine()) {
      String line = scanner.nextLine();
      String[] cells = line.split(",");

      Integer year = Integer.valueOf(cells[0]);
      Float dogs = Float.valueOf(cells[1]);

      petVersus.put(year, dogs);
    }
    scanner.close();
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json");
    Gson gson = new Gson();
    String json = gson.toJson(petVersus);
    response.getWriter().println(json);
  }
}