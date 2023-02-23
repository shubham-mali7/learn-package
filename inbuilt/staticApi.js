// if server is not connected to database its called as static api

let http = require("http");
let fs = require("fs");
let port = 4600;
let server = http.createServer((req, resp) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    resp.write(data);
    resp.end();
  });
});

server.listen(port);
