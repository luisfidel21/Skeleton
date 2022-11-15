const expres = require("express");
const cors = require("cors");

const app = expres();

app.use(expres.json());
app.use(cors());

module.exports = app;
