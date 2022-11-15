require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    namedatabase: process.env.DB_NAMEDB,
    dialet: "postgres",
  },
};

module.exports = config;
