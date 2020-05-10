const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller-usuario");
router.get("/usuario/", controller.getUsuario);
router.get("/usuario/:id", controller.getUsuarioId);
router.post("/usuario", controller.crearUsuario);
router.put("/usuario/:id", controller.updateUsuario);
router.delete("/usuario/:id", controller.deleteUsuario);
module.exports = router;
