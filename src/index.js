const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const router = require("./routers/router-usuario");
//settings
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
//router
app.use("/", router);
//creacion de server
app.listen(app.get("port"), () => {
  console.log("server en el puerto: ", app.get("port"));
});
