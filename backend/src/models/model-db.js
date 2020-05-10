const { Client } = require("pg");

const db = {
  user: "postgres",
  host: "localhost",
  password: "admin",
  database: "API-PEAN",
  port: 5432,
};
const client = new Client(db);
module.exports = client;
