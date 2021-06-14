require("dotenv").config();
const bodyParser = require("koa-bodyparser");
const server = require("./src/index");
const Koa = require("koa");
const app = new Koa();

app.use(bodyParser());
app.use(server.getMiddleware());

const koaServer = app.listen(process.env.PORT, () => {
  console.log(`listening....at path ${server.graphqlPath}`);
});

process.on("SIGTERM", () => {
  koaServer.close();
});

module.exports = server;
