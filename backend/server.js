import express from "express";
const app = express();
import "dotenv/config";
const port = process.env.PORT || 6000;
import status from "express-status-monitor";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./utils/database/db.js";
import route from "./utils/routers/user.routes.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));
app.use(status());
app.use(bodyParser.json());
import path from "path";
const publicDir = path.join("./public");
const cardDir = path.join("./public/cards");
app.use("/public", express.static(publicDir));
app.use("/cards", express.static(cardDir));

app.set("view engine", "ejs");

// ! database
db();

// ! apis here
app.use("/api/v1", route);
app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
