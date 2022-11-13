const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(8000, "localhost", () => {
  console.log("Connect to port 3000");
});
