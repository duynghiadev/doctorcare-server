import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  // rest api
  router.get("/helloworld", (req, res) => {
    return res.send("Hello World with duy nghia");
  });

  router.get("/", homeController.getHomePage);

  router.get("/about", homeController.getAboutPage);

  return app.use("/", router);
};

module.exports = initWebRoutes;
