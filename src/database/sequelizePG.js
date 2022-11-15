const { Sequelize } = require("sequelize");
const { db } = require("../config/env.config");

const sequelize = new Sequelize({
  username: db.username,
  password: db.password,
  host: db.host,
  database: db.namedatabase,
  dialect: "postgres",
});

function connectDatabase() {
  sequelize
    .authenticate()
    .then(() => console.log("CONNECTE DATABESE"))
    .catch((err) => console.log(err));
  sequelize
    .sync()
    .then(() => console.log("SYNCHRONIZED DATABESE"))
    .catch((err) => console.log(err));
}

module.exports = { sequelize, connectDatabase };
