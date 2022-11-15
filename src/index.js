const app = require("./app");
const { port } = require("./config/env.config");
const { connectDatabase } = require("./database/sequelizePG");

function server() {
  app.listen(port, () => {
    console.log(`SERVER ON IN PORT: ${port}`);
  });

  connectDatabase();
}

server();
