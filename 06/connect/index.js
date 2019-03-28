const connect = require("connect");
const app = connect();
const logger = require("./logger")(":method :url");
const errorHandler = require("./errorHandler");

function hello(req, res) {
  foo();
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world!");
}

app.use(logger);
app.use(hello);
app.use(errorHandler);
app.listen(3000);
