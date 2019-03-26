const EventEmmiter = require("events").EventEmitter;
const channel = new EventEmmiter();
channel.on("join", () => {
  console.log("Welcome!");
});
channel.emit('join');
channel.emit('join');