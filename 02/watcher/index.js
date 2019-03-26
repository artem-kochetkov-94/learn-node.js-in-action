const Watcher = require("./watcher");

const watcher = new Watcher(watchDir, processedDir);

watcher.on("process", file => {
  const watchFile = `${watchDir}/${file}`;
  const processedFile = `${processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processedFile, err => {
    if (err) throw err;
  });
});

watcher.start();
