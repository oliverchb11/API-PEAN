const controller = {};
// const { QueryResult } = require("pg");
const client = require("../models/model-db");
// function de metodo **GET** para consultar todos los datos de la base de datos de pg
client.connect();
controller.getUsuario = async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM usuarios");

    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);

    return res.status(500).json("error en la consulta");
  }
};
// function de metodo **GET** para consultar el dato de la base de datos de pg por su **ID**
controller.getUsuarioId = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await client.query(
      "SELECT * FROM usuarios WHERE id = $1",
      [id]
    );

    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);

    return res.status(500).json("error");
  }
};
// function de metodo **POST** para crar usuario en la base de datos de pg
controller.crearUsuario = async (req, res) => {
  const { nombre, apellido, email, telefono } = req.body;
  try {
    const response = await client.query(
      "INSERT INTO usuarios ( nombre, apellido, email, telefono) VALUES($1, $2, $3, $4)",
      [nombre, apellido, email, telefono]
    );
    res.json({
      message: "Usuario creado correctamente",
      user: {
        nombre,
        apellido,
        email,
        telefono,
      },
    });
    console.log("usuario creado correctamente");
  } catch (e) {
    console.log(e);
    client.end();
    res.status(500).json("error");
  }
};
// function de metodo **UPDATE** para eliminar usuario en la base de datos de pg
controller.updateUsuario = async (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, email, telefono } = req.body;
  try {
    const response = await client.query(
      "UPDATE usuarios SET nombre = $1, apellido = $2, email = $3 , telefono = $4 WHERE id = $5",
      [nombre, apellido, email, telefono, id]
    );
    res.json({
      message: "usuario actualizado correctamente",
    });
    res.status(200).json(`usuario ${id} actualizado correctamente`);
  } catch (e) {
    console.log(e);
    res.status(500).json("error");
  }
};
// function de metodo **DELETE** para eliminar usuario en la base de datos de pg
controller.deleteUsuario = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await client.query("DELETE FROM usuarios WHERE id = $1", [
      id,
    ]);
    res.json({
      message: `Usuario ${id} eliminado correctamente`,
    });
    res.status(200).json(response.rows);
    console.log(`cliente ${id} eliminado correctamente`);
  } catch (e) {
    console.log(e);
    res.status(500).json("error");
  }
};
module.exports = controller;
