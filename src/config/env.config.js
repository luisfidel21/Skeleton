require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    namedatabase: process.env.DB_NAMEDB,
    dialet: "postgres",
  },
};

module.exports = config;
