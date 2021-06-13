import server from "../../index.js";

module.exports = async () => {
  global.httpServer = server;
  await global.httpServer.listen();
};
