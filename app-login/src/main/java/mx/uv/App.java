package mx.uv;

import static spark.Spark.*;
import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;

import java.util.HashMap;
import java.util.Map;

/**
 * Hello world!
 *
 */
public class App {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        port(getHerokuAssignedPort());
        staticFiles.location("/");

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        // tiene prevalencia el mapeo estático de forma que
        // si tenemos un index.html, este se va a cargar primero que
        // el mapeo a la raíz "/"
        // get("/", (req, res) -> {
        // return "respuesta";
        // });

        // se agrega esta forma de envio de la página estática
        // debido a que cuando hacemos el deployment (jar) el statiFiles.location ya no
        // surte efecto
        get("/", (req, res) -> {
            Map<String, Object> model = new HashMap<>();
            return new VelocityTemplateEngine().render(new ModelAndView(model, "index.html"));
        });

        get("/hola", (req, res) -> {
            res.redirect("/hola.html");
            return null;
        });

        get("/usuario", (req, res) -> {
            res.redirect("/users.html");
            return null;
        });

        
        get("/registro", (req, res) -> {
            res.redirect("/registro.html");
            return null;
        });
        // do this
        get("/pagina", (req, res) -> {
            Map<String, Object> model = new HashMap<>();
            return new VelocityTemplateEngine().render(new ModelAndView(model, "pagina.html"));
        });

        // do this
        get("/velocity", (req, res) -> {
            Map<String, Object> model = new HashMap<>();
            model.put("nombre", "Que se yo!");
            return new VelocityTemplateEngine().render(new ModelAndView(model, "templates/hola.vm"));
        });

        // do this

    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; // return default port if heroku-port isn't set (i.e. on localhost)
    }
}
