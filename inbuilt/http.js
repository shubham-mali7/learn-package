let http = require("http");

// req >> whatever we send to the server(params , query params , body)
// resp >> what server sends us back is response

let server = http.createServer((req, resp) => {
  resp.write("<h1>Hii From Nodejs server</h1>");
  resp.end();
});

server.listen(5300);


