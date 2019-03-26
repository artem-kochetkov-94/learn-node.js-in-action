const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    getTitles(res);
  })
  .listen(8081, "127.0.0.1");

function getTitles(res) {
  fs.readFile("./titles.json", (err, data) => {
    if (err) return hadError(err, res);

    const titles = JSON.parse(data.toString());
    getTemplate(titles, res);
  });
}

function getTemplate(titles, res) {
  fs.readFile("./template.html", (err, data) => {
    if (err) return hadError(err, res);

    const tmpl = data.toString();
    formatHTML(titles, tmpl, res);
  });
}

function formatHTML(titles, tmpl, res) {
  const html = tmpl.replace("%", titles.join("</li><li>"));
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}

function hadError(err, res) {
  console.log(err);
  res.end("Server Error");
}
