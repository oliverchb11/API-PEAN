const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const router = require("./routers/router-usuario");
const cors = require("cors");
//settings
app.set("port", process.env.PORT || 4000);
//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:4200" }));
//router
app.use("/", router);
//creacion de server
app.listen(app.get("port"), () => {
  console.log("server en el puerto: ", app.get("port"));
});
