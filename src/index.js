const app = require("./app");
const { port } = require("./config/env.config");

function server() {
  app.listen(port, () => {
    console.log(`SERVER ON IN PORT: ${port}`);
  });
}

server();
