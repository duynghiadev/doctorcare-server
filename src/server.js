import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();
// query parameters: /use?id=7

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
// PORT === undefined => PORT = 6969

app.listen(port, () => {
  // callback function
  console.log(`Backend Nodejs is running on the port ${port}`);
});
