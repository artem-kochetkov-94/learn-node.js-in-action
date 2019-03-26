const events = require("events");
const myEmitter = new events.EventEmitter();
myEmitter.on("error", err => {
  console.log(`ERROR: ${err.message}`);
});
myEmitter.emit("error", new Error("Something is wrong."));

process.on("uncaughtException", err => {
  console.error(err.stack);
  process.exit(1);
});
